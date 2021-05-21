import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {ThemeProvider} from '@material-ui/core/styles';

import App from '../../../App';
import { store } from '../../../context/store';
import { theme } from '../../../styles/theme';

beforeEach(() => {

})

test('notification div existence', async () => {
    render(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    )

    const component = screen.getByTestId('app-notification')
    expect(component).toBeInTheDocument()

})