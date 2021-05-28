import {render} from '@testing-library/react';

import {store} from '../store';
import { Profile } from '../../services/mapbox/interfaces';
import { StatusType } from '../slices/direction';
import { ErrorCode } from '../slices/notification';

test("Initial State: Places", ()=>{
    expect(store.getState().places.places.length).toBe(8)
})

 
test("Initial State: Direction", ()=>{
    expect(store.getState().direction.configuration).toStrictEqual({
        profile: Profile.driving,
        departure: {lat:0,lng:0},
        target: [{lat: 25.69125971191103, lng: -80.3877791296447}],
        steps: true, //mandatory
        alternatives: false //unnecessary alternative}
    })
    expect(store.getState().direction.direction).toStrictEqual(undefined)
    expect(store.getState().direction.status).toStrictEqual(StatusType.fulfilled)
})


test("Initial State: Maps", ()=>{
    expect(store.getState().map.zoom).toStrictEqual(15)
    expect(store.getState().map.responsive).toStrictEqual(false)
})


test("Initial State: Notification", ()=>{
    expect(store.getState().error).toStrictEqual({
        notification: '',
        type: ErrorCode.NONE
    })
})