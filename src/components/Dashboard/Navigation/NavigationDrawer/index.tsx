import {FC, memo, useCallback} from "react";
import {Avatar, Divider, Drawer, List, ListItem, ListItemAvatar, ListItemText, useTheme} from "@material-ui/core";

import {customStyles} from "../../../../context/theme";
import {NavigationDrawerParams} from "./interfaces";
import {Step} from "../../../../services/mapbox/interfaces";
import SignalGenerator from "./SignalGenerator";


const NavigationDrawer: FC<NavigationDrawerParams> = ({open, onDrawerClose, route, currentStep}) => {
    const {navigationIcon, drawerSelectedItem} = customStyles()
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
        <List ref={listRef}>
            {
                route && route.legs[0].steps.map((step, index) => {
                    return <>
                        <ListItem key={index} alignItems="flex-start" className={`${index}`}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: 'transparent'}}>
                                    {
                                        SignalGenerator({
                                            type: step.maneuver.type,
                                            modifier: step.maneuver.modifier,
                                            iconCssClass: navigationIcon
                                        })
                                    }
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={step.maneuver.instruction} secondary={handleStepString(step)}/>
                        </ListItem>
                        <Divider variant="inset" style={{backgroundColor: theme.palette.grayscale.main}}/>
                    </>
                })
            }
        </List>
    </Drawer>
}

export default memo(NavigationDrawer)