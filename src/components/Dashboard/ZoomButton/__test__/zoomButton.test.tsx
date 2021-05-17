import React from "react";
import {fireEvent, render} from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";

import {store} from '../../../../context/store';
import ZoomButton  from './../index';

let increase_zoom_button:HTMLElement;
let decrease_zoom_button:HTMLElement;

beforeEach(async () => {
    const component = render(
        <Provider store={store}>
            <ZoomButton />
        </Provider>
    )

    increase_zoom_button = await component.findByTestId('increase-zoom');

    decrease_zoom_button = await component.findByTestId('decrease-zoom');
})


test("Zoom button exist", ()=>{
    
    
    expect(increase_zoom_button).toBeInTheDocument();

    expect(decrease_zoom_button).toBeInTheDocument();
    
})

test("Zoom button -> add zoom", ()=>{

    let current_zoom = store.getState().map.zoom;
    expect(current_zoom).toBe(15)

    fireEvent.click(increase_zoom_button)
    
    expect(store.getState().map.zoom).toBe(16)
    
})

test("Zoom button -> decrease zoom", async ()=>{
    
    expect(decrease_zoom_button).toBeInTheDocument();
    
    let current_zoom = store.getState().map.zoom;
    expect(current_zoom).toBe(16)
    
    
    fireEvent.click(decrease_zoom_button)
    
    expect(store.getState().map.zoom).toBe(15)

})