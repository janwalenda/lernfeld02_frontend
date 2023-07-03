import { useNavigate } from 'react-router-dom';
import styles from '../styles/HeaderLink.module.scss';
import classNames from 'classnames';

interface HeaderLinkOptions {
    path: string;
    name?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export function HeaderLink({ 
    path, 
    name, 
    leftIcon, 
    rightIcon, 
}: HeaderLinkOptions) {
    const nav = useNavigate();
    const location = window.location;
    const locPath = location.pathname;

    const wrapperClasses = classNames({
        [styles.headerLinkWrapper]: locPath !== path,
        [styles.selectedLinkWrapper]: locPath === path,
    })

    const handleNavigate: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        nav(path);
    } 

    return (
        <a className={wrapperClasses} href={path} onClick={handleNavigate}>
            {leftIcon && <div className={styles.headerLinkIcon}>
                {leftIcon}
            </div>}
            {name && <div className={styles.headerLinkText}>
                {name}
            </div>}
            {rightIcon && <div className={styles.headerLinkIcon}>
                {rightIcon}
            </div>}
        </a>
    );
}

