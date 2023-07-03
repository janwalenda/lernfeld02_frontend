import { CartObjectInterface } from "./CartObjectInterface";

export interface CartContextInterface {
  cart: CartObjectInterface[];
  cartOpen: boolean;
  toggleCart: () => void;
  getFromCart: (id: number) => CartObjectInterface | undefined;
  removeFromCart: (id: number) => void;
  addToCart: (cartObject: CartObjectInterface) => void;
  checkoutCart: () => void;
}
