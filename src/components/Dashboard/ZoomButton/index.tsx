import {memo} from "react";
import {Add, Remove} from "@material-ui/icons";
import styled from "styled-components";

import {customStyles} from "../../../styles/theme";
import {useAppSelector} from "../../../context/hooks";
import {useDispatch} from "react-redux";

const Cover = styled.div`
  position: absolute;
  right: 25px;
  bottom: 100px;
  z-index: 500;

  width: 40px;
  height: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;
`

const ZoomButton = () => {
    const {dashboardStyle} = customStyles()
    const {zoom} = useAppSelector(state => state.map)
    const dispatch = useDispatch()

    const onChangeZoom = (flag: boolean) => {
        let _zoom = zoom
        debugger
        if (flag && zoom < 18) {
            ++_zoom
        }
        if (!flag && _zoom > 12) {
            --_zoom
        }
        dispatch({type: "map/changeZoom", payload: {zoom: _zoom}})
    }

    return <Cover className={dashboardStyle}>
        <Add onClick={() => onChangeZoom(true)}/>
        <Remove onClick={() => onChangeZoom(false)}/>
    </Cover>
}

export default memo(ZoomButton)