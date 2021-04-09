import {FC, memo} from "react";
import {Add, Remove} from "@material-ui/icons";
import styled from "styled-components";

import {customStyles} from "../../../context/theme";
import {ZoomButtonProps} from "./interfaces";

const Cover = styled.div`
  right: 25px;
  bottom: 50px;
  width: 40px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`

const ZoomButton: FC<ZoomButtonProps> = ({currentZoom, onChangeZoom}) => {
    const {dashboardStyle} = customStyles()

    return <Cover className={dashboardStyle}>
        <Add onClick={() => currentZoom < 18 && onChangeZoom(++currentZoom)}/>
        <Remove onClick={() => currentZoom > 12 && onChangeZoom(--currentZoom)}/>
    </Cover>
}

export default memo(ZoomButton)