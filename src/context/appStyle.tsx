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
    box-shadow: 0 1px 2px 1px ${theme.palette.grayscale.dark};
  }
  .MuiTypography-colorTextSecondary {
    color: ${theme.palette.grayscale.main};
  }
`;


export default AppStyle