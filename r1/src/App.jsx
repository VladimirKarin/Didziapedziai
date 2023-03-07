import { useEffect, useState } from 'react';
import Create from './components/Dices2/Create';
import List from './components/Dices2/List';
import Messages from './components/Dices2/Messages';
import './components/Dices2/style.scss';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContextProvider } from './components/Dices2/GlobalContext';

function App() {
    return (
        <GlobalContextProvider>
            <div className="dices">
                <div className="content">
                    <div className="left">
                        <Create />
                    </div>
                    <div className="right">
                        <List />
                    </div>
                </div>
            </div>
            {<Messages />}
        </GlobalContextProvider>
    );
}

export default App;
