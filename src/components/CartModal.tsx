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
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../contexts/ModalContext";
import { ModalContextInterface } from "../interfaces/ModalContextInterface";


export default function CartModal() {
  const cart = useContext(CartContext) as CartContextInterface;
  const modals = useContext(ModalContext) as ModalContextInterface;
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [cartElements, setCardElements] = useState<React.ReactNode[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>('');
  const nav = useNavigate();

  useEffect(() => {
    setIsEmpty(cart.cart.length === 0);

    const cartMap = cart.cart.map((element) => (
      <CartElement
        element={element}
        key={element.objectId}
      />
    ));

    setCardElements(cartMap);
    const price = cart.getTotalPrice();
    if (typeof price === 'number') {
      const priceString = price.toLocaleString('de');
      setTotalPrice(priceString);
    }
  }, [cart, cart.removeFromCart]);

  const handleCheckout = () => {
    modals.closeAllModals();
    nav('/checkout');
  };

  const priceElement = !isEmpty && (<small>Total: {totalPrice}€</small>);
  const finalCartelements = !isEmpty && cartElements;
  const emptyMessage = isEmpty && (<span>Your cart is empty!</span>);

  return (
    <Modal modalID={ModalType.CART_MODAL} title="Cart">
      <div className={styles.cartList}>
        {finalCartelements}
      </div>
      {priceElement}
      {!isEmpty && <Button
        type={ButtonType.PRIMARY}
        text="Checkout"
        rightIcon={<IoBag />}
        buttonProps={{
          onClick: handleCheckout,
        }}
      />}
      {emptyMessage}
    </Modal>
  );
}
