import { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../contexts/CartContext";
import { ButtonType } from "../types/ButtonType";
import { IoAdd } from "react-icons/io5";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import styles from "../styles/ProductCard.module.scss";

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
    return (
        <div className={styles.productCardBox}>
            <div className={styles.productCardWrapper}>
                <h3 className={styles.productCardTitle}>
                    {productName}
                </h3>
                <small className={styles.productCardPrice}>{price}€</small>
            </div>
            <Button
              type={ButtonType.PRIMARY}
              text='Add to Cart'
              rightIcon={<IoAdd/>}
              buttonProps={{
                onClick: () => {
                  cart.addToCart({
                    name: productName,
                    objectId: productId,
                    price: price,
                  });
                }
              }}
            />
        </div>
    )
}