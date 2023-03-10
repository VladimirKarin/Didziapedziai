function SpinButton({ classes, sq, setSq }) {
    const clickHandler = () => {
        setSq((s) =>
            s.map((s) => (s.id === sq.id ? { ...s, spin: !s.spin } : { ...s }))
        );
    };

    return (
        <button className={classes} onClick={clickHandler}>
            Spin
        </button>
    );
}

export default SpinButton;
