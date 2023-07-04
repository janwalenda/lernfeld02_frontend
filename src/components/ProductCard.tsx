import { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../contexts/CartContext";
import { ButtonType } from "../types/ButtonType";
import { IoAdd } from "react-icons/io5";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import styles from "../styles/ProductCard.module.scss";
import classNames from 'classnames';
import shadow from '../styles/Shadow.module.scss';

export default function PoductCard({ 
    productName, 
    price, 
    productId 
}: {
    productName: string;
    productId: string;
    price: number;
}) {
    const cart = useContext(CartContext) as CartContextInterface;
    const boxStyle = classNames(
        styles.productCardBox,
        shadow.boxTransitionOnHover
    )

    const handleButtonClick = () => {
        cart.addToCart({
          name: productName,
          objectId: productId,
          price: price,
        });
    };

    const localPrice = price.toLocaleString('de');

    return (
        <div className={boxStyle}>
            <div className={styles.productCardWrapper}>
                <h3 className={styles.productCardTitle}>
                    {productName}
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