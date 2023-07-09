import styles from '../styles/CheckoutPage.module.scss';
import { useContext, useEffect, useState } from "react";
import Main from "../layouts/Main";
import { CartContext } from "../contexts/CartContext";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import { Grid } from "../components/Grid";
import Button from "../components/Button";
import { ButtonType } from "../types/ButtonType";
import { IoBag } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


export default function Checkout() {
  const cart = useContext(CartContext) as CartContextInterface;
  const [grid, setGrid] = useState<React.ReactNode>(<div></div>);
  const nav = useNavigate();
  const [rowData, setRowData] = useState(cart.cart.map(product => {
    return {
      name: product.name,
      id: product.objectId,
      price: product.price + '€'
    }
  }));

  const [columnDefs] = useState([
    { field: 'Name' },
    { field: 'ID' },
    { field: 'Price' }
  ]);

  useEffect(() => {
    setRowData(cart.cart.map(product => {
      return {
        name: product.name,
        id: product.objectId,
        price: product.price + '€'
      }
    }));
    setGrid(<Grid columnDefs={columnDefs} rowData={rowData} />);
  }, [cart, columnDefs]);

  return (
    <Main>
      <div className={styles.checkoutWrapper}>
        {grid}
        <Button 
          type={ButtonType.PRIMARY} 
          text="Buy!"
          key="sxddf"
          rightIcon={<IoBag/>}
          buttonProps={{
            onClick: () => {
              cart.fullfillOrder();
              nav('/');
            },
          }}
        />
      </div>
    </Main>
  )
}


