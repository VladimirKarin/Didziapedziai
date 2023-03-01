import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import BaseButton from './Design/BaseButton';
import BlueButton from './Design/BlueButton';
import CoralButton from './Design/CoralButton';
import GrayButton from './Design/GrayButton';
import RedButton from './Design/RedButton';
import Sq from './Design/Sq';
import {
    withAdd,
    withClear,
    withColor,
    withSpinAll,
    withStop,
} from './HOCs/sq';
// import Circle from './components/011/Circle';
// import Number from './components/011/Number';

function App() {
    const [sq, setSq] = useState([]);

    const BaseButtonWithAdd = withAdd(BaseButton);
    const RedButtonWithClear = withClear(RedButton);
    const BlueButtonWithColor = withColor(BlueButton);
    const CoralButtonWithSpinAll = withSpinAll(CoralButton);
    const GrayButtonWithStop = withStop(GrayButton);
    return (
        <div className="App">
            <header className="App-header">
                {/* <Circle>
                    <Number type="n1" />
                    <Number type="n2" />
                    <Number type="n3" />
                    <Number type="n4" />
                </Circle> */}

                <div className="sq-bin">
                    {sq.map((s, i) =>
                        s.show ? <Sq key={i} s={s} i={i} setSq={setSq} /> : null
                    )}
                </div>

                <div className="sq-bin">
                    <BaseButtonWithAdd title="Add" setSq={setSq} />
                    <RedButtonWithClear title="Clear" setSq={setSq} />
                    <BlueButtonWithColor title="Color" setSq={setSq} />
                    <CoralButtonWithSpinAll title="SpinAll" setSq={setSq} />
                    <GrayButtonWithStop title="StopAll" setSq={setSq} />
                </div>
            </header>
        </div>
    );
}

export default App;
