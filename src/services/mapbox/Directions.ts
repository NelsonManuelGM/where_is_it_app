import axios from './../axios'
import {LatLngLiteral} from "leaflet";
import {useEffect, useState} from "react";
import {MAPBOX_TOKEN} from "../../credentials";
import {Direction, DirectionsParams} from "./interfaces";
import {manageRoutes, manageWaypoints} from './dataCleaner'

const alignCoordinates = (props: Array<LatLngLiteral>): string => {
    let coordinates: Array<string> = []
    props.map((item) => coordinates.push(`${item.lng}%2C${item.lat}`))
    return coordinates.join('%3B')
}

const useDirection = (options: DirectionsParams) => {
    const [direction, setDirection] = useState<Direction>()
    const [url, setUrl] = useState<string>()

    //TODO coordinates[0] is my current position
    let coordinates = options.coordinates[0].lat ? alignCoordinates(options.coordinates) : undefined

    useEffect(() => {
        if (coordinates) {
            setUrl(`${options.profile}/${coordinates}?alternatives=${options.alternatives}&geometries=geojson&steps=${options.steps}&access_token=${MAPBOX_TOKEN}`)
        }
    }, [coordinates, options.alternatives, options.profile, options.steps])

    useEffect(() => {
        const getDirections = async () => {
            try {
                const {data, status} = await axios.get<Direction>(url!)
                if (status && status === 200) {
                    // setDirection(data)
                    setDirection({
                        routes: manageRoutes(data.routes),
                        waypoints: manageWaypoints(data.waypoints)
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
        if (url) {
            getDirections()
        }
    }, [url])
    return direction
}

export default useDirection