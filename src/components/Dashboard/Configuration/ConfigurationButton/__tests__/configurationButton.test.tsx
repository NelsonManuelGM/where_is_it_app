import { ThemeProvider } from "@material-ui/styles";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../../../context/store";
import { theme } from "../../../../../styles/theme";


import ConfigurationButton from "../index";


beforeAll(() => {
    render(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <ConfigurationButton />
            </Provider>
        </ThemeProvider>
    )
})

test('testing configurationButton', () => { 
    const button = screen.getByTestId('configuration-button')
    expect(button).toBeInTheDocument()

    act(()=>{
        fireEvent.click(button)
    })

    const popover = screen.getByRole('tooltip', {  name: /gps accuracy position accuracy/i})

    expect(popover).toBeInTheDocument()

    const gps_accuracy = screen.getByRole('checkbox', {  name: /gps accuracy/i})
    const position_accuracy = screen.getByRole('checkbox', {  name: /position accuracy/i})

    expect(gps_accuracy).toBeInTheDocument()
    expect(position_accuracy).toBeInTheDocument()

    act(()=>{
        fireEvent.click(gps_accuracy)
    })
    expect(store.getState().coordinates.gpsAccuracyThreshold).toBe(18000)

    
    act(()=>{
        fireEvent.click(position_accuracy)
    })
    expect(store.getState().coordinates.positionAccuracyThreshold).toBe(90)
})