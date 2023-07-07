import { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../contexts/CartContext";
import { ButtonType } from "../types/ButtonType";
import { IoAdd } from "react-icons/io5";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import styles from "../styles/ProductCard.module.scss";
import classNames from 'classnames';
import shadow from '../styles/Shadow.module.scss';
import { Product } from "../interfaces/Product";

export default function PoductCard({ 
    name, 
    price, 
    id 
}: Product) {
    const cart = useContext(CartContext) as CartContextInterface;
    const boxStyle = classNames(
        styles.productCardBox,
        shadow.boxTransitionOnHover
    )

    const handleButtonClick = () => {
        cart.addToCart({
          name: name,
          objectId: id.toString(),
          price: price,
        });
    };

    const localPrice = price.toLocaleString('de');

    return (
        <div className={boxStyle}>
            <div className={styles.productCardWrapper}>
                <h3 className={styles.productCardTitle}>
                    {name}
                </h3>
                <small className={styles.productCardPrice}>{localPrice}€</small>
            </div>
            <Button
              type={ButtonType.PRIMARY}
              text="Add to Cart"
              rightIcon={<IoAdd/>}
              buttonProps={{
                onClick: handleButtonClick,
              }}
            />
        </div>
    )
}