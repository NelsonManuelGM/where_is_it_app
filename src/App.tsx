import {useEffect, useState} from 'react';
import {useGetToken} from './services';
import MapComponent from './components/map';
import {places as listPlaces} from './places';
import {Place} from "./components/map/interfaces";
let date = new Date()


function App() {
    const [token, setToken] = useState<string>('')

    const [places,setPlaces] = useState<Array<Place>>(listPlaces)

    const [zoom, setZoom] = useState(14);

    useEffect(()=>{
        setToken(useGetToken)
    },[])

  return (
    <div className="App">
      <header className="App-header">
         {/*<button onClick={()=>alert(token)}>Click</button>*/}

         <MapComponent places={places}  zoom={zoom}/>
      </header>
    </div>
  );
}

export default App;
