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
  .MuiBottomNavigation-root{
    height: unset;
    background-color: unset;
    min-width:unset;
  }
  .MuiBottomNavigationAction-root.Mui-selected{
    padding: 8px;
    color: ${theme.palette.warning.main};
  }
  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly{
    padding: 8px;
  }
  .MuiBottomNavigationAction-root{
    padding: 8px;
    color: ${theme.palette.grayscale.light};
    min-width:unset;
  }
`;


export default AppStyle