import { CartObjectInterface } from "./CartObjectInterface";

export interface CartContextInterface {
  cart: CartObjectInterface[];
  getFromCart: (id: number) => CartObjectInterface | undefined;
  removeFromCart: (id: number) => void;
  addToCart: (cartObject: CartObjectInterface) => void;
  checkoutCart: () => void;
  getTotalPrice: () => number | undefined;
  fullfillOrder: () => void;
}
