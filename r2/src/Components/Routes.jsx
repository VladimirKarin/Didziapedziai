import { useContext } from 'react';
import Auth from './Auth';
import { Global } from './Global';
import Login from './Login';
import LuckyNumber from './LuckyNumber';

function Routes() {
    const { route } = useContext(Global);

    switch (route) {
        case 'numbers':
            return (
                <Auth>
                    <LuckyNumber />
                </Auth>
            );
        case 'login':
            return <Login />;
        default:
            return null;
    }
}

export default Routes;
