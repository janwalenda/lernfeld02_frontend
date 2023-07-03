
import { useContext } from 'react';
import styles from '../styles/Header.module.scss';
import { HeaderLink } from './HeaderLink';
import { HiHome, HiDesktopComputer } from "react-icons/hi";
import { CartContext } from '../contexts/CartContext';
import Devider from './Devider';
import { DeviderDirection } from '../types/DeviderDirection';

export default function Header() {
    const cart = useContext(CartContext);
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <HeaderLink path='/' name='Home' rightIcon={<HiHome/>}/>
                <HeaderLink path='/workspace' rightIcon={<HiDesktopComputer/>}/>
            </div>
            <Devider direction={DeviderDirection.VERTICAL} />
        </header>
    )
}


