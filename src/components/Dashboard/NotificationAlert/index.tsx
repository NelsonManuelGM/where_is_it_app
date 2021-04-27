import React, {memo, useEffect} from 'react';
import styled from 'styled-components';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useTheme
} from '@material-ui/core';

import {useAppSelector} from "../../../context/hooks";
import {ErrorCode} from "../../../context/slices/notification";

const CustomDialog = styled(Dialog)`
  .MuiPaper-root {
    color: ${({theme}) => theme.palette.error.main};
    background-color: ${({theme}) => theme.palette.grayscale.dark};
    opacity: 90%;
  }

  .MuiTypography-colorTextSecondary {
    color: ${({theme}) => theme.palette.grayscale.light};
  }
`;

const NotificationAlert = () => {
    const {notification, type} = useAppSelector(state => state.error)

    const [open, setOpen] = React.useState(false);
    const theme = useTheme()

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        if (type === ErrorCode.PERMISSION_DENIED) {
            setOpen(true)
        }
    }, [type])

    return <CustomDialog open={open} onClose={handleClose} theme={theme}
                         aria-labelledby="alert-dialog-title"
                         aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {notification}
                <br/>
                Activate your GPS in order to find you current location
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} style={{color: theme.palette.error.main}} autoFocus>
                OK
            </Button>
        </DialogActions>
    </CustomDialog>
}

export default memo(NotificationAlert)