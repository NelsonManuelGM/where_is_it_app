import {FC, memo, useCallback, useEffect, useState} from "react";
import styled from "styled-components";

import NavigationBox from "./NavigationBox";
import NavigationDrawer from "./NavigationDrawer";
import {NavigationComponentProps} from "./interfaces";
import {distanceBetweenPoint} from "../../../services";
import LocomotionPicker from "./LocomotioPicker";
import {Route, Step} from "../../../services/mapbox/interfaces";
import {useAppSelector} from "../../../context/hooks";

const Wrapper = styled.div`
  top: 20px;
  right: 25px;
  position: absolute;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const NavigationComponent: FC<NavigationComponentProps> = ({location, responsive}) => {
    const {direction} = useAppSelector(state => state.direction)

    const [currentStep, setCurrentStep] = useState<number>()

    const [navigation, setNavigation] = useState<Step>();

    const [drawerFlag, setDrawerFlag] = useState<boolean>(false)

    const [routes, setRoutes] = useState<Route>()

    const onClickBox = useCallback(() => {
        setDrawerFlag(!drawerFlag)
    }, [drawerFlag])

    useEffect(() => {
        if (direction) {
            setRoutes(direction.routes[0])
        }
    }, [direction])

    useEffect(() => {
        if (direction) {
            direction?.routes[0].legs[0].steps.forEach((step, index) => {
                let distance = 0
                step.geometry.coordinates.forEach((coordinate) => {
                    distance = distanceBetweenPoint(location.lat, location.lng, coordinate[0], coordinate[1])
                    //TODO delete this
                    console.log('DISTANCE -> METERS -> : ', parseInt(distance.toFixed(2)))

                    //TODO customizable error for current position
                    if (parseInt(distance.toFixed(2)) < 90)
                        setCurrentStep(index)
                })

            })
        }
    }, [direction, direction?.routes, location.lat, location.lng])

    useEffect(() => {
        if (currentStep !== undefined && direction) {
            setNavigation(direction?.routes[0].legs[0].steps[currentStep])
        }
    }, [currentStep, direction, direction?.routes])

    return <>
        <Wrapper>
            <NavigationBox navigation={navigation} onClickBox={onClickBox} responsive={responsive}/>
            {
                navigation && <LocomotionPicker/>
            }
        </Wrapper>
        {
            routes && <NavigationDrawer open={drawerFlag && currentStep !== undefined} onDrawerClose={onClickBox}
                           route={routes} currentStep={currentStep}/>
        }
    </>
}

export default memo(NavigationComponent)