import {createGlobalStyle} from 'styled-components';
import {theme} from './theme'

const AppStyle = createGlobalStyle`
  .leaflet-div-icon {
    background: transparent;
    border: none;
  }

  .MuiBottomNavigation-root{
    background-color: ${theme.palette.grayscale.dark};
  }
`;


export default AppStyle