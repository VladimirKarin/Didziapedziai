import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.scss';
import Fox from './Fox';
import Home from './Home';
import Menu from './Menu';
import Racoon from './Racoon';
import axios from 'axios';

function App() {
    const [page, setPage] = useState('home');

    const [content, setContent] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/api/' + page).then((res) => {
            setContent(res.data);
        });
    }, [page]);

    return (
        <div className="App">
            <header className="App-header">
                <Menu setPage={setPage} />

                {page === 'home' && null !== content ? (
                    <Home color={content.color} title={content.title} />
                ) : null}

                {page === 'fox' && null !== content ? (
                    <Fox color={content.color} title={content.title} />
                ) : null}

                {page === 'racoon' && null !== content ? (
                    <Racoon color={content.color} title={content.title} />
                ) : null}

                {null == content ? <h1>LOADING...</h1> : null}
            </header>
        </div>
    );
}

export default App;
