import { FC, createContext, useState } from "react";
import { useID } from "../hooks/useID";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import { CartObjectInterface } from "../interfaces/CartObjectInterface";

export const CartContext = createContext<CartContextInterface| null>(null);

const CartProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [cart, setCart] = useState<CartObjectInterface[]>([]);
  const [id, increaseID] = useID();
  const [cartOpen, setCartOpen] = useState<boolean>(false)

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

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen, 
        toggleCart, 
        addToCart, 
        getFromCart, 
        removeFromCart
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
 