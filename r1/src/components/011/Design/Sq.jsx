import { withClone, withDelete, withSpin } from '../HOCs/sq';
import BaseSmallButton from './BaseSmallButton';
import BlueSmallButton from './BlueSmallButton';
import RedSmallButton from './RedSmallButton';

function Sq({ s, setSq }) {
    const BaseSmallButtonWithClone = withClone(BaseSmallButton);
    const BlueSmallButtonWithSpin = withSpin(BlueSmallButton);
    const RedSmallButtonWithDelete = withDelete(RedSmallButton);
    return (
        <div
            className={'sq' + (s.spin ? ' spin' : '')}
            style={{
                backgroundColor: s.color + '70',
                borderColor: s.color,
            }}
        >
            <div className={s.spin ? 'spin-back' : ''}>
                <BaseSmallButtonWithClone title="Clone" setSq={setSq} sq={s} />
                <BlueSmallButtonWithSpin title="Spin" setSq={setSq} sq={s} />
                <RedSmallButtonWithDelete title="Del" setSq={setSq} sq={s} />
                {s.number}
            </div>
        </div>
    );
}

export default Sq;
