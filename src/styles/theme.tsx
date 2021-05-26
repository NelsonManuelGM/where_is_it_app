import { makeStyles, responsiveFontSizes, ThemeOptions, unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

import { CSSProperties } from "react";

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        grayscale: {
            light: CSSProperties['color'];
            main: CSSProperties['color'];
            dark: CSSProperties['color'];
            darkGray: CSSProperties['color'];
        }
    }

    interface PaletteOptions {
        grayscale: {
            light: CSSProperties['color'];
            main: CSSProperties['color'];
            dark: CSSProperties['color'];
            darkGray: CSSProperties['color'];
        }
    }
}

function createMyTheme(options: ThemeOptions) {
    return createMuiTheme({
        palette: {
            grayscale: {
                dark: '#000000',
                darkGray: '#232323',
                main: '#777777',
                light: '#ffffff',
            }
        },
        ...options
    })
}

let theme = createMyTheme({})

theme = responsiveFontSizes(theme);

const customStyles = makeStyles({
    mapStyle: {
        width: '100%',
        height: '100vh',
        position: 'relative',
    },
    customMarker: {
        position: 'absolute',
        color: theme.palette.warning.main,
        top: '-200%',
        left: '-100%',
        width: '2.3rem',
        height: '2.3rem',
    },
    dashboardStyle: {
        color: theme.palette.grayscale.light,
        background: theme.palette.grayscale.dark,
        opacity: '85%',
        padding: '0.5rem',
        borderRadius: '5px',
    },
    drawerSelectedItem: {
        background: theme.palette.warning.main,
    }
});


export {
    theme,
    customStyles
}