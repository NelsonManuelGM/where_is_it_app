import {FC, memo, useState} from "react";
import {BottomNavigation, BottomNavigationAction, useTheme} from "@material-ui/core";
import {DirectionsBikeOutlined, DirectionsWalkOutlined, DriveEtaOutlined} from "@material-ui/icons";

import styled from "styled-components";
import {customStyles} from "../../../../context/theme";
import {LocomotionPickerProps} from "./interfaces";
import {Profile} from "../../../../services/mapbox/interfaces";

const Cover = styled.div`
  top: 80px;
  right: 25px;
  padding: 0;
`

const LocomotionPicker: FC<LocomotionPickerProps> = ({onClickLocomotion}) => {
    const theme = useTheme()
    const {dashboardStyle} = customStyles()

    const [value, setValue] = useState(0)

    return <Cover theme={theme} className={dashboardStyle}>
        <BottomNavigation value={value} onChange={(event, newValue) => {
            setValue(newValue);
        }}>
            <BottomNavigationAction onClick={() => onClickLocomotion(Profile.driving)}
                                    icon={<DriveEtaOutlined fontSize={"small"}/>}/>
            <BottomNavigationAction onClick={() => onClickLocomotion(Profile.cycling)}
                                    icon={<DirectionsBikeOutlined fontSize={"small"}/>}/>
            <BottomNavigationAction onClick={() => onClickLocomotion(Profile.walking)}
                                    icon={<DirectionsWalkOutlined fontSize={"small"}/>}/>
        </BottomNavigation>
    </Cover>
}

export default memo(LocomotionPicker)