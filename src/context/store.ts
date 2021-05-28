import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";

import {placesSlice} from './slices/places'
import {mapSlice} from './slices/map'
import {directionSlice} from "./slices/direction";
import {notificationSlice} from "./slices/notification";
import {coordinateSlice} from "./slices/coordinate";

const reducer = combineReducers({
    places: placesSlice.reducer,
    map: mapSlice.reducer,
    direction: directionSlice.reducer,
    error: notificationSlice.reducer,
    coordinates: coordinateSlice.reducer,
})

export const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV === "development",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type DispatchState = typeof store.dispatch
