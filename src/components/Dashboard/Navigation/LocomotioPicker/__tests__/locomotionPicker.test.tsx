import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";

import LocomotionPicker from '../index'
import { theme } from '../../../../../styles/theme';
import { store } from '../../../../../context/store';
import { Profile } from '../../../../../services/mapbox/interfaces';


beforeEach(() => {
    render(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <LocomotionPicker />
            </Provider>
        </ThemeProvider>
    )
})

test('locomotionPicker -> driving', () => {
    const btn_driving = screen.getByTestId('btn-driving')
    expect(btn_driving).toBeInTheDocument()

    fireEvent.click(btn_driving)

    let profile = store.getState().direction.configuration.profile

    expect(profile).toBe(Profile.driving)

})

test('locomotionPicker -> cycling', () => {
    const btn_cycling = screen.getByTestId('btn-cycling')
    expect(btn_cycling).toBeInTheDocument()

    fireEvent.click(btn_cycling)

    let profile = store.getState().direction.configuration.profile

    expect(profile).toBe(Profile.cycling)

})

test('locomotionPicker -> walking', () => {
    const btn_walking = screen.getByTestId('btn-walking')
    expect(btn_walking).toBeInTheDocument()

    fireEvent.click(btn_walking)

    let profile = store.getState().direction.configuration.profile

    expect(profile).toBe(Profile.walking)

})