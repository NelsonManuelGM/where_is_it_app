import { useCallback, useEffect, useState } from "react";
import { LatLngLiteral } from "leaflet";

import Notification from "./Notification";
import ZoomButton from "./ZoomButton";
import NavigationComponent from "./Navigation";
import ProductRequest from "./ProductComponent";
import CustomInput from "./CustomInput";
import NotificationAlert from "./NotificationAlert";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { ErrorCode } from "../../context/slices/notification";
import { requestDirection } from "../../context/slices/direction";


const Dashboard = () => {

    const [responsiveFlag, setResponsiveFlag] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const { configuration } = useAppSelector(state => state.direction)
    const { type } = useAppSelector(state => state.error)


    // TODO FOR TEST ONLY
    const onSetTarget = useCallback((value: LatLngLiteral) => {
        let param: Array<LatLngLiteral> = []
        if (value.lat && value.lng) {
            param.push(value)
            dispatch({ type: 'direction/setConfiguration', payload: { target: param } })
        }
    }, [dispatch])

    // TODO this logic will change, this dispatch is only for test, it most depend on the pending status
    useEffect(() => {
        if (configuration.target && configuration.departure.lat && configuration.departure.lng) {
            dispatch(requestDirection())
        }
    }, [configuration.departure.lat, configuration.departure.lng, configuration.target, configuration.profile, dispatch])

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
        <NavigationComponent location={configuration.departure} responsive={responsiveFlag} />

        <ZoomButton />

        {
            type === ErrorCode.PERMISSION_DENIED ? <NotificationAlert /> : <Notification />
        }

        <ProductRequest responsiveFlag={responsiveFlag} />

        { /* TODO FOR TEST ONLY */ }
        <CustomInput onSetTarget={onSetTarget} />
    </>
}

export default Dashboard