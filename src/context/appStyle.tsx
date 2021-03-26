import {createGlobalStyle} from 'styled-components';
import {theme} from './theme'

const AppStyle = createGlobalStyle`
  .leaflet-div-icon {
    background:transparent;
    border: none;
  }

  .MuiDrawer-paper{
    background: ${theme.palette.grayscale.dark};
    color: ${theme.palette.grayscale.light};
    opacity: 94%;
    width: 16rem;
    box-shadow: 0 1px 3px 2px ${theme.palette.grayscale.dark};
  }
`;


export default AppStyle