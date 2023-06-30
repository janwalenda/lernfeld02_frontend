import { useNavigate } from 'react-router-dom';
import styles from '../styles/HeaderLink.module.scss';

export function HeaderLink({ path, name, leftIcon, rightIcon }: {
    path: string;
    name?: string;
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}) {
    const nav = useNavigate();

    const handleNavigate = () => {
        nav(path);
    };

    return (
        <div className={styles.headerLinkWrapper} onClick={handleNavigate}>
            {leftIcon && <div className={styles.headerLinkIcon}>
                {leftIcon}
            </div>}
            {name && <div className={styles.headerLinkText}>
                {name}
            </div>}
            {rightIcon && <div className={styles.headerLinkIcon}>
                {rightIcon}
            </div>}
        </div>
    );
}
