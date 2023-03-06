import { useState } from 'react';
import './App.scss';
import BoxLarge from './BoxLarge';
import GlobalUserContext from './GlobalUserContext';
import { GlobalSqContextProvider } from './GlobalSqContext';
import rand from '../../Functions/functions/rand';
import Buttons from './Buttons';

const users = ['Bebras', 'Zebras', 'Ūdra'];

function App() {
    const [user, setUser] = useState(users[rand(0, 2)]);

    return (
        <GlobalUserContext.Provider value={{ user }}>
            <GlobalSqContextProvider>
                <div className="App">
                    <header className="App-header">
                        <BoxLarge />

                        <Buttons />
                        <button
                            className="red"
                            onClick={() => setUser(users[rand(0, 2)])}
                        >
                            user
                        </button>
                    </header>
                </div>
            </GlobalSqContextProvider>
        </GlobalUserContext.Provider>
    );
}

export default App;
