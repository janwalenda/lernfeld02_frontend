import styles from '../styles/Header.module.scss';
import { HeaderLink } from './HeaderLink';
import Devider from './Devider';
import { DeviderDirection } from '../types/DeviderDirection';
import CartButton from './CartButton';
import ProfileButton from './ProfileButton';
import ButtonGroup from './ButtonGroup';
import { IoDesktop, IoHome } from 'react-icons/io5';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <HeaderLink path='/' name='Home' rightIcon={<IoHome/>}/>
                <HeaderLink path='/workspace' name="Workspace" rightIcon={<IoDesktop/>}/>
            </div>
            <Devider direction={DeviderDirection.VERTICAL} />
            <ButtonGroup>
                <CartButton/>
                <ProfileButton/>
            </ButtonGroup>
        </header>
    )
}


