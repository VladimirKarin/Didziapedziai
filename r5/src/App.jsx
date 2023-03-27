import { useReducer, useState } from 'react';
import countReducer from './Components/countReducer';
import './App.scss';

function App() {
    const [count, dispatchCount] = useReducer(countReducer, 1);
    const [add, setAdd] = useState(0);

    const add1 = (_) => {
        const action = {
            type: 'add_1',
        };
        dispatchCount(action);
    };

    const remove1 = (_) => {
        const action = {
            type: 'rem_1',
        };
        dispatchCount(action);
    };

    const add3 = (_) => {
        const action = {
            type: 'add_3',
        };
        dispatchCount(action);
    };

    const remove3 = (_) => {
        const action = {
            type: 'rem_3',
        };
        dispatchCount(action);
    };

    const doAdd = (_) => {
        return {
            type: 'add',
            payload: parseInt(add),
        };
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ fonSize: '100px', color: 'skyblue' }}>{count}</h1>

                <div>
                    <button className="blue" onClick={add1}>
                        {' '}
                        +1{' '}
                    </button>
                    <button className="red" onClick={remove1}>
                        {' '}
                        -1{' '}
                    </button>
                    <button
                        className="coral"
                        onClick={(_) => dispatchCount({ type: add3 })}
                    >
                        {' '}
                        +3
                    </button>
                    <button
                        className="coral"
                        onClick={(_) => dispatchCount({ type: remove3 })}
                    >
                        {' '}
                        -3
                    </button>
                </div>
                <div>
                    <input
                        type="number"
                        value={add}
                        style={{ fontSize: '25px', width: '50px' }}
                        onChange={(e) => setAdd(e.target.value)}
                    >
                        {' '}
                    </input>
                    <button className="blue" onClick={doAdd}>
                        {' '}
                        +++{' '}
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
