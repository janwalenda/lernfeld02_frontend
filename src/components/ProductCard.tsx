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

export default function PoductCard({ 
    name, 
    price, 
    id,
    cpu,
    battery,
    display,
    ean,
    gpu,
    manufacturer,
    os,
    ram,
    storage,
    boyable = true,
    description,
}: Product & {
    boyable?: boolean
}) {
    const cart = useContext(CartContext) as CartContextInterface;
    const [showDetails, setShowDetails] = useState(false);
    const boxStyle = classNames(
        styles.productCardBox,
        shadow.boxTransitionOnHover
    )

    function convertPriceToNumber(price: string): number {
        const replaced = price.replace(',', '.')
        return parseFloat(replaced);
    }

    const showDetailsClick = () => {
        setShowDetails(!showDetails)
    }

    const handleButtonClick = () => {
        cart.addToCart({
          name: name,
          objectId: id.toString(),
          price: convertPriceToNumber(price),
        });
    };

    return (
        <div className={boxStyle}>
            <div className={styles.productCardWrapper}>
                <h3 className={styles.productCardTitle}>
                    {name}
                </h3>
                <p>{description}</p>
                <small className={styles.productCardPrice}>{price}€</small>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            {boyable && <Button
              type={ButtonType.PRIMARY}
              text="Add to Cart"
              rightIcon={<IoAdd/>}
              buttonProps={{
                onClick: handleButtonClick,
              }}
            />}
                <Button 
                type={ButtonType.TERTIARY}
                text="Details"
                float={ButtonFloat.RIGHT}
                buttonProps={{
                    onClick: showDetailsClick,
                    }}
                    />
            </div>
            {showDetails && <ProductDetails
                battery={battery}
                cpu={cpu}
                description={description}
                display={display}
                ean={ean}
                gpu={gpu}
                id={id}
                manufacturer={manufacturer}
                name={name}
                os={os}
                price={price}
                ram={ram}
                storage={storage}
            />}
        </div>
    )
}