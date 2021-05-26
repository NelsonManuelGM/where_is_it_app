import { Typography } from "@material-ui/core";
import { LatLngLiteral } from "leaflet";
import { memo, useCallback } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { customStyles } from "../../styles/theme";
import CustomInput from "./CustomInput";

const CurrentPosition = styled.div`
    bottom: 5%;
    right: 25px;
    position: absolute;
    z-index: 500;
`;

const Extras = () => {
    const dispatch = useAppDispatch();
    const {latitude, longitude, accuracy} = useAppSelector(state => state.coordinates)
    const { dashboardStyle } = customStyles()

    const onSetTarget = useCallback((value: LatLngLiteral) => {
        let param: Array<LatLngLiteral> = []
        if (value.lat && value.lng) {
            param.push(value)
            dispatch({ type: 'direction/setConfiguration', payload: { target: param } })
        }
    }, [dispatch])

    return <>
            <CurrentPosition className={dashboardStyle}>
                <Typography variant={'subtitle2'} >
                    lat: {latitude} / lng: {longitude} / accuracy: {accuracy}
                </Typography>
            </CurrentPosition>
    
        <CustomInput onSetTarget={onSetTarget} />
    </>
}

export default memo(Extras)