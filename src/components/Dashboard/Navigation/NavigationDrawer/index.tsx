import React, {FC, memo, useCallback} from "react";
import {Divider, Drawer, List, ListItem, ListItemIcon, Typography, useTheme} from "@material-ui/core";
import styled from "styled-components";
import {Close} from "@material-ui/icons";


import {customStyles} from "../../../../styles/theme";
import {NavigationDrawerParams} from "./interfaces";
import {Step} from "../../../../services/mapbox/interfaces";
import SignalGenerator from "./SignalGenerator";

const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: ${({theme}) => theme.palette.grayscale.dark};
    opacity: 90%;
    width: 350px;
  }
`;

const NavigationDrawer: FC<NavigationDrawerParams> = ({open, onDrawerClose, route, currentStep}) => {
    const {drawerSelectedItem} = customStyles()
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
                if (c.tagName === 'DIV') {
                    c.classList.forEach(value => {
                        if (value === currentStep.toString()) {
                            c.attributes[0].ownerElement?.classList.add(drawerSelectedItem)
                        }
                    })
                }
            }
        }
    }, [currentStep, drawerSelectedItem])


    return <CustomDrawer anchor={"right"} open={open} onClose={onDrawerClose} theme={theme}>
        <Close fontSize="inherit" onClick={onDrawerClose}
               style={{
                   color: theme.palette.grayscale.main,
                   marginRight: '90%',
                   padding: '10px 0 0 8px',
                   cursor: 'pointer'
               }}/>
        <List ref={listRef}>
            {
                route && route.legs[0].steps.map((step, index) => {
                    return <div style={{paddingTop: '4px', paddingBottom: '6px'}} className={`${index}`} key={index}>
                        <Divider style={{backgroundColor: theme.palette.grayscale.darkGray}}/>

                        <ListItem alignItems="flex-start" >

                            <ListItemIcon style={{color: 'white'}}>
                                {
                                    SignalGenerator({
                                        type: step.maneuver.type,
                                        modifier: step.maneuver.modifier,
                                    })
                                }
                            </ListItemIcon>

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography variant={'body1'}
                                            style={{color: theme.palette.grayscale.light}}>{step.maneuver.instruction}</Typography>

                                <Typography variant='body2' style={{color: theme.palette.secondary.main}}>{
                                    handleStepString(step)
                                }</Typography>

                                <Typography variant='subtitle2' style={{color: theme.palette.grayscale.main}}>
                                    {step.distance.toFixed()} meters | {(step.duration / 60).toFixed()} min
                                </Typography>
                            </div>
                        </ListItem>
                    </div>
                })
            }
        </List>
    </CustomDrawer>
}

export default memo(NavigationDrawer)