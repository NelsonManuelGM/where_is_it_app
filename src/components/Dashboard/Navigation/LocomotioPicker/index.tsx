import {FC, memo, useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {DirectionsBikeOutlined, DirectionsWalkOutlined, DriveEtaOutlined} from "@material-ui/icons";

import {customStyles} from "../../../../context/theme";
import {LocomotionPickerProps} from "./interfaces";
import {Profile} from "../../../../services/mapbox/interfaces";


const LocomotionPicker: FC<LocomotionPickerProps> = ({onClickLocomotion}) => {
    const {dashboardStyle} = customStyles()

    const [value, setValue] = useState(0)

    return <div style={{padding:0, width:'115px'}} className={dashboardStyle}>
        <BottomNavigation value={value} onChange={(event, newValue) => {
            setValue(newValue);
        }}>
            <BottomNavigationAction onClick={() => onClickLocomotion(Profile.driving)}
                                    icon={<DriveEtaOutlined fontSize={"small"}/>} about={"Driving"}/>
            <BottomNavigationAction onClick={() => onClickLocomotion(Profile.cycling)}
                                    icon={<DirectionsBikeOutlined fontSize={"small"}/>} about={"Cycling"}/>
            <BottomNavigationAction onClick={() => onClickLocomotion(Profile.walking)}
                                    icon={<DirectionsWalkOutlined fontSize={"small"}/>} about={"Walking"}/>
        </BottomNavigation>
    </div>
}

export default memo(LocomotionPicker)