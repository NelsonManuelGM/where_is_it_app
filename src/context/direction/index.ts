import {Direction, Profile} from "../../services/mapbox/interfaces";
import {LatLngLiteral} from "leaflet";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface DirectionConfigurationType {
    profile: Profile,
    departure?: LatLngLiteral,
    target?: Array<LatLngLiteral>,
    steps: boolean,
    alternatives: boolean
}

export interface DirectionType {
    configuration: DirectionConfigurationType,
    direction?: Direction,
    loading: boolean,
    error: string
}


const initialState: DirectionType = {
    configuration: {
        profile: Profile.driving,
        departure: undefined,
        target: undefined,
        steps: true, //mandatory
        alternatives: false //unnecessary alternative}
    },
    direction: undefined,
    loading: false,
    error: ''
}

export const directionSlice = createSlice({
    name: 'direction',
    initialState: initialState,
    reducers: {
        setConfiguration: (state, action: PayloadAction<DirectionConfigurationType>) => {
            state.configuration = {...state.configuration, ...action.payload}
        },
        setDirection: (state, action: PayloadAction<Direction>) => {
            state.direction = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }


    }
})

export const {setDirection, setError, setLoading, setConfiguration} = directionSlice.actions

export default directionSlice.reducer