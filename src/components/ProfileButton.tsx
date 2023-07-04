import Button from "./Button";
import { ButtonType } from "../types/ButtonType";
import { IoPerson } from "react-icons/io5";

export default function ProfileButton() {
    return (
        <Button 
            type={ButtonType.PRIMARY} 
            leftIcon={<IoPerson/>}
        />
    )
}