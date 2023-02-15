import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useState } from 'react';
import AddButton from './components/010/Buttons/AddButton';
import ClearButton from './components/010/Buttons/ClearButton';
import ColorButton from './components/010/Buttons/CloneButton';
import Sq from './components/009/Sq';

function App() {
    const [sq, setSq] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="sq-bin">
                    {sq.map((s, i) => (
                        <Sq key={i} s={s} i={i} setSq={setSq} />
                    ))}
                </div>
                <div className="sq-bin">
                    <AddButton setSq={setSq} classes="blue" />
                    <ClearButton setSq={setSq} classes="red" />
                    <ColorButton setSq={setSq} classes="coral" />
                </div>
            </header>
        </div>
    );
}

export default App;
