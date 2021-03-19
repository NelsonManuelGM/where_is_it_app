import {createMuiTheme, makeStyles} from "@material-ui/core";

const theme = createMuiTheme({
});

const customStyles = makeStyles({
    mapStyle:{
        width: '100%',
        height: '100vh',
        position: 'relative',
    },
    customMarker: {
        position: 'absolute',
        color: theme.palette.warning.main,
        top: '-190%',
        left: '-90%',
        width: '2.3rem',
        height: '2.3rem',
        zIndex: 500,
    },
    customLayout:{
        position: 'absolute',
        right: '25px',
        zIndex: 500,
        background: theme.palette.warning.light,
        padding: '0.5rem',
        borderRadius: '5px',
        opacity: '70%'
    }
});

export {
    theme,
    customStyles
}