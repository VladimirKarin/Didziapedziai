import CloneButton from '../010/Buttons/CloneButton';
import DelButton from '../010/Buttons/DelButton';
import SpinButton from '../010/Buttons/SpinButton';

function Sq({ s, i, setSq }) {
    return (
        <div
            className={'sq' + (s.spin ? ' spin' : '')}
            style={{
                backgroundColor: s.color + '70',
                borderColor: s.color,
            }}
        >
            {' '}
            <div className={s.spin ? 'spin-back' : ''}>
                <DelButton classes="red small" sq={s} setSq={setSq} />
                <CloneButton classes="small" sq={s} setSq={setSq} />
                <SpinButton classes="blue small" sq={s} setSq={setSq} />
                {s.number}
            </div>
        </div>
    );
}

export default Sq;
