import {LatLngTuple, LatLngLiteral} from "leaflet";

export enum Profile {
    driving = 'driving',
    cycling = 'cycling',
    walking = 'walking',
    drivingTraffic = 'driving-traffic'
}

export interface DirectionsProps {
    profile: string,
    departure: LatLngLiteral,
    target: Array<LatLngLiteral>,
    steps: boolean,
    alternatives: boolean,
}

export interface Waypoints {
    distance?: number,
    name?: string,
    location: LatLngTuple
}

export interface Maneuver {
    bearing_after: number,
    bearing_before: number,
    location: LatLngTuple,
    type: string,
    modifier?: string,
    instruction: string
}

export interface Geometry {
    coordinates: Array<LatLngTuple>,
    type: string
}

export interface Step {
    driving_side?: string,
    destinations?:string,
    mode: string,
    duration: number,
    name?: string,
    distance: number,
    maneuver: Maneuver
    geometry: Geometry
}

export interface Legs {
    summary?: string,
    distance: number,
    duration: number,
    steps: Array<Step>,
}

export interface Route {
    duration: number,
    distance: number,
    legs: Array<Legs>
    geometry: Geometry,
}

export interface Direction {
    routes: Array<Route>
    waypoints: Array<Waypoints>,
}

