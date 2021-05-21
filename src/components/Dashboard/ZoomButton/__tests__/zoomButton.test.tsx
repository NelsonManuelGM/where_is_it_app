import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import { Provider } from "react-redux";

import {store} from '../../../../context/store';
import ZoomButton  from '../index';


beforeEach(() => {
    render(
        <Provider store={store}>
            <ZoomButton />
        </Provider>
    )
})

test("Zoom button -> add zoom", ()=>{

    let current_zoom = store.getState().map.zoom;
    expect(current_zoom).toBe(15)

    fireEvent.click(screen.getByTestId('increase-zoom'))
    
    expect(store.getState().map.zoom).toBe(16)
    
})

test("Zoom button -> decrease zoom", async ()=>{
    
    let current_zoom = store.getState().map.zoom;
    expect(current_zoom).toBe(16)
    
    fireEvent.click(screen.getByTestId('decrease-zoom'))
    
    expect(store.getState().map.zoom).toBe(15)

})