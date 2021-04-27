import {LatLngLiteral} from "leaflet";

import axios from "./../axios";
import {Direction, DirectionsProps} from "./interfaces";
import {MAPBOX_TOKEN} from "../credentials";

const isLatLngLiteral = (data: object): data is LatLngLiteral => {
    //method to check if the type is LatLngLiteral
    return (data as LatLngLiteral).lat !== undefined && (data as LatLngLiteral).lng !== undefined
}

const alignCoordinates = (departure: LatLngLiteral, target: Array<LatLngLiteral>): string => {
    let coordinates: Array<string> = [`${departure.lng}%2C${departure.lat}`,]

    target.map((item) => coordinates.push(`${item.lng}%2C${item.lat}`))
    return coordinates.join('%3B')
}

const validateCoordinates = (coordinates: LatLngLiteral | Array<LatLngLiteral>): boolean => {
    let flag: boolean = false

    if (isLatLngLiteral(coordinates)) {
        flag = coordinates.lng !== 0 && coordinates.lat !== 0
    } else {
        for (let item of coordinates) {
            flag = validateCoordinates(item)
        }
    }

    return flag
}

export const getDirection = async ({alternatives, target, departure, profile, steps}: DirectionsProps) => {
    let coordinates: string = ''

    if (departure && target && validateCoordinates(departure) && validateCoordinates(target)) {
        coordinates = alignCoordinates(departure, target)
    }

    let url = `${profile}/${coordinates}?alternatives=${alternatives}&geometries=geojson&steps=${steps}&bearings=60,45;45,45&overview=full&access_token=${MAPBOX_TOKEN}`

    return await axios.get<Direction>(url)
}