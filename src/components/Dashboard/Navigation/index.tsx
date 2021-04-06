import {FC, memo, useCallback, useEffect, useState} from "react";

import NavigationBox from "./NavigationBox";
import NavigationDrawer from "./NavigationDrawer";
import {NavigationComponentProps} from "./interfaces";
import {NavigationManeuver} from "./NavigationBox/interfaces";
import distanceBetweenPoint from "../../../services/distanceBetweenPoint";

const NavigationComponent:FC<NavigationComponentProps> = ({direction, location}) => {
    const [currentStep, setCurrentStep] = useState<number>()
    
    const [navigation, setNavigation] = useState<NavigationManeuver>();

    const [drawerFlag, setDrawerFlag] = useState<boolean>(false)

    const onClickBox = useCallback(() => {
        setDrawerFlag(!drawerFlag)
    }, [drawerFlag])

    useEffect(()=>{
        //TODO fix distance
        direction?.routes[0].legs[0].steps.forEach((step,index)=>{
            let distance = 0
            step.geometry.coordinates.forEach((coordinate)=>{
                distance = distanceBetweenPoint(location.lat, location.lng, coordinate[0], coordinate[1])
                console.log('DISTANCE IN METERS INSIDE LOOP: ',parseInt(distance.toFixed(2)))
                if(parseInt(distance.toFixed(2)) < 30)
                    setCurrentStep(index)
            })

        })
    },[direction?.routes, location.lat, location.lng])

    useEffect(()=>{
        if (currentStep !== undefined) {
            setNavigation({
                type: direction?.routes[0].legs[0].steps[currentStep].maneuver.type!, //'departure',
                modifier: direction?.routes[0].legs[0].steps[currentStep].maneuver.modifier,//'straight',
                instruction: direction?.routes[0].legs[0].steps[currentStep].maneuver.instruction,
                name: direction?.routes[0].legs[0].steps[currentStep].name,
                destination: direction?.routes[0].legs[0].steps[currentStep].destinations,
            })
        }
    },[currentStep, direction?.routes])

    return <>
        {
            navigation && <NavigationBox navigation={navigation} onClickBox={onClickBox}/>
        }
        <NavigationDrawer open={drawerFlag} onDrawerClose={onClickBox} route={direction?.routes[0]}/>
    </>
}

export default memo(NavigationComponent)