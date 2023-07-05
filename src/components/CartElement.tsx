import { CartContextInterface } from "../interfaces/CartContextInterface";
import { ButtonType } from "../types/ButtonType";
import Button from "./Button";
import { IoTrashBinOutline } from "react-icons/io5";
import { CartObjectInterface } from "../interfaces/CartObjectInterface";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Devider from "./Devider";
import { DeviderDirection } from "../types/DeviderDirection";
import styles from '../styles/CartElement.module.scss';

export function CartElement({ element }: { element: CartObjectInterface; }) {
  const cart = useContext(CartContext) as CartContextInterface;

  return (
    <div className={styles.cartElementWrapper}>
      <div>
        <div>
          <h5>{element.name}</h5>
          <small>{element.price}€</small>
        </div>
        <Button
          type={ButtonType.SECONDARY}
          leftIcon={<IoTrashBinOutline />}
          buttonProps={{
            onClick() {
              const id = element.id;

              if (typeof id === 'number') {
                cart.removeFromCart(id);
              }
            },
          }} />
      </div>
      <Devider 
        direction={DeviderDirection.HORIZONTAL}
      />
    </div>
  );
}
