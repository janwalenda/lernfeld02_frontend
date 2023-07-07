import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import styles from "../styles/Cart.module.scss";
import { ButtonType } from "../types/ButtonType";
import Button from "./Button";
import { IoBag } from "react-icons/io5";
import { CartElement } from "./CartElement";
import { ModalType } from "../types/ModalType";
import Modal from "./Modal";


export default function CartModal() {
  const cart = useContext(CartContext) as CartContextInterface;
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [cartElements, setCardElements] = useState<React.ReactNode[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>('');


  useEffect(() => {
    setIsEmpty(cart.cart.length === 0);

    const cartMap = cart.cart.map((element) => (
      <CartElement
        element={element}
        key={element.id}
      />
    ));

    setCardElements(cartMap);
    const price = cart.getTotalPrice();
    if (typeof price === 'number') {
      const priceString = price.toLocaleString('de');
      setTotalPrice(priceString);
    }
  }, [cart, cart.removeFromCart]);

  return (
    <Modal modalID={ModalType.CART_MODAL} title="Cart">
      <div className={styles.cartList}>
        {!isEmpty && cartElements}
      </div>
      {!isEmpty && <small>Total: {totalPrice}€</small>}
      {!isEmpty && <Button
        type={ButtonType.PRIMARY}
        text="Checkout"
        rightIcon={<IoBag />}
      />}
      {isEmpty && (<span>Your cart is empty!</span>)}
    </Modal>
  );
}
