import { useContext, useState } from "react";
import Button from "./Button";
import { CartContext } from "../contexts/CartContext";
import { ButtonType } from "../types/ButtonType";
import { IoAdd } from "react-icons/io5";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import styles from "../styles/ProductCard.module.scss";
import classNames from 'classnames';
import shadow from '../styles/Shadow.module.scss';
import { Product } from "../interfaces/Product";
import ProductDetails from "./ProductDetails";
import { ButtonFloat } from "../types/ButtonFloat";

export default function PoductCard(item: Product) {
    const cart = useContext(CartContext) as CartContextInterface;
    const [showDetails, setShowDetails] = useState(false)
    const boxStyle = classNames(
        styles.productCardBox,
        shadow.boxTransitionOnHover
    )

    const showDetailsClick = () => {
        setShowDetails(!showDetails)
    }

    const handleButtonClick = () => {
        cart.addToCart({
          name: item.name,
          objectId: item.id.toString(),
          price: item.price,
        });
    };

    const localPrice = item.price.toLocaleString('de');

    return (
        <div className={boxStyle}>
            <div className={styles.productCardWrapper}>
                <h3 className={styles.productCardTitle}>
                    {item.name}
                </h3>
                <small className={styles.productCardPrice}>{localPrice}€</small>
            </div>
            <div>
                <Button
                type={ButtonType.PRIMARY}
                text="Add to Cart"
                float={ButtonFloat.LEFT}
                rightIcon={<IoAdd/>}
                buttonProps={{
                    onClick: handleButtonClick,
                }}
                />
                <Button 
                type={ButtonType.TERTIARY}
                text="Details"
                float={ButtonFloat.RIGHT}
                buttonProps={{
                    onClick: showDetailsClick,
                    }}
                    />
            </div>
            {
                showDetails ? <ProductDetails{...item}></ProductDetails> : null
            }
        </div>
    )
}