import {useCallback, useEffect, useState} from "react";
import {LatLngLiteral} from "leaflet";

import {useDirection, useGetCurrentLocation} from "../../services";
import MapComponent from "../Map";
import {places as listPlaces} from "../../services/places";
import {Profile} from "../../services/mapbox/interfaces";
import {Place} from "../Map/interfaces";
import ErrorNotification from "./ErrorNotification";
import ZoomButton from "./ZoomButton";
import CustomInput from "./CustomInput";
import NavigationComponent from "./Navigation";

const Dashboard = () => {

    //TODO temporary state
    const [places, setPlaces] = useState<Array<Place>>(listPlaces)

    const [target, setTarget] = useState<Array<LatLngLiteral>>([{lat: 25.69125971191103, lng: -80.3877791296447}])

    const [zoom, setZoom] = useState(15);

    const [profile, setProfile] = useState(Profile.driving);



    const options = {
        enableHighAccuracy: true,
        timeout: 1000, //* 60, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
        maximumAge: 1000 * 3600 * 24 // 24 hour       : 27000
    };
    const {center, cancelLocationWatch, error} = useGetCurrentLocation(options)

    const direction = useDirection({
        profile: profile,
        departure: center,
        target: target,
        steps: true, //mandatory
        alternatives: false //unnecessary alternative
    })

    const onChangeZoom = useCallback((value: number) => {
        console.log(value)
        setZoom(value)
    }, [])

    //TODO FOR TEST ONLY
    const onSetTarget = useCallback((value: LatLngLiteral) => {
        let param: Array<LatLngLiteral> = []
        if (value.lat && value.lng) {
            param.push(value)
            setTarget(param)
        }
    }, [])

    useEffect(() => {
        if (!center.lat && !center.lng) return;

        setTimeout(() => {
            cancelLocationWatch();
        }, 6000);

    }, [center, cancelLocationWatch, error]);

    return <>
        <NavigationComponent direction={direction} location={center}/>

        <MapComponent places={places} zoom={zoom} center={center}
                      direction={direction?.routes[0].geometry.coordinates!}/>

        <ZoomButton currentZoom={zoom} onChangeZoom={onChangeZoom}/>

        {
            error && <ErrorNotification error={error}/>
        }

        {/*TODO FOR TEST ONLY*/}
        <CustomInput onSetTarget={onSetTarget}/>
    </>
}

export default Dashboard