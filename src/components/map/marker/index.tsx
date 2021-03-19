import {Marker, Popup} from "react-leaflet";
import {DivIcon, LatLngLiteral} from "leaflet";
import {FC, ReactNode, useMemo} from "react";

interface MarkerProps {
    position: LatLngLiteral,
    icon?: DivIcon,
    children?: ReactNode
}

const MarkerComponent: FC<MarkerProps> = ({position, icon, ...props}) => {
    return useMemo(()=>(
        icon ?
        <Marker position={position} icon={icon}>
            <Popup>
                <div>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </div>
            </Popup>
        </Marker>
            : <Marker position={position}>
                <Popup>
                    <div>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </div>
                </Popup>
            </Marker>
    ),[icon, position])
}

export default MarkerComponent;