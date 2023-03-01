import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useState } from 'react';
import AddButton from './Buttons/AddButton';
import ClearButton from './Buttons/ClearButton';
import ColorButton from './Buttons/CloneButton';
import DefaultSortButton from './Buttons/DefaultSortButton';
import Filter500Button from './Buttons/Filter500Button';
import ShowAllButton from './Buttons/ShowAllButton';
import SortButton from './Buttons/SortButton';
import SpinAllButton from './Buttons/SpinAllButton';
import StopSpinButton from './Buttons/StopSpinButton';
import Sq from '../009/Sq';

function App() {
    const [sq, setSq] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="sq-bin">
                    {sq.map((s, i) =>
                        s.show ? <Sq key={i} s={s} i={i} setSq={setSq} /> : null
                    )}
                </div>
                <div className="sq-bin">
                    <AddButton setSq={setSq} classes="blue" />
                    <ClearButton setSq={setSq} classes="red" />
                    <ColorButton setSq={setSq} classes="coral" />
                    <StopSpinButton setSq={setSq} classes="" />
                    <SpinAllButton setSq={setSq} classes="" />
                    <SortButton setSq={setSq} classes="blue" />
                    <DefaultSortButton setSq={setSq} classes="blue" />
                    <Filter500Button setSq={setSq} classes="red" />
                    <ShowAllButton setSq={setSq} classes="red" />
                </div>
            </header>
        </div>
    );
}

export default App;
