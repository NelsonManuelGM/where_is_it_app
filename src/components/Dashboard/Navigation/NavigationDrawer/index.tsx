import {FC, memo} from "react";
import {Avatar, Drawer, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

import {customStyles} from "../../../../context/theme";
import {NavigationDrawerParams} from "./interfaces";
import {Step} from "../../../../services/mapbox/interfaces";
import SignalGenerator from "./SignalGenerator";


const NavigationDrawer: FC<NavigationDrawerParams> = ({open, onDrawerClose, route}) => {
    const {navigationIcon} = customStyles()

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

    return <Drawer anchor={"right"} open={open} onClose={onDrawerClose}>
        <List>
            {
                route && route.legs[0].steps.map((step, index) => {
                    return <ListItem key={index} alignItems="flex-start">
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
                })
            }
        </List>
    </Drawer>
}

export default memo(NavigationDrawer)