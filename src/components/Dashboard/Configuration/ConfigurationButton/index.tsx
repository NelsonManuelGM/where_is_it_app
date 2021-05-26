import React, { memo, useState } from "react";
import styled from "styled-components";

import { Fade, FormControl, FormControlLabel, FormGroup, Paper, Popper, Switch, useTheme } from "@material-ui/core";
import { Settings } from '@material-ui/icons/';

import { customStyles } from "../../../../styles/theme";
import { useAppDispatch } from "../../../../context/hooks";

const Wrapper = styled.div`
    margin-bottom:5px;
    padding:5px 5px 2px 6px;

    cursor: pointer;
`;

const CustomPopper = styled(Popper)`
    z-index: 500;
    position: absolute;
    margin-right: 2px;
    background-color: ${({ theme }) => theme.palette.grayscale.darkGray};

    .MuiPaper-root{
        background-color: unset;
        color: ${({ theme }) => theme.palette.grayscale.light};
        margin: unset;
        padding: 2px;
    }
`;

const ConfigurationButton = () => {
    const dispatch = useAppDispatch();
    const { dashboardStyle } = customStyles();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [gpsAccuracySwitch,setGpsAccuracySwitch] = useState(true)
    const [positionAccuracySwitch,setPositionAccuracySwitch] = useState(true)

    const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget)
        setOpen(!open)
    }

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name === 'gps-accuracy'){
            setGpsAccuracySwitch(value=>!value)
            dispatch({
                type:'coordinate/updateGpsAccuracy',
                payload:{flag: !gpsAccuracySwitch}
            })
        }
        else{
            setPositionAccuracySwitch(value=>!value)
            dispatch({
                type:'coordinate/positionAccuracy',
                payload:{flag: !positionAccuracySwitch}
            })
        }
        console.log(e.target.name)
    }

    return <Wrapper data-testid={'configuration-button'} className={dashboardStyle} onClick={onClickHandler}>
        <Settings />
        <CustomPopper open={open} anchorEl={anchorEl} theme={theme} placement='left-end' className={dashboardStyle} transition>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                    <FormControl component="fieldset">
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={gpsAccuracySwitch} onChange={onChangeHandler} name="gps-accuracy"/>}
                                label="GPS Accuracy"
                            />
                            <FormControlLabel
                                control={<Switch checked={positionAccuracySwitch} onChange={onChangeHandler} name="position-accuracy" />}
                                label="Position Accuracy"
                            />
                        </FormGroup>
                    </FormControl>
                    </Paper>
                </Fade>
            )}
        </CustomPopper>
    </Wrapper>
}

export default memo(ConfigurationButton)