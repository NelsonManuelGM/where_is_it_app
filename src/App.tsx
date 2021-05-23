import React, { Suspense, useEffect } from "react";
import { LinearProgress } from "@material-ui/core";

import { useGetCurrentLocation } from "./services";
import Dashboard from "./components/Dashboard";
import { getPlaces } from "./context/slices/places";
import { useAppSelector } from "./context/hooks";
import Extras from "./components/Extras";

function App() {

    const MapComponent = React.lazy(() => import('./components/Map'))

    const options = {
        enableHighAccuracy: true,
        timeout: 6000, //* milliseconds / 6 seconds
        maximumAge: 60000, //* milliseconds / 60 seconds - 1 minutes
    };
    const cancelLocationWatch = useGetCurrentLocation(options)

    //TODO temporary data, t will come from the API
    const { places } = useAppSelector(getPlaces)

    const { configuration } = useAppSelector(state => state.direction)

    useEffect(() => {
        if (!configuration.departure.lat && !configuration.departure.lng) return;

        setTimeout(() => {
            cancelLocationWatch();
        }, 6000);

    }, [cancelLocationWatch, configuration.departure.lat, configuration.departure.lng]);

    return <>
        <div className="App">
            <Dashboard />
            <Suspense fallback={<LinearProgress />}  >
                <MapComponent places={places} />
            </Suspense>
            <Extras />
            <div id='app-notification' data-testid='app-notification'></div>
        </div>
    </>
}

export default App;
