import {FC, memo, useState} from "react";
import {BottomNavigation, BottomNavigationAction, useTheme} from "@material-ui/core";
import {DirectionsBikeOutlined, DirectionsWalkOutlined, DriveEtaOutlined} from "@material-ui/icons";

import {customStyles} from "../../../../styles/theme";
import {LocomotionPickerProps} from "./interfaces";
import {Profile} from "../../../../services/mapbox/interfaces";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 130px;

  .MuiBottomNavigation-root {
    background-color: unset;
    height: unset;
  }

  .MuiBottomNavigationAction-root {
    max-width: unset;
    min-width: unset;
    color: unset;
  }

  .MuiBottomNavigationAction-root.Mui-selected {
    color: ${({theme}) => theme.palette.warning.main};
    padding-top: 8px;
  }

  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    padding-top: 8px;
  }
`;

const LocomotionPicker: FC<LocomotionPickerProps> = ({onClickLocomotion}) => {
    const {dashboardStyle} = customStyles()
    const theme = useTheme()

    const [value, setValue] = useState(0)

    return <Wrapper style={{padding: 0}} className={dashboardStyle} theme={theme}>
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
    </Wrapper>
}

export default memo(LocomotionPicker)