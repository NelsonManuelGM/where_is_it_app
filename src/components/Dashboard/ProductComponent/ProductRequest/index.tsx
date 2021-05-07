import React, {memo} from "react";
import styled from "styled-components";

import {customStyles} from "../../../../styles/theme";


const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  top:0;
  left: 0;
  
  position: absolute;
  z-index: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  cursor: pointer;
`;


const ProductRequest = () => {
    const {dashboardStyle} = customStyles()

    return <Wrapper className={dashboardStyle}>
        testing panel
    </Wrapper>
}

export default memo(ProductRequest)