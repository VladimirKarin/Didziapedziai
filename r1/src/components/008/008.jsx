import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import AnimalLi from './components/006/008/AnimalLi';
import Click from './components/006/008/Click';

const data = [
    { id: 1, animal: 'Racoon', color: 'crimson', bold: true },
    { id: 2, animal: 'Fox', color: 'brown', bold: true },
    { id: 17, animal: 'Moose', color: 'skyblue', bold: false },
    { id: 4, animal: 'Unicorn', color: 'coral', bold: true },
];

function App() {
    const [stateValue, functionToChangeState] = useState('start value');
    const arr = ['red', 'blue'];

    // const red = arr[0];
    // const blue = arr[1];

    const [red, blue] = arr;

    return (
        <div className="App">
            <header className="App-header">
                <Click />
                <div className="card">
                    <div className="card-header">
                        <h2>Animals List</h2>
                    </div>
                    <ul className="list-group list-group-flush">
                        {data.map((a, i) => (
                            <AnimalLi key={a.id} animal={a} index={i} />
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default App;
