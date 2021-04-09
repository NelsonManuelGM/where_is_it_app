import {LatLngLiteral} from "leaflet";

import {Direction} from "../../../services/mapbox/interfaces";

export interface NavigationComponentProps {
    direction?: Direction,
    location: LatLngLiteral,
    responsive: boolean,
    onClickLocomotion : (value:string) => void

}