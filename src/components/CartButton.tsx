import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "./Button";
import { ButtonType } from "../types/ButtonType";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import { IoCart } from "react-icons/io5";

export default function CartButton() {
    const cart = useContext(CartContext) as CartContextInterface;
    const [cartLength, setLength] = useState(0);

    useEffect(() => {
        const cartArr = cart.cart;
        setLength(cartArr.length);
    }, [cart]);

    const buttonProps = {
        onClick: () => {
            cart.toggleCart();
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