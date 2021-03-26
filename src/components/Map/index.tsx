import {FC, memo, useEffect, useMemo, useRef} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {LocationOn, PersonPinCircle} from '@material-ui/icons'
import {useTheme} from '@material-ui/core';
import {MapContainer, Polyline, TileLayer} from 'react-leaflet';
import L from 'leaflet';

import MarkerComponent from './marker';
import {MapProps} from './interfaces';
import {MAPBOX_TOKEN} from '../../services/credentials';
import {customStyles} from "../../context/theme";

const MapComponent: FC<MapProps> = ({places, zoom, center, direction}) => {
    const customStyle = customStyles();
    const {palette} = useTheme()
    const mapRef = useRef<L.Map>()

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
            mapRef.current.setView(center, zoom);
        }
    }, [center, zoom])

    return <div className={customStyle.mapStyle} style={{margin: '-8px'}}>
        <MapContainer zoom={zoom} className={customStyle.mapStyle} zoomAnimation={true} scrollWheelZoom={true} zoomControl={false}
                      whenCreated={whenCreatedHandler}>
            <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
                id={'mapbox/streets-v11'}
                accessToken={MAPBOX_TOKEN}
                tileSize={512}
                zoomOffset={-1}
            />

            <MarkerComponent position={center} icon={centerIcon}/>
            {
                places && places.map((item: any, index: number) => {
                    return <MarkerComponent position={item.coordinate} key={index} icon={optionIcon}/>
                })
            }
            {
                direction && <Polyline pathOptions={{color: palette.error.main, weight: 5}}
                                       positions={direction}/>
            }
        </MapContainer>
    </div>
}

export default memo(MapComponent);