import React, { memo, useCallback, useState } from "react";
import { Menu } from "@material-ui/icons";
import styled from "styled-components";

import { customStyles } from "../../../context/theme";
import ProductRequestDrawer from "./ProductRequestDrawer";


const SearchProduct = styled.div`
    width: 20px;
    height: 20px;
    left: 25px;
    top: 25px;

    display: flex;
    align-items:center;
    justify-content: center;

    padding: 8px;
    cursor: pointer;
`;

const ProductRequest = () => {
    const { dashboardStyle } = customStyles();
    const [open, setOpen] = useState<boolean>(false);

    const onCloseDrawer = useCallback(() => {
        setOpen(!open)
    }, [open])

    return <>
        <SearchProduct className={dashboardStyle} onClick={() => setOpen(true)}>
            <Menu fontSize="large" />
        </SearchProduct>

        <ProductRequestDrawer open={open} onCloseDrawer={onCloseDrawer} />
    </>
}

export default memo(ProductRequest)