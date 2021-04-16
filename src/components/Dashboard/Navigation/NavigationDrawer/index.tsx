import React, { FC, memo, useCallback } from "react";
import { Avatar, Divider, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography, useTheme } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import { customStyles } from "../../../../context/theme";
import { NavigationDrawerParams } from "./interfaces";
import { Step } from "../../../../services/mapbox/interfaces";
import SignalGenerator from "./SignalGenerator";


const NavigationDrawer: FC<NavigationDrawerParams> = ({ open, onDrawerClose, route, currentStep }) => {
    const { navigationIcon, drawerSelectedItem } = customStyles()
    const theme = useTheme()

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

    const listRef = useCallback((value: HTMLUListElement) => {
        if (value && currentStep !== undefined) {
            for (let c of value.children) {
                if (c.tagName === 'LI') {
                    c.classList.forEach(value => {
                        if (value === currentStep.toString()) {
                            c.attributes[0].ownerElement?.classList.add(drawerSelectedItem)
                        }
                    })
                }
            }
        }
    }, [currentStep, drawerSelectedItem])


    return <Drawer anchor={"right"} open={open} onClose={onDrawerClose}>
        <IconButton aria-label="delete" size="small" style={{ padding: '6px 0 0 6px' }}>
            <Close fontSize="inherit" style={{ color: 'white', marginRight: '90%' }} onClick={onDrawerClose} />
        </IconButton>
        <List ref={listRef}>
            {
                route && route.legs[0].steps.map((step, index) => {
                    return <>
                        <ListItem key={index} alignItems="flex-start" className={`${index}`}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: 'transparent' }}>
                                    {
                                        SignalGenerator({
                                            type: step.maneuver.type,
                                            modifier: step.maneuver.modifier,
                                            iconCssClass: navigationIcon
                                        })
                                    }
                                </Avatar>
                            </ListItemAvatar>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <ListItemText primary={step.maneuver.instruction} secondary={
                                    <>
                                        <Typography component='span' variant='body2' style={{ color: theme.palette.secondary.main }}>
                                            {
                                                handleStepString(step)
                                            }
                                        </Typography>
                                        <p style={{ margin: '1px' }}>   {step.distance.toFixed()} meters  | {(step.duration / 60).toFixed()} min</p>
                                    </>
                                } />
                            </div>
                        </ListItem>
                        <Divider variant="inset" style={{ backgroundColor: theme.palette.grayscale.main }} />
                    </>
                })
            }
        </List>
    </Drawer>
}

export default memo(NavigationDrawer)