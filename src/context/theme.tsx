import {createMuiTheme, makeStyles, ThemeOptions} from "@material-ui/core";
import {CSSProperties} from "react";

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        grayscale: {
            light: CSSProperties['color'];
            main: CSSProperties['color'];
            dark: CSSProperties['color'];
        }
    }

    interface PaletteOptions {
        grayscale: {
            light: CSSProperties['color'];
            main: CSSProperties['color'];
            dark: CSSProperties['color'];
        }
    }
}

function createMyTheme(options: ThemeOptions) {
    return createMuiTheme({
        palette: {
            grayscale: {
                dark: '#000000',
                main: '#1f1f1f',
                light: '#4c4c4c',
            }
        },
        ...options
    })
}

const theme = createMyTheme({})

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
    }
});

const uiStyles = makeStyles({
    customColor: {
        position: 'absolute',
        right: '25px',
        zIndex: 500,
        background: theme.palette.grayscale.dark,
        padding: '0.5rem',
        borderRadius: '5px',
        opacity: '70%',
        margin: '1rem 1rem',
        color: 'white',
    },

});

export {
    theme,
    customStyles,
    uiStyles
}