import {FC, memo} from "react";
import styled from "styled-components";
import {useTheme} from "@material-ui/core";
import {AlertTitle} from "@material-ui/lab";
import Alert from "@material-ui/lab/Alert";

import {NotificationProps} from "./interfaces";
import { customStyles } from "../../../context/theme";

const Cover = styled.div`
  background: ${({theme}) => theme.palette.warning.main};
  text-align: center;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
`

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

    // return <Cover theme={theme}>
    //     <Typography style={{marginBottom:'1rem'}} variant={'h3'}>{error}</Typography>
    //     <img style={{marginBottom:'1rem'}} width={250} src={process.env.PUBLIC_URL+'/assets/clipart2475630.png'} alt={'gps off'}/>
    //     <Typography style={{marginBottom:'1rem'}} variant={'h6'}>You should activate the GPS in order to help you find what you are looking for!</Typography>
    // </Cover>
    //return <Alert severity="warning" style={{position: 'absolute', zIndex: 500, bottom: '40px', left: '20px', width: '250px'}}>
    return <CustomAlert severity={type} className={dashboardStyle} theme={theme}>
        <AlertTitle>Finding your location</AlertTitle>
        <p style={{margin:0}}>{text}</p>
    </CustomAlert>
}

export default memo(Notification)