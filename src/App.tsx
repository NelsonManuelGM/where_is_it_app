import {useEffect, useState} from 'react';
import {useGetToken} from './services';
import Dashboard from "./components/Dashboard";

function App() {
    const [token, setToken] = useState<string>('')

    useEffect(() => {
        setToken(useGetToken)
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                {/*<button onClick={()=>alert(token)}>Click</button>*/}
                <Dashboard/>
            </header>
        </div>
    );
}

export default App;
