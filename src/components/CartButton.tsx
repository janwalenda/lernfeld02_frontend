import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "./Button";
import { ButtonType } from "../types/ButtonType";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import { IoCart } from "react-icons/io5";
import {ModalContext} from "../contexts/ModalContext";
import { ModalContextInterface } from "../interfaces/ModalContextInterface";
import { ModalType } from "../types/ModalType";

export default function CartButton() {
    const cart = useContext(CartContext) as CartContextInterface;
    const modals = useContext(ModalContext) as ModalContextInterface;
    const [cartLength, setLength] = useState(0);

    useEffect(() => {
        const cartArr = cart.cart;
        setLength(cartArr.length);
    }, [cart]);

    const buttonProps = {
        onClick: () => {
            modals.toggleModal(ModalType.CART_MODAL);
        }
    };

    return (
        <Button 
            type={ButtonType.PRIMARY} 
            leftIcon={<IoCart/>}
            buttonProps={buttonProps}
            badge={cartLength}
        />
    )
}