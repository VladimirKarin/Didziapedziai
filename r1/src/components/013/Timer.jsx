import { useEffect, useState } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    // setInterval(() => setSeconds((s) => s + 1), 1000);

    useEffect(() => {
        const timerID = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div className="sq-bin">
            <div
                className="sq"
                style={{
                    backgroundColor: '#9acd3270',
                    borderColor: '#92acd32',
                }}
            >
                {seconds}
            </div>
        </div>
    );
}

export default Timer;
