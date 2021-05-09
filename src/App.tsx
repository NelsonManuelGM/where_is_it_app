import React, {Suspense, useEffect} from 'react';
import {LinearProgress } from '@material-ui/core';

import {useGetCurrentLocation} from './services';
import Dashboard from "./components/Dashboard";
import {getPlaces} from "./context/slices/places";
import {useAppSelector} from './context/hooks';

function App() {
    
    const MapComponent = React.lazy(()=>import('./components/Map'))

    // ---- MAP variables
    //TODO temporary state
    const {places} = useAppSelector(getPlaces)     

    const {configuration} = useAppSelector(state => state.direction)

    const options = {
        enableHighAccuracy: true,
        timeout: 1000, //* 60, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
        maximumAge: 1000 * 3600 * 24 // 24 hour       : 27000
    };
    const cancelLocationWatch = useGetCurrentLocation(options)

    useEffect(() => {
        if (!configuration.departure.lat && !configuration.departure.lng) return;

        setTimeout(() => {
            cancelLocationWatch();
        }, 6000);

    }, [cancelLocationWatch, configuration.departure.lat, configuration.departure.lng]);

    return (
        <div className="App">

            <Suspense fallback={<LinearProgress />}  >
                <Dashboard />
            
                <MapComponent places={places}/>
            </Suspense>
        </div>
    );
}

export default App;
