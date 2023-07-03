import { useNavigate } from 'react-router-dom';
import styles from '../styles/HeaderLink.module.scss';
import classNames from 'classnames';

interface HeaderLinkOptions {
    path: string;
    name?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    tip?: string | number;
}

export function HeaderLink({ 
    path, 
    name, 
    leftIcon, 
    rightIcon, 
    tip 
}: HeaderLinkOptions) {
    const nav = useNavigate();
    const location = window.location;
    const locPath = location.pathname;

    const wrapperClasses = classNames({
        [styles.headerLinkWrapper]: locPath !== path,
        [styles.selectedLinkWrapper]: locPath === path,
    })

    const handleNavigate = () => {
        nav(path);
    };

    return (
        <div className={wrapperClasses} onClick={handleNavigate}>
            {leftIcon && <div className={styles.headerLinkIcon}>
                {leftIcon}
            </div>}
            {name && <div className={styles.headerLinkText}>
                {name}
            </div>}
            {rightIcon && <div className={styles.headerLinkIcon}>
                {rightIcon}
                <span className={styles.headerLinkTip}>
                    {tip}
                </span>
            </div>}
        </div>
    );
}
