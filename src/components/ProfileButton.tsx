import Button from "./Button";
import { ButtonType } from "../types/ButtonType";
import { IoPerson } from "react-icons/io5";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { ModalContextInterface } from "../interfaces/ModalContextInterface";
import { ModalType } from "../types/ModalType";

export default function ProfileButton() {
    const modal = useContext(ModalContext) as ModalContextInterface;

    const handleUserButtonClick = () => {
        modal.toggleModal(ModalType.PROFILE_MODAL);
    };
    
    return (
        <Button 
            type={ButtonType.PRIMARY} 
            leftIcon={<IoPerson/>}
            buttonProps={{
                onClick: handleUserButtonClick
            }}
        />
    )
}