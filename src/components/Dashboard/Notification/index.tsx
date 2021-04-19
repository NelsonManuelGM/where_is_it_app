import React, {FC, memo} from 'react';
import styled from 'styled-components';
import {Collapse, IconButton} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

import {NotificationProps} from "./interfaces";
import {customStyles} from "../../../context/theme";

const CustomCollapse = styled(Collapse)`
  position: absolute;
  z-index: 500;
  bottom: 40px;
  left: 50px;
  border-radius: 0;
`;

const Notification: FC<NotificationProps> = ({text, type}) => {
    const {dashboardStyle} = customStyles()
    const [open, setOpen] = React.useState(!!text);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return <CustomCollapse in={open} className={dashboardStyle}>
        <Alert severity={type} action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
                <CloseIcon fontSize="inherit"/>
            </IconButton>
        } style={{backgroundColor: 'unset', color: 'white'}}>
            {text}
        </Alert>
    </CustomCollapse>
}

export default memo(Notification)