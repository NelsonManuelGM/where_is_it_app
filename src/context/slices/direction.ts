import {Direction, Profile} from "../../services/mapbox/interfaces";
import {LatLngLiteral} from "leaflet";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {manageRoutes, manageWaypoints} from "../../services/mapbox/auxiliary/dataCleaner";
import {getDirection} from "../../services/mapbox";
import {RootState} from "../store";
import {ErrorCode} from "./notification";


export interface DirectionConfigurationType {
    profile: Profile,
    departure: LatLngLiteral,
    target: Array<LatLngLiteral> | undefined,
    steps: boolean,
    alternatives: boolean
}

export enum StatusType {
    pending = 'pending',
    fulfilled = 'fulfilled',
    rejected = 'rejected'
}

export interface DirectionType {
    configuration: DirectionConfigurationType,
    direction: Direction | undefined,
    status: string,
}


const initialState: DirectionType = {
    configuration: {
        profile: Profile.driving,
        departure: {lat:0,lng:0},
        target: [{lat: 25.69125971191103, lng: -80.3877791296447}], //TODO this target will change depending on the API
        steps: true, //mandatory
        alternatives: false //unnecessary alternative}
    },
    direction: undefined,
    status: StatusType.fulfilled,
}

export const requestDirection = createAsyncThunk(
    'direction/requestDirection',
    // async ({alternatives, steps, departure, profile, target}: DirectionConfigurationType, thunkAPI) => {
    async (_, thunkAPI) => {

        try {
            const {direction} = thunkAPI.getState() as RootState

            let {data} = await getDirection({
                alternatives: direction.configuration.alternatives,
                target: direction.configuration.target,
                departure: direction.configuration.departure,
                profile: direction.configuration.profile,
                steps: direction.configuration.steps,
            })
            thunkAPI.dispatch({type: 'notification/changeNotification', payload:{notification:''}})

            return {
                routes: manageRoutes(data.routes),
                waypoints: manageWaypoints(data.waypoints)
            } as Direction

        } catch (error) {
            console.log('direction request error: ', error)
            thunkAPI.dispatch({type: 'notification/changeNotification', payload:{notification:error.message, type: ErrorCode.API_REQUEST_ERROR}})
        }
    }
)

export const directionSlice = createSlice({
    name: 'direction',
    initialState: initialState,
    reducers: {
        setConfiguration: (state, action: PayloadAction<DirectionConfigurationType>) => {
            state.configuration = {...state.configuration, ...action.payload}
        },
        setStatus: (state, action) => {
            state.status = action.payload.status
        }
    },
    extraReducers: (builder) => {
        builder.addCase(requestDirection.pending, (state) => {
            state.status = StatusType.pending
            state.direction = undefined
        })
        builder.addCase(requestDirection.fulfilled, (state, {payload}) => {
            state.status = StatusType.fulfilled
            state.direction = payload!
        })
        builder.addCase(requestDirection.rejected, (state) => {
            state.status = StatusType.rejected
        })
    }
})

export const {setConfiguration, setStatus} = directionSlice.actions

export default directionSlice.reducer