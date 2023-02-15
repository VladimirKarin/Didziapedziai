function Buttons(setCount) {
    return (
        <>
            <button className="blue" onClick={() => setCount((c) => c * 2)}>
                x2
            </button>

            <button className="red" onClick={() => setCount(1)}>
                Reset
            </button>
        </>
    );
}

export default Buttons;
