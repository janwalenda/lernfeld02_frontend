import { FC, createContext, useState } from "react";
import { useID } from "../hooks/useID";
import { CartContextInterface } from "../interfaces/CartContextInterface";
import { CartObjectInterface } from "../interfaces/CartObjectInterface";

export const CartContext = createContext<CartContextInterface| null>(null);

const CartProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [cart, setCart] = useState<CartObjectInterface[]>([])
  const [id, increaseID] = useID();

  const getFromCart = (id: number) => {
    return cart.find(cartObject => {
      return cartObject.id === id
    });
  };

  const removeFromCart = (id: number) => {
    const filter = cart.filter(cartObject => {
      return cartObject.id !== id;
    });

    setCart(filter);
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

  const checkoutCart = () => {
    setCart([]);
  }


  const getTotalPrice = () => {
    const prices = cart.map(item => item.price);
    if(prices.length > 0) {
      return prices.reduce((a, b) => a + b);
    }
    return 0;
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
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


 