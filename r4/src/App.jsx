import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(1);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{count}</h1>
                <button className="red" onClick={(_) => setCount((c) => c + 1)}>
                    +1
                </button>
            </header>
        </div>
    );
}

export default App;
