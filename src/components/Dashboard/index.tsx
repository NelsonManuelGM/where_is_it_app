import {FC, useEffect, useState} from "react";
import {LatLngLiteral} from "leaflet";

import {Direction} from "../../services/mapbox/interfaces";
import Notification from "./Notification";
import ZoomButton from "./ZoomButton";
import NavigationComponent from "./Navigation";
import {NotificationType} from "./Notification/interfaces";
import ProductRequest from "./ProductRequest";
import CustomInput from "./CustomInput";

export interface DashboardProps {
    center: LatLngLiteral,
    onClickLocomotion: (value: string) => void,
    direction?: Direction,
    error?: string,
    onSetTarget: (value: LatLngLiteral) => void, //for test only
}

const Dashboard: FC<DashboardProps> = ({center, direction, error, onClickLocomotion, onSetTarget}) => {

    const [responsiveFlag, setResponsiveFlag] = useState<boolean>(false)

    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth
            if (width <= 600) {
                setResponsiveFlag(true)
            } else {
                setResponsiveFlag(false)
            }
        }
        window.addEventListener('resize', updateDimensions);
        return () =>
            window.removeEventListener('resize', updateDimensions);
    }, [])

    return <>
        <NavigationComponent direction={direction} location={center} responsive={responsiveFlag}
                             onClickLocomotion={onClickLocomotion}/>

        <ZoomButton/>

        {
            error && <Notification text={error} type={NotificationType.error}/>
        }

        {
            responsiveFlag && <ProductRequest/>
        }

        {/*TODO FOR TEST ONLY*/}
        <CustomInput onSetTarget={onSetTarget}/>
    </>
}

export default Dashboard