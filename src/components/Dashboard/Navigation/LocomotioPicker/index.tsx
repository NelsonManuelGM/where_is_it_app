import { memo, useCallback, useState } from "react";
import { BottomNavigation, BottomNavigationAction, useTheme } from "@material-ui/core";
import { DirectionsBikeOutlined, DirectionsWalkOutlined, DriveEtaOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { customStyles } from "../../../../styles/theme";
import { Profile } from "../../../../services/mapbox/interfaces";
import { StatusType } from "../../../../context/slices/direction";

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
    color: ${({ theme }) => theme.palette.warning.main};
    padding-top: 8px;
  }

  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    padding-top: 8px;
  }
`;

const LocomotionPicker = () => {
  const { dashboardStyle } = customStyles()
  const theme = useTheme()

  const dispatch = useDispatch()


  const onClickLocomotion = useCallback((value: Profile) => {
    dispatch({ type: 'direction/setConfiguration', payload: { profile: value } })
    dispatch({ type: 'direction/setStatus', payload: { status: StatusType.pending } })

  }, [dispatch])

  const [value, setValue] = useState(0)

  return <Wrapper style={{ padding: 0 }} className={dashboardStyle} theme={theme} data-testid='locomotion-picker'>
    <BottomNavigation value={value} onChange={(event, newValue) => {
      setValue(newValue);
    }}>
      <BottomNavigationAction onClick={() => onClickLocomotion(Profile.driving)}
        icon={<DriveEtaOutlined fontSize={"small"} />} about={"Driving"} data-testid='btn-driving' />
      <BottomNavigationAction onClick={() => onClickLocomotion(Profile.cycling)}
        icon={<DirectionsBikeOutlined fontSize={"small"} />} about={"Cycling"} data-testid='btn-cycling' />
      <BottomNavigationAction onClick={() => onClickLocomotion(Profile.walking)}
        icon={<DirectionsWalkOutlined fontSize={"small"} />} about={"Walking"} data-testid='btn-walking' />
    </BottomNavigation>
  </Wrapper>
}

export default memo(LocomotionPicker)