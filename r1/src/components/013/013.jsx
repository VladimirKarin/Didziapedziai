import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import Products from './Products';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Products />
            </header>
        </div>
    );
}

export default App;
