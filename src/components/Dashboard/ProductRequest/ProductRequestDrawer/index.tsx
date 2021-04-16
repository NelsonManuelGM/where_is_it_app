import React, { FC, memo } from "react";
import { Drawer, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { ProductRequestDrawerProps } from "./interfaces";

const ProductRequestDrawer: FC<ProductRequestDrawerProps> = ({ open, onCloseDrawer }) => {

    return <Drawer anchor={"left"} open={open} onClose={onCloseDrawer}>
        <IconButton aria-label="delete" size="small" style={{ padding: '6px 6px 0 0' }}>
            <Close fontSize="inherit" style={{ color: 'white', marginLeft: '90%' }} onClick={onCloseDrawer} />
        </IconButton>
    </Drawer>
}

export default memo(ProductRequestDrawer)