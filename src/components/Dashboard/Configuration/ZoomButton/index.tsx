import {memo} from "react";
import {Add, Remove} from "@material-ui/icons";
import styled from "styled-components";

import {customStyles} from "../../../../styles/theme";
import {useAppDispatch, useAppSelector} from "../../../../context/hooks";

const Cover = styled.div`
  width: 20px;
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
    const dispatch = useAppDispatch()

    const onChangeZoom = (flag: boolean) => {
        let _zoom = zoom
        if (flag && zoom < 18) {
            ++_zoom
            
        }
        if (!flag && _zoom > 12) {
            --_zoom
        }
        dispatch({type: "map/changeZoom", payload: {zoom: _zoom}})
    }

    return <Cover className={dashboardStyle}>
        <Add data-testid="increase-zoom" onClick={() => onChangeZoom(true)}/>
        <Remove data-testid="decrease-zoom" onClick={() => onChangeZoom(false)}/>
    </Cover>
}

export default memo(ZoomButton)