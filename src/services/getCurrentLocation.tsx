import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";

import { useAppSelector } from "../context/hooks";
import { setCoordinate } from '../context/slices/coordinate';
import { ErrorCode } from "../context/slices/notification";


const useGetCurrentLocation = (options: object) => {
    const dispatch = useDispatch()
    const { gpsAccuracyThreshold } = useAppSelector(state => state.coordinates)
    const coordinates = useAppSelector(state => state.coordinates)
    const locationWatchId: React.MutableRefObject<undefined | number> = useRef();

    const handleSuccess = useCallback((position: any) => {
        console.log("Latitude: " + position.coords.latitude.toPrecision(21) +
            " Longitude: " + position.coords.longitude.toPrecision(21) +
            " Accuracy: " + position.coords.accuracy
        )

        if (gpsAccuracyThreshold === undefined || position.coords.accuracy <= gpsAccuracyThreshold) {
            if (coordinates.latitude !== position.coords.latitude || coordinates.longitude !== position.coords.longitude) {
                dispatch(setCoordinate({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                }))
                dispatch({ type: 'notification/changeNotification', payload: { notification: '' } })
            }
        }
        else {
            setTimeout(() => {
                if (gpsAccuracyThreshold !== undefined || position.coords.accuracy > gpsAccuracyThreshold)
                    dispatch({ type: 'notification/changeNotification', payload: { notification: 'Failed to reach desired accuracy' } })
            }, 1000)
        }


    }, [gpsAccuracyThreshold, coordinates.latitude, coordinates.longitude, dispatch])

    const handleError = useCallback((error: any) => {
        if (error) {
            switch (error.code) {
                case (error.TIMEOUT):
                    dispatch({
                        type: 'notification/changeNotification',
                        payload: { notification: error.message, type: ErrorCode.TIMEOUT }
                    })
                    locationWatchId.current = navigator.geolocation.watchPosition(handleSuccess, handleError, options)
                    break;
                case (error.PERMISSION_DENIED):
                    dispatch({
                        type: 'notification/changeNotification',
                        payload: { notification: error.message, type: ErrorCode.PERMISSION_DENIED }
                    })
                    break;
            }
        }
    }, [dispatch, handleSuccess, options])

    const cancelLocationWatch = () => {
        if (locationWatchId.current && navigator.geolocation) {
            navigator.geolocation.clearWatch(locationWatchId.current);
        }
    };

    useEffect(() => {
        if (navigator.geolocation) {
            locationWatchId.current = navigator.geolocation.watchPosition(handleSuccess, handleError, options)
        } else {
            dispatch({
                type: 'notification/changeNotification',
                payload: { notification: "It can't handle geo location", type: ErrorCode.GEO_LOCATION_UNSUPPORTED }
            })

        }
        return cancelLocationWatch
    }, [dispatch, handleError, handleSuccess, options])

    return cancelLocationWatch
}

export default useGetCurrentLocation