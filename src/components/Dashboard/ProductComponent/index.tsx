import React, {FC, memo} from "react";

import ProductRequestResponsive from "./ProductResquestResponsive";
import ProductRequest from "./ProductRequest";


export interface ProductRequestProps {
    responsiveFlag: boolean
}

const ProductComponent: FC<ProductRequestProps> = ({responsiveFlag}) => {

    return responsiveFlag ? <ProductRequestResponsive/> : <ProductRequest/>
}

export default memo(ProductComponent)