import React, {FC, memo} from "react";
import {Button, TextField, useTheme} from "@material-ui/core";
import styled from "styled-components";
import {ArrowForwardIos} from "@material-ui/icons";

import {CustomInputParams} from "./interface";

const Cover = styled.div`
  right: 25px;
  top: 200px;
  width: 260px;

  display: flex;
  flex-direction: row;
  align-items: center;

  z-index: 450;
  position: absolute;

  .MuiInputBase-input {
    color: ${({theme}) => theme.palette.grayscale.dark};
    font-size: large;
  }

  .MuiFormLabel-root {
    font-size: 1rem;
  }

  .MuiFormLabel-root.Mui-focused {
    color: ${({theme}) => theme.palette.warning.main};
  }
`

const CI = styled(TextField)`
  width: 100%;
  margin-bottom: 1rem;
`;

const CustomInput: FC<CustomInputParams> = ({onSetTarget}) => {
    const theme = useTheme()

    const textFieldHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        // @ts-ignore
        let lat = document.getElementById('lat').value;
        // @ts-ignore
        let lng = document.getElementById('lng').value;

        onSetTarget({lat: lat, lng: lng})

    }

    return <Cover theme={theme}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <CI id={'lat'} label="Latitude" variant="filled"/>
            <CI id={'lng'} label="Longitude" variant="filled"/>
        </div>
        <Button variant="contained" color="default" startIcon={<ArrowForwardIos/>}
                style={{
                    color: theme.palette.grayscale.light,
                    background: theme.palette.grayscale.dark,
                    opacity: '85%',
                    borderRadius: '0px',
                    padding: '0.5rem',
                    height: '130px',
                    margin: '0 0 1rem 0.5rem',
                    minWidth: '2rem',
                }}
                onClick={textFieldHandler}/>
    </Cover>

}

export default memo(CustomInput)