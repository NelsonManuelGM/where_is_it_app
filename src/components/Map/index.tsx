import {FC, memo, useEffect, useMemo, useRef, useState} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {LocationOn, PersonPinCircle} from '@material-ui/icons'
import {useTheme} from '@material-ui/core';
import {MapContainer, Polyline, TileLayer} from 'react-leaflet';
import L, {LatLngTuple} from 'leaflet';

import MarkerComponent from './marker';
import {MapProps} from './interfaces';
import {MAPBOX_TOKEN} from '../../services/credentials';
import {customStyles} from "../../styles/theme";
import {useAppSelector} from "../../context/hooks";

const MapComponent: FC<MapProps> = ({places}) => {
    const customStyle = customStyles();
    const {palette} = useTheme()
    const mapRef = useRef<L.Map>()

    const {zoom} = useAppSelector(state=>state.map)

    const [polyline, setPolyline] = useState<Array<LatLngTuple>>([])

    const {direction, configuration} = useAppSelector(state => state.direction)


    useEffect(() => {
        if (direction) {
            setPolyline(direction.routes[0].geometry.coordinates)
        }
    }, [direction])

    const centerIcon = useMemo(() => L.divIcon({
        html: renderToStaticMarkup(
            <PersonPinCircle className={customStyle.customMarker} style={{color: palette.primary.main}}/>),
        popupAnchor: [2, -28]
    }), [customStyle.customMarker, palette.primary.main])

    const optionIcon = useMemo(() => L.divIcon({
        html: renderToStaticMarkup(<LocationOn className={customStyle.customMarker}/>),
        popupAnchor: [2, -28]
    }), [customStyle.customMarker])

    const whenCreatedHandler = (map: L.Map) => mapRef.current = map

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setView(configuration.departure, zoom);
        }
    }, [configuration.departure, zoom])

    return <div className={customStyle.mapStyle} style={{margin: '-8px'}}>
        <MapContainer zoom={zoom} center={configuration.departure} className={customStyle.mapStyle} zoomAnimation={true} scrollWheelZoom={true}
                      zoomControl={false}
                      whenCreated={whenCreatedHandler}>
            <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
                id={'mapbox/streets-v11'}
                accessToken={MAPBOX_TOKEN}
                tileSize={512}
                zoomOffset={-1}
            />
            {
                configuration.departure && <MarkerComponent position={configuration.departure} icon={centerIcon}/>
            }
            {
                places && places.map((item: any, index: number) => {
                    return <MarkerComponent position={item.coordinate} key={index} icon={optionIcon}/>
                })
            }
            {
                polyline.length > 0 && <Polyline pathOptions={{color: palette.error.main, weight: 5}}
                                                               positions={polyline}/>
            }
        </MapContainer>
    </div>
}

export default memo(MapComponent);