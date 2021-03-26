import {useEffect, useState} from 'react';
import {LatLngLiteral} from 'leaflet';

import axios from './../axios'
import {manageRoutes, manageWaypoints} from './auxiliary/dataCleaner'
import {Direction, DirectionsProps} from './interfaces';
import {MAPBOX_TOKEN} from '../credentials';

const isLatLngLiteral = (data: object): data is LatLngLiteral => {
    //method to check if the type is LatLngLiteral
    return (data as LatLngLiteral).lat !== undefined && (data as LatLngLiteral).lng !== undefined
}

const alignCoordinates = (departure: LatLngLiteral, target: Array<LatLngLiteral>): string => {
    let coordinates: Array<string> = [`${departure.lng}%2C${departure.lat}`,]

    target.map((item) => coordinates.push(`${item.lng}%2C${item.lat}`))
    return coordinates.join('%3B')
}


const validateCoordinates = (coordinates: LatLngLiteral | Array<LatLngLiteral>):boolean => {
    let flag:boolean = false

    if (isLatLngLiteral(coordinates)) {
        flag = coordinates.lng !== 0 && coordinates.lat !== 0
    }

    else {
        for (let item of coordinates) {
            flag = validateCoordinates(item)
        }
    }

    return flag
}

const useDirection = ({target,departure,alternatives,steps,profile}: DirectionsProps) => {
    const [direction, setDirection] = useState<Direction>()
    const [url, setUrl] = useState<string>()

    //TODO coordinates[0] is my current position
    let [coordinates, setCoordinates] = useState<string>()

    useEffect(()=>{
        if (validateCoordinates(departure) && validateCoordinates(target)){
            let auxiliary = alignCoordinates(departure, target)
            setCoordinates(auxiliary)
        }
    },[departure, target])

    useEffect(() => {
        if (coordinates) {
            setUrl(`${profile}/${coordinates}?alternatives=${alternatives}&geometries=geojson&steps=${steps}&access_token=${MAPBOX_TOKEN}`)
        }
    }, [coordinates, alternatives, profile, steps])

    useEffect(() => {
        const getDirections = async () => {
            try {
                const {data, status} = await axios.get<Direction>(url!)
                if (status && status === 200) {
                    setDirection({
                        routes: manageRoutes(data.routes),
                        waypoints: manageWaypoints(data.waypoints)
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
        if (url) {
            getDirections()
        }
    }, [url])
    return direction
}

export default useDirection