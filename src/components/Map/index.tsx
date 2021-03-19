import {FC, memo, useEffect, useMemo} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {LocationOn, PersonPinCircle} from '@material-ui/icons'
import {useTheme} from '@material-ui/core';
import {MapContainer, Polyline, TileLayer, useMap} from 'react-leaflet';
import L from 'leaflet';

import MarkerComponent from './marker';
import {MapProps} from './interfaces';
import {MAPBOX_TOKEN} from '../../services/credentials';
import {customStyles} from "../../context/theme";
import {useDirection, useGetCurrentLocation} from '../../services';
import {Profile} from "../../services/mapbox/interfaces";

const MapComponent: FC<MapProps> = ({places, zoom, ...props}) => {
    const customStyle = customStyles();
    const {palette} = useTheme()

    const options = {
        enableHighAccuracy: true,
        timeout: 1000, //* 60, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
        maximumAge: 1000 * 3600 * 24 // 24 hour       : 27000
    };
    const {center, cancelLocationWatch, error} = useGetCurrentLocation(options)

    const centerIcon = useMemo(() => L.divIcon({
        html: renderToStaticMarkup(
            <PersonPinCircle className={customStyle.customMarker} style={{color: palette.primary.main}}/>),
        popupAnchor: [2, -28]
    }), [customStyle.customMarker, palette.primary.main])
    const optionIcon = useMemo(() => L.divIcon({
        html: renderToStaticMarkup(<LocationOn className={customStyle.customMarker}/>),
        popupAnchor: [2, -28]
    }), [customStyle.customMarker])


    const direction = useDirection({
        profile: Profile.driving,
        coordinates: [
            center,
            {lat: 25.684209407950874, lng: -80.41917278495983}
        ],
        steps: true,
        alternatives: false
    })


    useEffect(() => {
        if (!center.lat && !center.lng) return;
        setTimeout(() => {
            cancelLocationWatch();
        }, 1000);

    }, [center, cancelLocationWatch]);

    const CenterMap = () => {
        let map = useMap()
        map.setView(center, zoom);
        return null
    }

    return <div className={customStyle.mapStyle} style={{margin: '-8px'}}>
        {
            error ? <p>location error: {error}</p>
                : <>
                    <p className={customStyle.customLayout}> Lat: {center.lat} | Lng: {center.lng}</p>
                    <MapContainer zoom={zoom} className={customStyle.mapStyle} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
                            id={'mapbox/streets-v11'}
                            accessToken={MAPBOX_TOKEN}
                            tileSize={512}
                            zoomOffset={-1}
                        />
                        <CenterMap/>

                        <MarkerComponent position={center} icon={centerIcon}/>
                        {
                            places && places.map((item: any, index: number) => {
                                return <MarkerComponent position={item.coordinate} key={index} icon={optionIcon}/>
                            })
                        }
                        {
                            direction && <Polyline pathOptions={{color: palette.error.main}}
                                                   positions={direction.routes[0].geometry.coordinates!}/>
                        }
                    </MapContainer>
                </>
        }
    </div>
}

export default memo(MapComponent);