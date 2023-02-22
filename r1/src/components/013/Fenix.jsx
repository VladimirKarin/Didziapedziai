import { useEffect } from 'react';

function Fenix() {
    console.log('Fenix Function');

    useEffect(() => {
        console.log('Fenix isalive');
        return () => {
            console.log('Fenix is Dead');
        };
    }, []);

    return (
        <>
            <h2>Fenix</h2>
        </>
    );
}

export default Fenix;
