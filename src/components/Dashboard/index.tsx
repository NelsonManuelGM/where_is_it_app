import { memo, useCallback, useEffect } from "react";

import AlertComponent from "./Alert";
import NavigationComponent from "./Navigation";
import ProductRequest from "./ProductComponent";
import NotificationAlert from "./NotificationAlert";
import Configuration from "./Configuration";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { ErrorCode } from "../../context/slices/notification";
import { requestDirection } from "../../context/slices/direction";
import { setResponsive } from "../../context/slices/map";


const Dashboard = () => {

    const dispatch = useAppDispatch()
    const { configuration } = useAppSelector(state => state.direction)
    const { type } = useAppSelector(state => state.error)

    // TODO this logic will change, this dispatch is only for test, it most depend on the pending status
    useEffect(() => {
        if (configuration.target && configuration.departure.lat && configuration.departure.lng) {
            dispatch(requestDirection())
        }
    }, [configuration.departure.lat, configuration.departure.lng, configuration.target, configuration.profile, dispatch])

    const updateDimensions = useCallback(() => {
        const width = window.innerWidth
        if (width <= 600) {
            dispatch(setResponsive({ responsive: true }))
        } else {
            dispatch(setResponsive({ responsive: false }))
        }
    }, [dispatch])

    useEffect(() => {
        window.addEventListener('load', updateDimensions);
        return () =>
            window.removeEventListener('load', updateDimensions);

    }, [updateDimensions])

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () =>
            window.removeEventListener('resize', updateDimensions);

    }, [updateDimensions])


    return <>
        <NavigationComponent location={configuration.departure} />

        <Configuration/>

        <ProductRequest />

        {
            type === ErrorCode.PERMISSION_DENIED ? <NotificationAlert /> : <AlertComponent />
        }

    </>
}

export default memo(Dashboard)