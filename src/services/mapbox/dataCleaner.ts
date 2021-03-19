import {Geometry, Legs, Maneuver, Route, Step, Waypoints} from './interfaces';
import {LatLngTuple} from 'leaflet';

const manageGeometry = (data: Geometry): Geometry => {
    let coordinates: Array<LatLngTuple> = []

    data.coordinates.forEach(item => {
        coordinates.push([item[1], item[0]])
    })

    return {
        type: data.type,
        coordinates: coordinates
    }
}

const manageManeuver = (data: Maneuver): Maneuver => {
    return {
        bearing_after: data.bearing_after,
        bearing_before: data.bearing_before,
        location: [data.location[1], data.location[0]],
        instruction: data.instruction,
        type: data.type

    }
}

const manageSteps = (data: Array<Step>): Array<Step> => {
    let response: Array<Step> = []

    data.forEach((item: Step) => {
        response.push({
            driving_side: item.driving_side,
            mode: item.mode,
            duration: item.duration,
            name: item.name,
            distance: item.distance,
            maneuver: manageManeuver(item.maneuver),
            geometry: manageGeometry(item.geometry)
        })
    })
    return response
}

const manageLegs = (data: Array<Legs>): Array<Legs> => {
    let response: Array<Legs> = []
    data.forEach((item: Legs) => {
        response.push({
            summary: item.summary,
            distance: item.distance,
            duration: item.distance,
            steps: manageSteps(item.steps)
        })
    })
    return response
}


const manageRoutes = (data: Array<Route>): Array<Route> => {
    let response: Array<Route> = []

    data.forEach((item: Route) => {
        response.push({
            duration: item.duration,
            distance: item.distance,
            legs: manageLegs(item.legs),
            geometry: manageGeometry(item.geometry)
        })
    })

    return response
}

const manageWaypoints = (data: Array<Waypoints>): Array<Waypoints> => {
    let response: Array<Waypoints> = []

    data.forEach(item => {
        response.push({
            distance: item.distance,
            location: [item.location[1], item.location[0]],
            name: item.name
        })
    })

    return response
}


export {
    manageRoutes,
    manageWaypoints
}