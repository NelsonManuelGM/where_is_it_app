import React, {FC, memo} from "react";
import {Drawer, useTheme} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import styled from "styled-components";

import {ProductRequestDrawerProps} from "./interfaces";

const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: ${({theme}) => theme.palette.grayscale.darkGray};
    opacity: 90%;
    width: 310px;
  }
`;

const ProductRequestDrawer: FC<ProductRequestDrawerProps> = ({open, onCloseDrawer}) => {
    const theme = useTheme()

    return <CustomDrawer anchor={"left"} open={open} onClose={onCloseDrawer} theme={theme}>
        <Close fontSize="inherit" onClick={onCloseDrawer}
               style={{
                   color: theme.palette.grayscale.main,
                   marginLeft: '90%',
                   padding: '10px 8px 0 0',
                   cursor: 'pointer'
               }}/>
    </CustomDrawer>
}

export default memo(ProductRequestDrawer)