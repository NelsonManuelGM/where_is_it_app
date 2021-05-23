import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';


interface CoordinateType {
    latitude: number;
    longitude: number;
    accuracy: number;
}

const initialState: CoordinateType = {
    latitude: 0,
    longitude: 0,
    accuracy: 0,
}


export const setCoordinate = createAsyncThunk(
    'coordinate/configuration',
    async ({latitude, longitude, accuracy }:CoordinateType, thunkAPI) => {
        thunkAPI.dispatch({
            type: 'direction/setConfiguration', payload: {
                departure: {
                    lat: latitude,
                    lng: longitude,
                }
            }
        })
        return {latitude:latitude, longitude:longitude, accuracy: accuracy} as CoordinateType
    }
)


export const coordinateSlice = createSlice({
    name:'coordinate',
    initialState: initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(setCoordinate.fulfilled, (state, {payload})=>{
            state.latitude = payload.latitude;
            state.longitude = payload.longitude;
            state.accuracy = payload.accuracy;
        })

    }
});

export const { } = coordinateSlice.actions;

export default coordinateSlice.reducer;