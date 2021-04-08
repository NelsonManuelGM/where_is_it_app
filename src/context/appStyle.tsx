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
    opacity: 90%;
    width: 18rem;
  }
  .MuiTypography-colorTextSecondary {
    color: ${theme.palette.grayscale.main};
  }
`;


export default AppStyle