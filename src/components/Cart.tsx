import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import styles from "../styles/Cart.module.scss";
import shadow from '../styles/Shadow.module.scss';
import { ButtonType } from "../types/ButtonType";
import Button from "./Button";
import { IoBag, IoClose } from "react-icons/io5";
import { CartElement } from "./CartElement";
import classNames from 'classnames';


export default function Cart() {
  const cart = useContext(CartContext) as CartContextInterface;
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [cartElements, setCardElements] = useState<React.ReactNode[]>([]);
  const [cartStyle, setCartStyle] = useState<string>();

  useEffect(() => {

    if (cart.cartOpen) {
      const claseName = classNames(
        styles.cartOpen,
        shadow.box,
      );

      setCartStyle(claseName);
    } else {
      setCartStyle(styles.cartClosed);
    }
  
  }, [cart.cartOpen])

  useEffect(() => {
    setIsEmpty(cart.cart.length === 0);

    const cartMap = cart.cart.map((element, index) => (
      <CartElement element={element} key={index} />
    ));

    setCardElements(cartMap);
  }, [cart, cart.removeFromCart]);

  return (
    <aside className={cartStyle}>
      <div className={styles.cartTitle}>
        <h1>Cart</h1>
        <Button
          type={ButtonType.SECONDARY}
          leftIcon={<IoClose />}
          buttonProps={{
            onClick: () => {
              cart.toggleCart();
            },
          }}
        />
      </div>
      {!isEmpty && cartElements}
      {!isEmpty && <small>Total: {cart.getTotalPrice()}€</small>}
      {!isEmpty && <Button 
        type={ButtonType.PRIMARY} 
        text="Checkout" 
        rightIcon={<IoBag/>}
      />}
      {isEmpty && (<span>Your cart is empty!</span>)}
    </aside>
  );
}
