import styles from '../styles/Devider.module.scss';
import cx from 'classnames';
import { DeviderDirection } from '../types/DeviderDirection';

type Size = 'full' | '3xl' | '2xl' | 'xl' | 'half';

interface DeviderProps {
    direction: DeviderDirection;
    size: Size;
    style?: React.CSSProperties;
}

export default function Devider({ direction, size, style }: DeviderProps){
    const classNames = cx({
        [styles['verticalDevider' + size]]: isVertical(direction),
        [styles['horizontalDevider' + size]]: isHorizontal(direction)

    })

    return (
        <span className={classNames} style={style}/>
    );
}

function isHorizontal(direction: DeviderDirection): boolean {
    return direction === DeviderDirection.HORIZONTAL;
}

function isVertical(direction: DeviderDirection): boolean {
    return direction === DeviderDirection.VERTICAL;
}
