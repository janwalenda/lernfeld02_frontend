import Button from "./Button";
import { ButtonType } from "../types/ButtonType";
import { HiUser } from "react-icons/hi";

export default function ProfileButton() {
    return (
        <Button 
            type={ButtonType.PRIMARY} 
            leftIcon={<HiUser/>}
        />
    )
}