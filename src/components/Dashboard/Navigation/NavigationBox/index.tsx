import React, {FC, memo} from "react";
import {ArrowBackIos} from "@material-ui/icons";
import styled from "styled-components";
import {CircularProgress, Typography, useTheme} from "@material-ui/core";

import {customStyles} from "../../../../styles/theme";
import {NavigatorProps} from "./interfaces";
import SignalGenerator from "../NavigationDrawer/SignalGenerator";
import {Step} from "../../../../services/mapbox/interfaces";
import { useAppSelector } from "../../../../context/hooks";

const Cover = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 5px;

  width:250px;

  @media screen and (max-width:600px){
      width:70px;
  }
`

const NavigationBox: FC<NavigatorProps> = ({navigation, onClickBox}) => {
    const theme = useTheme()
    const {dashboardStyle} = customStyles()
    const state = useAppSelector(state => state.map)

    // TODO separate this function and the one in the drawer to an external file
    const handleStepString = (step: Step): string => {
        let value: Array<string> = []
        if (step.name) {
            value.push(step.name)
        }
        if (step.destinations) {
            value.push(step.destinations)
        }
        return value.join('\n')
    }

    return <Cover theme={theme} onClick={onClickBox} className={dashboardStyle} data-testid='navigation-box'>
        {
            navigation ? <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: '100%'
                }}>
                    <ArrowBackIos fontSize={'small'} style={{margin: '0 0.5rem'}}/>
                    {
                        !state.responsive && <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant={'body1'}>{navigation.maneuver.instruction}</Typography>

                            <Typography variant='body2' style={{color: theme.palette.secondary.main}}>{
                                handleStepString(navigation)
                            }</Typography>

                            <Typography variant='subtitle2' style={{color: theme.palette.grayscale.main}}>
                                {navigation.distance.toFixed()} meters | {(navigation.duration / 60).toFixed()} min
                            </Typography>
                        </div>
                    }
                    {
                        SignalGenerator({
                            type: navigation.maneuver.type,
                            modifier: navigation.maneuver.modifier,
                        })
                    }
                </div>
                : <CircularProgress disableShrink style={{color: "white"}} size={25}/>
        }
    </Cover>
}

export default memo(NavigationBox)