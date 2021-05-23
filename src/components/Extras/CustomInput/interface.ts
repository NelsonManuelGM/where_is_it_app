import {LatLngLiteral} from "leaflet";

export interface CustomInputParams {
    onSetTarget: (value: LatLngLiteral) => void
}