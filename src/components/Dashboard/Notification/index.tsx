import {FC, memo} from "react";
import styled from "styled-components";
import {useTheme} from "@material-ui/core";
import {AlertTitle} from "@material-ui/lab";
import Alert from "@material-ui/lab/Alert";

import {NotificationProps} from "./interfaces";
import { customStyles } from "../../../context/theme";

const CustomAlert = styled(Alert)`
    bottom: 40px;
    left: 20px;
    background-color: ${({theme})=>theme.palette.grayscale.dark};
    border-radius:0;
    color: ${({theme})=>theme.palette.grayscale.light}
`;

const Notification: FC<NotificationProps> = ({text, type}) => {
    const theme = useTheme();
    const {dashboardStyle} = customStyles()
    
    return <CustomAlert severity={type} className={dashboardStyle} theme={theme}>
        <AlertTitle>Finding your location</AlertTitle>
        <p style={{margin:0}}>{text}</p>
    </CustomAlert>
}

export default memo(Notification)