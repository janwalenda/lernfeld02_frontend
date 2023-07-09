import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthContextInterface } from "../interfaces/AuthContextInterface";
import { ModalType } from "../types/ModalType";
import Modal from "./Modal";
import Button from "./Button";
import { ButtonType } from "../types/ButtonType";
import { IoLogOutOutline } from "react-icons/io5";
import styles from '../styles/ProfileModal.module.scss';
import Devider from "./Devider";
import { DeviderDirection } from "../types/DeviderDirection";

export default function ProfileModal(){
    const auth = useContext(AuthContext) as AuthContextInterface; 
    const userData = auth.getUserData();

    if(!userData) {
        auth.logout();
        return <div></div>;
    }

    const handleClick = () => {
        auth.logout();
    };

    return (
        <Modal modalID={ModalType.PROFILE_MODAL} title="Profile">
            <div className={styles.profileCardWrapper}>
                <p>{userData.user.email}</p>
                <small>{userData.user.id}</small>
                <Devider 
                    size="xl" 
                    direction={DeviderDirection.HORIZONTAL} 
                    style={{
                        marginBottom: '1rem'
                    }}
                />
                <Button 
                    type={ButtonType.PRIMARY} 
                    text="Logout" 
                    rightIcon={<IoLogOutOutline/>}
                    buttonProps={{
                        onClick: handleClick
                    }}
                />
            </div>
        </Modal>
    );

}