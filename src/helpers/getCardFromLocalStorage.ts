import { CartObjectInterface } from "../interfaces/CartObjectInterface";

export function getCardFromLocalStorage() {
  const lsCart = localStorage.getItem('cart');

  if (typeof lsCart === 'string') {
    const parsed = JSON.parse(lsCart);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed as CartObjectInterface[];
    }
  }
}
