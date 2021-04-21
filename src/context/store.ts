import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {placesSlice} from './places'
import {mapSlice} from './map'
import {directionSlice} from "./direction";

const reducer = combineReducers({
    places: placesSlice.reducer,
    map: mapSlice.reducer,
    direction: directionSlice.reducer
})

export const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV === "development",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type DispatchState = typeof store.dispatch
