import {LatLngLiteral, LatLngTuple} from "leaflet";
import {ReactNode} from "react";

export interface MapSize {
    width: string,
    height: string,
    position: string,
}

export interface MapProps {
    places: Array<Place> | [],
    zoom: number,
    target?: Array<LatLngLiteral>,
    children?: ReactNode,
    center: LatLngLiteral,
    direction: Array<LatLngTuple>
}

export interface Place {
    coordinate: LatLngLiteral,
    name: string
}