import {useEffect} from 'react';

import {useGetCurrentLocation} from './services';
import Dashboard from "./components/Dashboard";
import MapComponent from "./components/Map";
import {getPlaces} from "./context/slices/places";
import {useAppSelector} from './context/hooks'

function App() {
    // ---- MAP variables
    const {places} = useAppSelector(getPlaces)     //TODO temporary state

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
            <Dashboard />
            <MapComponent places={places}/>
        </div>
    );
}

export default App;
