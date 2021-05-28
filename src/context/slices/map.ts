import { createSlice } from "@reduxjs/toolkit";


export interface MapType {
    zoom: number,
    responsive: boolean,
}

const initialState: MapType = {
    zoom: 15,
    responsive: false,
}

export const mapSlice = createSlice({
    name: 'map',
    initialState: initialState,
    reducers: {
        changeZoom: (state, action) => {
            state.zoom = action.payload.zoom
        },
        setResponsive: (state, action) => {
            state.responsive = action.payload.responsive
        },
    }
})


export const { changeZoom, setResponsive } = mapSlice.actions

export default mapSlice.reducer