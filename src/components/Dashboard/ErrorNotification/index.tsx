import {FC, memo} from "react";
import styled from "styled-components";
import {Typography, useTheme} from "@material-ui/core";
import {ErrorNotificationProps} from "./interfaces";

const Cover = styled.div`
  background: ${({theme})=>theme.palette.warning.main};
  text-align: center;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
`

const ErrorNotification:FC<ErrorNotificationProps> = ({error}) => {
    const theme = useTheme();

    return <Cover theme={theme}>
        <Typography style={{marginBottom:'1rem'}} variant={'h3'}>{error}</Typography>
        <img style={{marginBottom:'1rem'}} width={250} src={process.env.PUBLIC_URL+'/assets/clipart2475630.png'} alt={'gps off'}/>
        <Typography style={{marginBottom:'1rem'}} variant={'h6'}>You should activate the GPS in order to help you find what you are looking for!</Typography>
    </Cover>
}

export default memo(ErrorNotification)