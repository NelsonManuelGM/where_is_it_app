import {LatLngLiteral} from "leaflet";
import {ReactNode} from "react";

export interface MapSize {
    width: string,
    height: string,
    position: string,
}

export interface MapProps {
    places: Array<Place> | [],
    children?: ReactNode,
}

export interface Place {
    coordinate: LatLngLiteral,
    name: string
}