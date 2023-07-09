import { FC, createContext, useContext, useEffect, useState } from "react";
import { useID } from "../hooks/useID";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import { CartObjectInterface } from "../interfaces/CartObjectInterface";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { API } from "../classes/API";
import { ToastContext } from "./ToastContext";
import { ToastContextInterface } from "../interfaces/ToastContextInterface";
import { ToastType } from "../types/ToastType";
import { getCardFromLocalStorage } from "../helpers/getCardFromLocalStorage";

export const CartContext = createContext<CartContextInterface| null>(null);

const CartProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const {setItem} = useLocalStorage();
  const [cart, setCart] = useState<CartObjectInterface[]>([]);
  const [id, increaseID] = useID();
  const toast = useContext(ToastContext) as ToastContextInterface;

  useEffect(() => {
    const lsCard = getCardFromLocalStorage();
  
    if(lsCard) {
      setCart(lsCard);
    }
  }, [])

  function getFromCart(id: number) {
    return cart.find(cartObject => {
      return cartObject.id === id;
    });
  }

  function removeFromCart(id: number) {
    const filter = cart.filter(cartObject => {
      return cartObject.id !== id;
    });
    const json = JSON.stringify(filter);
    setItem('cart', json);
    setCart(filter);
  }

  function addToCart(cartObject: CartObjectInterface) {
    const cartCopy = [...cart];
    cartCopy.push({
      id,
      ...cartObject,
    });
    const json = JSON.stringify(cartCopy);

    setItem('cart', json);
    setCart(cartCopy);
    increaseID();
  }

  function checkoutCart() {
    setCart([]);
  }




  function getTotalPrice() {
    const prices = cart.map(item => item.price);
    if (prices.length > 0) {
      return prices.reduce((a, b) => a + b);
    }
    return 0;
  }

  function fullfillOrder(){
    const api = new API();
    const order = cart.map(item => {
      return parseInt(item.objectId)
    });

    api.fullfillOrder(order).then(success => {
      toast.saveToast({
        title: 'Succsessfully ordered!',
        description: JSON.stringify(success),
        type: ToastType.SUCCESS
      })
    }).catch((err: Error) => {
      toast.saveToast({
        title: err.name,
        description: err.message,
        type: ToastType.ERROR
      })
    }).finally(() => {
      checkoutCart();
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart, 
        getFromCart, 
        removeFromCart,
        checkoutCart,
        getTotalPrice,
        fullfillOrder
      }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider;

