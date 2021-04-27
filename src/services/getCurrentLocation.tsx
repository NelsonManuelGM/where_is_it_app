import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";

import {useAppSelector} from "../context/hooks";
import {ErrorCode} from "../context/slices/error";


const useGetCurrentLocation = (options: object = {}) => {
    const dispatch = useDispatch()
    const departure = useAppSelector(state => state.direction.configuration.departure)
    const locationWatchId: React.MutableRefObject<undefined | number> = useRef();

    const handleSuccess = useCallback((position: any) => {
        console.log("Latitude: " + position.coords.latitude.toPrecision(21) +
            " Longitude: " + position.coords.longitude.toPrecision(21) +
            " Accuracy: " + position.coords.accuracy
        )
        if (departure.lat !== position.coords.latitude || departure.lng !== position.coords.longitude) {
            dispatch({
                type: 'direction/setConfiguration', payload: {
                    departure: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                }
            })
            dispatch({type: 'error/changeError', payload: {error: ''}})
        }
    },[departure.lat, departure.lng, dispatch])

    const handleError = useCallback((error: any) => {
        console.log('Handeling error')
        console.log(error)
        if (error) {
            switch (error.code) {
                case (error.TIMEOUT):
                    dispatch({type: 'error/changeError', payload: {error: error.message, type: ErrorCode.TIMEOUT}})
                    locationWatchId.current = navigator.geolocation.watchPosition(handleSuccess, handleError, options)
                    break;
                case (error.PERMISSION_DENIED):
                    dispatch({
                        type: 'error/changeError',
                        payload: {error: error.message, type: ErrorCode.PERMISSION_DENIED}
                    })
                    break;
            }
        }
    },[dispatch, handleSuccess, options])

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
                type: 'error/changeError',
                payload: {error: "It can't handle geo location", type: ErrorCode.GEO_LOCATION_UNSUPPORTED}
            })

        }
        return cancelLocationWatch
    }, [dispatch, handleError, handleSuccess, options])

    return cancelLocationWatch
}

export default useGetCurrentLocation