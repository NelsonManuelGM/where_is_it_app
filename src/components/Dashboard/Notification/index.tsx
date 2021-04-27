import React, {memo, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Collapse, IconButton} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

import {NotificationType} from "./interfaces";
import {customStyles} from "../../../styles/theme";
import {useAppSelector} from "../../../context/hooks";
import {ErrorCode} from "../../../context/slices/notification";

const CustomCollapse = styled(Collapse)`
  position: absolute;
  z-index: 500;
  bottom: 40px;
  left: 50px;
  border-radius: 0;
`;

const Notification = () => {
    const {notification, type} = useAppSelector(state => state.error)

    const {dashboardStyle} = customStyles()
    const [open, setOpen] = React.useState(!notification);
    const [severity, setSeverity] = useState<NotificationType>(NotificationType.warning)

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(()=>{
        if(type === ErrorCode.SUCCESS){
            setSeverity(NotificationType.success)
        }else if(type === ErrorCode.WARNING){
            setSeverity(NotificationType.warning)
        }else{
            setSeverity(NotificationType.error)
        }
    },[type])

    return <>
        {
            notification && <CustomCollapse in={open} className={dashboardStyle}>
                <Alert severity={severity} action={
                    <IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                } style={{backgroundColor: 'unset', color: 'white'}}>
                    {notification}
                </Alert>
            </CustomCollapse>
        }
    </>

}

export default memo(Notification)