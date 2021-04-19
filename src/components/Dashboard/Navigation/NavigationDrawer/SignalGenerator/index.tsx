import {
    ArrowUpwardOutlined,
    AutorenewOutlined,
    CallMadeOutlined,
    Help,
    PanToolOutlined,
    PinDropOutlined,
    PlaceOutlined,
    RedoOutlined,
    SettingsBackupRestoreOutlined,
    SubdirectoryArrowLeftOutlined,
    SubdirectoryArrowRightOutlined,
    SyncOutlined,
    UndoOutlined
} from "@material-ui/icons";

import {SignalGeneratorProps} from "./interfaces";

const SignalGenerator = ({type, modifier}: SignalGeneratorProps) => {

    if (type === 'arrive') {
        // if (modifier === 'left') //TODO change icon for this
        return <PlaceOutlined fontSize='large'/>
        // if (modifier === 'right') //TODO change icon for this
        //     return <PlaceOutlined className={navigationIcon} fontSize='large'/>
    } else if (type === 'depart') {
        return <PinDropOutlined fontSize='large'/>
    } else if (type === 'end of road') {
        if (modifier === 'left') {
            return <SubdirectoryArrowLeftOutlined style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'right') {
            return <SubdirectoryArrowRightOutlined style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        return <PanToolOutlined fontSize='large'/>
    } else if (type === 'on ramp') {
        if (modifier === 'left') {
            return <SubdirectoryArrowLeftOutlined style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'right') {
            return <SubdirectoryArrowRightOutlined style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'slight right') { //TODO change icon for this
            return <CallMadeOutlined fontSize='large'/>
        } else {//if (modifier === 'slight left') //TODO change icon for this
            return <CallMadeOutlined style={{transform: 'rotateY(180deg)'}} fontSize='large'/>
        }
    } else if (type === 'turn') {
        if (modifier === 'right') {
            return <SubdirectoryArrowRightOutlined style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'slight right') { //TODO change icon for this
            return <CallMadeOutlined fontSize='large'/>
        }
        if (modifier === 'left') {
            return <SubdirectoryArrowLeftOutlined style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'slight left') { //TODO change icon for this
            return <CallMadeOutlined style={{transform: 'rotateY(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'straight') { //TODO change icon for this
            return <ArrowUpwardOutlined fontSize='large'/>
        }
        if (modifier === 'sharp right') { //TODO change icon for this
            return <SubdirectoryArrowRightOutlined style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'sharp left') { //TODO change icon for this
            return <SubdirectoryArrowLeftOutlined style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
    } else if (type === 'off ramp') {
        if (modifier === 'slight right') { //TODO change icon for this
            return <CallMadeOutlined fontSize='large'/>
        } else {//if (modifier === 'slight left') //TODO change icon for this
            return <CallMadeOutlined style={{transform: 'rotateY(180deg)'}} fontSize='large'/>
        }
    } else if (type === 'fork') {
        if (modifier === 'slight right') { //TODO change icon for this
            return <CallMadeOutlined fontSize='large'/>
        } else {//if (modifier === 'slight left') //TODO change icon for this
            return <CallMadeOutlined style={{transform: 'rotateY(180deg)'}} fontSize='large'/>
        }
    } else if (type === 'roundabout') {
        if (modifier === 'slight right' || modifier === 'right') {
            return <AutorenewOutlined fontSize='large'/>
        }
        if (modifier === 'slight left' || modifier === 'left') {
            return <SyncOutlined fontSize='large'/>
        }

        if (modifier === 'straight') {
            return <ArrowUpwardOutlined fontSize='large'/>
        }
    } else if (type === 'roundabout turn') {
        if (modifier === 'right') {
            return <RedoOutlined fontSize='large'/>
        }
        if (modifier === 'left') {
            return <UndoOutlined fontSize='large'/>
        }
        if (modifier === 'slight right') { //TODO change icon for this
            return <RedoOutlined fontSize='large'/>
        } else {  //(modifier === 'slight left')
            return <UndoOutlined fontSize='large'/>
        }
    } else if (type === 'new name') { //TODO to change soon
        if (modifier === 'slight right') {
            return <CallMadeOutlined fontSize='large'/>
        }
        if (modifier === 'slight left') {
            return <CallMadeOutlined fontSize='large'/>
        }
        // if (modifier === 'slight left' || modifier === 'left') {
        //     return <SyncOutlined    fontSize='large'/>
        // }
        if (modifier === 'straight') {
            return <ArrowUpwardOutlined fontSize='large'/>
        }
    } else if (type === 'continue') {
        if (modifier === 'left') {
            return <SubdirectoryArrowLeftOutlined style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'right') {
            return <SubdirectoryArrowRightOutlined style={{transform: 'rotateX(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'uturn') {
            return <SettingsBackupRestoreOutlined fontSize='large'/>
        }
        if (modifier === 'slight right') { //TODO change icon for this
            return <CallMadeOutlined fontSize='large'/>
        }
        if (modifier === 'slight left') { //TODO change icon for this
            return <CallMadeOutlined style={{transform: 'rotateY(180deg)'}} fontSize='large'/>
        }
        if (modifier === 'straight') { //TODO change icon for this
            return <ArrowUpwardOutlined fontSize='large'/>
        }
    } else { //(modifier==='straight')
        return <Help fontSize='large'/>
    }
}

export default SignalGenerator