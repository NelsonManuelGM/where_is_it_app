import {ReactChildren} from "react";
import { Step } from "../../../../services/mapbox/interfaces";

export interface NavigatorProps {
    navigation?: Step,
    children?: ReactChildren,
    onClickBox: () => void,
}

