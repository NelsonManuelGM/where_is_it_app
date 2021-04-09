import {FC, memo} from "react";
import {ArrowBackIos} from "@material-ui/icons";
import {CircularProgress, Typography, useTheme} from "@material-ui/core";
import styled from "styled-components";

import {customStyles} from "../../../../context/theme";
import {NavigatorProps} from "./interfaces";
import SignalGenerator from "../NavigationDrawer/SignalGenerator";

const Cover = styled.div` 
  top:20px;
  right: 25px;
  max-height: 60px;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const NavigationBox: FC<NavigatorProps> = ({navigation, onClickBox, responsive}) => {
    const theme = useTheme()
    const {navigationIcon, dashboardStyle} = customStyles()


    // TODO separate this function and the one in the drawer to an external file
    const handleStepString = (name?: string, destination?: string): string => {
        let value: Array<string> = []
        if (name) {
            value.push(name)
        }
        if (destination) {
            value.push(destination)
        }
        return value.join('\n')
    }

    return <Cover theme={theme} className={dashboardStyle} onClick={onClickBox}
                  style={{width: responsive ? '80px' : '260px'}}>
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
                        !responsive && <>
                            <Typography variant={'body2'}>{navigation.instruction}</Typography>

                            <Typography variant={'caption'} style={{color: theme.palette.grayscale.main}}>{
                                handleStepString(navigation.name, navigation.destination)
                            }</Typography>
                        </>
                    }
                    {
                        SignalGenerator({
                            type: navigation.type,
                            modifier: navigation.modifier,
                            iconCssClass: navigationIcon
                        })
                    }
                </div>
                : <CircularProgress disableShrink style={{color: "white"}} size={25}/>
        }
    </Cover>
}

export default memo(NavigationBox)