import styles from '../styles/Devider.module.scss';
import classNames from 'classnames';
import { DeviderDirection } from '../types/DeviderDirection';

export default function Devider({ direction, style }: { direction: DeviderDirection, style?: React.CSSProperties }){
    const deviderStyle = classNames({
        [styles.verticalDevider]: direction === DeviderDirection.VERTICAL,
        [styles.horizontalDevider]: direction === DeviderDirection.HORIZONTAL
    });

    return (
        <span className={deviderStyle} style={style}/>
    )
}