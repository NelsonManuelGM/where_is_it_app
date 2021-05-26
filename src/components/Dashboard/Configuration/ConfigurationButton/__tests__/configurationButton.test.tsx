import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../../../context/store";


import ConfigurationButton from "../index";


beforeAll(() => {
    render(
        <Provider store={store}>
            <ConfigurationButton />
        </Provider>
    )
})

test('testing configurationButton', () => {
    expect(screen.getByTestId('configuration-button')).toBeInTheDocument()
})