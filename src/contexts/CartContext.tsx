import { FC, createContext, useState } from "react";
import { useID } from "../hooks/useID";

interface CartObjectInterface {
  id?: number;
  objectId: string;
  name: string;
}

interface CartContextInterface {
  cart: CartObjectInterface[];
  getFromCart: (id: number) => CartObjectInterface | undefined;
  removeFromCart: (id: number) => void;
  addToCart: (cartObject: CartObjectInterface) => void;
}

export const CartContext = createContext<CartContextInterface| null>(null);

const CartProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [cart, setCart] = useState<CartObjectInterface[]>([]);
  const [id, increaseID] = useID();

  const getFromCart = (id: number) => {
    return cart.find(cartObject => {
      return cartObject.id === id
    });
  };

  const removeFromCart = (id: number) => {
    return cart.filter(cartObject => {
      return cartObject.id !== id;
    });
  };

  const addToCart = (cartObject: CartObjectInterface) => {
    const cartCopy = [...cart];
    cartCopy.push({
      id,
      ...cartObject,
    });
    setCart(cartCopy);
    increaseID();
  }

  return (
    <CartContext.Provider
      value={{cart, addToCart, getFromCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
 