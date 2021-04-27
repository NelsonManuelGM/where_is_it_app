import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface MapType {
    zoom: number,
}

const initialState: MapType ={
    zoom: 15
}

export const mapSlice = createSlice ({
    name:'map',
    initialState: initialState,
    reducers:{
        changeZoom: (state, action:PayloadAction<MapType>)=> {
            state.zoom = action.payload.zoom
        },
    }
})


export const {changeZoom} = mapSlice.actions

export default mapSlice.reducer