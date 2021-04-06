import React, {useEffect, useRef, useState} from 'react';
import {LatLngLiteral} from "leaflet";

const useGetCurrentLocation = (options: object = {}) => {

    const [center, setCenter] = useState<LatLngLiteral>({lat: 0, lng: 0});
    const [error, setError] = useState<string | undefined>();
    const locationWatchId: React.MutableRefObject<undefined | number> = useRef();

    const handleSuccess = (position: any) => {
        console.log("Latitude: " + position.coords.latitude.toPrecision(21) +
            " Longitude: " + position.coords.longitude.toPrecision(21) +
            " Accuracy: " + position.coords.accuracy
        )

        setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        })
    }

    const handleError = (error: any) => {
        setError(error.message)
    }

    const cancelLocationWatch = () => {
        if (locationWatchId.current && navigator.geolocation) {
            navigator.geolocation.clearWatch(locationWatchId.current);
        }
    };

    useEffect(() => {
        if (navigator.geolocation) {
            locationWatchId.current = navigator.geolocation.watchPosition(handleSuccess, handleError, options)
        } else {
            alert("It can't handle geo location")
        }
        return cancelLocationWatch
    }, [options])

    return {center, cancelLocationWatch, error}
}

export default useGetCurrentLocation