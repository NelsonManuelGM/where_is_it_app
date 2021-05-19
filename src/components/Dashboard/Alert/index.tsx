import React, { memo, useCallback } from 'react';
import { Collapse, IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

import { customStyles } from "../../../styles/theme";
import { useAppSelector } from "../../../context/hooks";
import { ErrorCode } from "../../../context/slices/notification";

import Notification from '../../Notification'

const AlertComponent = () => {
    const { notification, type } = useAppSelector(state => state.error)

    const { dashboardStyle } = customStyles()
    const [open, setOpen] = React.useState(!notification);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const severity = useCallback(() => {
        switch (type) {
            case ErrorCode.SUCCESS:
                return 'success'
            case ErrorCode.WARNING:
                return 'warning'
            default:
                return 'error'
        }
    }, [type])

    return <>
        {
            notification && <Notification>
                <Collapse in={open} className={dashboardStyle}>
                    <Alert severity={severity()} action={
                        <IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    } style={{ backgroundColor: 'unset', color: 'white' }}>
                        {notification}
                    </Alert>
                </Collapse>
            </Notification>
        }
    </>

}

export default memo(AlertComponent)