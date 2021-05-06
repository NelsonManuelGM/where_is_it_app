import {Route} from "../../../../services/mapbox/interfaces";

export interface NavigationDrawerParams {
    open: boolean,
    onDrawerClose: () => void,
    route?: Route,
    currentStep?:number
}