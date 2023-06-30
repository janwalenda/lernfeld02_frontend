
import styles from '../styles/Header.module.scss';
import { HeaderLink } from './HeaderLink';
import { HiHome, HiShoppingCart } from "react-icons/hi";

export default function Header() {
    
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <HeaderLink path='/' name='Home' rightIcon={<HiHome/>}/>
                <HeaderLink path='/devices' name='Devices'/>
                <HeaderLink path='/cart' name='Cart' rightIcon={<HiShoppingCart/>}/>
            </div>
        </header>
    )
}


