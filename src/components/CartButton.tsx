import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "./Button";
import { ButtonType } from "../types/ButtonType";
import { HiShoppingCart } from "react-icons/hi";
import { CartContextInterface } from "../interfaces/CartContextInterface";

export default function CartButton() {
    const cart = useContext(CartContext) as CartContextInterface;
    const [cartLength, setLength] = useState(0);

    useEffect(() => {
        const cartArr = cart.cart;
        setLength(cartArr.length);
    }, [cart]);

    return (
        <Button 
            type={ButtonType.PRIMARY} 
            leftIcon={<HiShoppingCart/>}
            button={{
                onClick: () => {
                    cart.toggleCart();
                }
            }}
            badge={cartLength}
        />
    )
}