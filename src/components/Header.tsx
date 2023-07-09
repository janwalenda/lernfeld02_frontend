import styles from '../styles/Header.module.scss';
import shadow from '../styles/Shadow.module.scss';
import { HeaderLink } from './HeaderLink';
import Devider from './Devider';
import { DeviderDirection } from '../types/DeviderDirection';
import CartButton from './CartButton';
import ProfileButton from './ProfileButton';
import ButtonGroup from './ButtonGroup';
import { IoDesktop, IoHome } from 'react-icons/io5';
import classNames from 'classnames';

export default function Header() {
    const headerClasses = classNames(
        styles.headerContainer,
        shadow.box,
    );

    return (
        <header className={headerClasses}>
            <div className={styles.headerWrapper}>
                <HeaderLink path='/' name='Home' rightIcon={<IoHome/>}/>
                <HeaderLink path='/workspace' name="Workspace" rightIcon={<IoDesktop/>}/>
            </div>
            <Devider direction={DeviderDirection.VERTICAL} size='half' />
            <ButtonGroup>
                <CartButton/>
                <ProfileButton/>
            </ButtonGroup>
        </header>
    )
}


