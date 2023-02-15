function SpinAllButton({ classes, setSq }) {
    const clickHandler = () => {
        setSq((s) => s.map((s) => ({ ...s, spin: true })));
    };

    return (
        <button className={classes} onClick={clickHandler}>
            Spin all
        </button>
    );
}
export default SpinAllButton;
