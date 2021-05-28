import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import Dashboard from '../index';
import { store } from '../../../context/store';
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../styles/theme";

const resizeWindow = (x: number, y: number) => {
	global.innerWidth = x;
	global.innerHeight = y;
	global.dispatchEvent(new Event('resize'));
}

beforeEach(() => {
	render(
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Dashboard />
			</Provider>
		</ThemeProvider>
	)
})


test('resize viewport', () => {
	resizeWindow(320, 908)
	expect(store.getState().map.responsive).toBe(true)

	resizeWindow(1024, 768)
	expect(store.getState().map.responsive).toBe(false)
})


test('contain Navigation box', () => {
	expect(screen.getByTestId('navigation-box')).toBeInTheDocument()
})

test('contain Configuration', () => {
	expect(screen.getByTestId('configuration-box')).toBeInTheDocument()
})


test('contain Products', () => {
	resizeWindow(1024, 768)
	expect(screen.getByTestId('product-box')).toBeInTheDocument()
})


test('contain Products responsive', () => {
	resizeWindow(320, 908)
	expect(screen.getByTestId('product-box-responsive')).toBeInTheDocument()
})