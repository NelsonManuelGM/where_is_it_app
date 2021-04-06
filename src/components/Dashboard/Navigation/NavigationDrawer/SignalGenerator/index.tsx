import {
    AutorenewOutlined,
    CallMadeOutlined,
    CallMergeOutlined,
    Help,
    PanToolOutlined,
    PinDropOutlined,
    PlaceOutlined,
    SubdirectoryArrowLeftOutlined,
    SubdirectoryArrowRightOutlined,
    SyncOutlined
} from "@material-ui/icons";

import {SignalGeneratorProps} from "./interfaces";

const SignalGenerator = ({type, modifier, iconCssClass}:SignalGeneratorProps) => {

    if (type === 'arrive') {
        // if (modifier === 'left') //TODO change icon for this
        return <PlaceOutlined className={iconCssClass} fontSize='large'/>
        // if (modifier === 'right') //TODO change icon for this
        //     return <PlaceOutlined className={navigationIcon} fontSize='large'/>
    }
    else if (type === 'depart') {
        return <PinDropOutlined className={iconCssClass} fontSize='large'/>
    }
    else if (type === 'end of road') {
        if (modifier === 'left') {
            return <SubdirectoryArrowLeftOutlined className={iconCssClass} style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'right') {
            return <SubdirectoryArrowRightOutlined className={iconCssClass} style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        return <PanToolOutlined className={iconCssClass} fontSize='large'/>
    }
    else if (type === 'on ramp') {
        if (modifier === 'left') {
            return <SubdirectoryArrowLeftOutlined className={iconCssClass} style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'right') {
            return <SubdirectoryArrowRightOutlined className={iconCssClass} style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'slight right'){ //TODO change icon for this
            return <CallMadeOutlined className={iconCssClass} fontSize='large'/>
        }
        else {//if (modifier === 'slight left') //TODO change icon for this
            return <CallMadeOutlined className={iconCssClass} style={{transform: 'rotateY(180deg)'}} fontSize='large'/>
        }
    }
    else if (type === 'turn') {
        if (modifier === 'right') {
            return <SubdirectoryArrowRightOutlined className={iconCssClass} style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'slight right'){ //TODO change icon for this
            return <CallMadeOutlined className={iconCssClass} fontSize='large'/>
        }
        if (modifier === 'left') {
            return <SubdirectoryArrowLeftOutlined className={iconCssClass} style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        else {//if (modifier === 'slight left') //TODO change icon for this
            return <CallMadeOutlined className={iconCssClass} style={{transform: 'rotateY(180deg)'}} fontSize='large'/>
        }
    }
    else if (type === 'off ramp') {
        if (modifier === 'slight right'){ //TODO change icon for this
            return <CallMadeOutlined className={iconCssClass} fontSize='large'/>
        }
        else {//if (modifier === 'slight left') //TODO change icon for this
            return <CallMadeOutlined className={iconCssClass} style={{transform: 'rotateY(180deg)'}} fontSize='large'/>
        }
    }
    else if (type === 'fork') {
        if (modifier === 'slight right'){ //TODO change icon for this
            return <CallMadeOutlined className={iconCssClass} fontSize='large'/>
        }
        else {//if (modifier === 'slight left') //TODO change icon for this
            return <CallMadeOutlined className={iconCssClass} style={{transform: 'rotateY(180deg)'}} fontSize='large'/>
        }
    }
    else if (type === 'roundabout') {
        if (modifier === 'slight right' || modifier === 'right') {
            return <AutorenewOutlined className={iconCssClass} fontSize='large'/>
        }
        if (modifier === 'slight left' || modifier === 'left') {
            return <SyncOutlined className={iconCssClass} fontSize='large'/>
        }

        if (modifier === 'straight') {
            return <CallMergeOutlined className={iconCssClass} fontSize='large'/>
        }
    }
    else if(type === 'continue'){
        if (modifier === 'left') {
            return <SubdirectoryArrowLeftOutlined className={iconCssClass} style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'right') {
            return <SubdirectoryArrowRightOutlined className={iconCssClass} style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
    }
    else { //(modifier==='straight')
        return <Help className={iconCssClass} fontSize='large'/>
    }
}

export default SignalGenerator