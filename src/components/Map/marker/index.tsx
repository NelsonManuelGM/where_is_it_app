import {Marker, Popup} from "react-leaflet";
import {DivIcon, LatLngLiteral} from "leaflet";
import {FC, memo, ReactNode, useMemo} from "react";

interface MarkerProps {
    position: LatLngLiteral,
    icon?: DivIcon,
    children?: ReactNode,
    name?: string
    description?: string
}

const MarkerComponent: FC<MarkerProps> = ({position, icon, name, description}) => {
    return useMemo(()=>(
        <Marker position={position} icon={icon}>
            <Popup>
                <div>
                    {name || 'A pretty CSS3 popup.'} <br/> {description || 'Easily customizable'}.
                </div>
            </Popup>
        </Marker>
    ),[description, icon, name, position])
}

export default memo(MarkerComponent);