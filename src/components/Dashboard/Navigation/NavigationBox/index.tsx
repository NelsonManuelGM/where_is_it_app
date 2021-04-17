import React, { FC, memo } from "react";
import { ArrowBackIos } from "@material-ui/icons";
import { CircularProgress, ListItemText, Typography, useTheme } from "@material-ui/core";
import styled from "styled-components";

import { customStyles } from "../../../../context/theme";
import { NavigatorProps } from "./interfaces";
import SignalGenerator from "../NavigationDrawer/SignalGenerator";
import { Step } from "../../../../services/mapbox/interfaces";

const Cover = styled.div` 
  min-height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const NavigationBox: FC<NavigatorProps> = ({ navigation, onClickBox, responsive }) => {
    const theme = useTheme()
    const { navigationIcon } = customStyles()


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

    return <Cover theme={theme} onClick={onClickBox}
        style={{ width: responsive ? '80px' : '260px' }}>
        {
            navigation ? <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: '100%'
            }}>
                <ArrowBackIos fontSize={'small'} style={{ margin: '0 0.5rem' }} />
                {
                    !responsive && <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <ListItemText primary={navigation.maneuver.instruction} secondary={
                            <>
                                <Typography component='span' variant='body2' style={{ color: theme.palette.secondary.main }}>
                                    {
                                        handleStepString(navigation)
                                    }
                                </Typography>
                                <p style={{ margin: '1px' }}>   {navigation.distance.toFixed()} meters  | {(navigation.duration / 60).toFixed()} min</p>
                            </>
                        } />
                    </div>
                }
                {
                    SignalGenerator({
                        type: navigation.maneuver.type,
                        modifier: navigation.maneuver.modifier,
                        iconCssClass: navigationIcon
                    })
                }
            </div>
                : <CircularProgress disableShrink style={{ color: "white" }} size={25} />
        }
    </Cover>
}

export default memo(NavigationBox)