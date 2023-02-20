function CoralButton({ title, clickHandler }) {
    return (
        <button className="coral" onClick={clickHandler}>
            {title}
        </button>
    );
}
export default CoralButton;
