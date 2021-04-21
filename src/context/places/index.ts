import {Place} from "../../components/Map/interfaces";
import {places as listPlaces} from "../../services/places";
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import type {RootState} from '../store'

export interface DirectionType {
    places: Array<Place>,
}

const initialState: DirectionType = {
    places: listPlaces
}

export const placesSlice = createSlice({
    name: 'places',
    initialState: initialState,
    reducers: {
        addPlace: (state, action: PayloadAction<DirectionType>) => {
            return {...action.payload}
        }
    }
})

export const {addPlace} = placesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getPlaces = (state: RootState) => state.places

export default placesSlice.reducer