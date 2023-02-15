import randColor from '../../../functions/randColor';
import { v4 as uuidv4 } from 'uuid';

function AddButton({ classes, setSq }) {
    const clickHandler = () => {
        setSq((s) => [...s, { id: uuidv4(), color: randColor() }]);
    };

    return (
        <button className={classes} onClick={clickHandler}>
            Add
        </button>
    );
}

export default AddButton;
