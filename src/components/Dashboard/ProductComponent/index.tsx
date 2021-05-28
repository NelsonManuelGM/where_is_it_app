import React, {FC, memo} from "react";

import ProductRequestResponsive from "./ProductResquestResponsive";
import ProductRequest from "./ProductRequest";
import { useAppSelector } from "../../../context/hooks";


export interface ProductRequestProps {
}

const ProductComponent: FC<ProductRequestProps> = () => {
    const state = useAppSelector(state => state.map);

    return state.responsive ? <ProductRequestResponsive/> : <ProductRequest/>
}

export default memo(ProductComponent)