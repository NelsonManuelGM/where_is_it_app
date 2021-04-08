import {ReactChildren} from "react";

export interface NavigationManeuver {
    type: string,
    modifier?: string,
    instruction?: string
    name?: string
    destination?: string
}

export interface NavigatorProps {
    navigation?: NavigationManeuver,
    children?: ReactChildren,
    onClickBox: () => void,
    responsive:boolean
}

