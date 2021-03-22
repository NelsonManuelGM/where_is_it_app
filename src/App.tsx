import {useEffect, useState} from 'react';
import {useGetToken} from './services';
import MapComponent from './components/Map';
import {places as listPlaces} from './services/places';
import {Place} from "./components/Map/interfaces";
import {LatLngLiteral} from "leaflet";
let date = new Date()


function App() {
    const [token, setToken] = useState<string>('')

    const [places,setPlaces] = useState<Array<Place>>(listPlaces)

    const [target,setTarget] = useState<Array<LatLngLiteral>>([{lat: 25.684209407950874, lng: -80.41917278495983}])

    const [zoom, setZoom] = useState(14);

    useEffect(()=>{
        setToken(useGetToken)
    },[])

  return (
    <div className="App">
      <header className="App-header">
         {/*<button onClick={()=>alert(token)}>Click</button>*/}

         <MapComponent places={places} target={target} zoom={zoom}/>
      </header>
    </div>
  );
}

export default App;
