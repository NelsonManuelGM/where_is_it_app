import React, { memo } from "react";
import styled from "styled-components";
import ConfigurationButton from "./ConfigurationButton";

import ZoomButton from "./ZoomButton";


const Wrapper = styled.div`
    position: absolute;
    right: 25px;
    bottom: 100px;
    z-index: 500;

    display: flex;
    flex-direction: column;
`;

const Configuration = () => {
  return <Wrapper data-testid={'configuration-box'}>
    <ConfigurationButton/>
    <ZoomButton />
  </Wrapper>
}

export default memo(Configuration)