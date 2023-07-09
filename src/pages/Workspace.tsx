import { useState, useEffect } from "react";
import { API } from "../classes/API";
import PoductCard from "../components/ProductCard";
import { Product } from "../interfaces/Product";
import Main from "../layouts/Main";
import styles from "../styles/App.module.scss";

export default function UserDevices() {
  const [laptops, setLaptops] = useState<{
    id: number;
    laptop: Product;
  }[]>([]);
  
  useEffect(() => {
    const api = new API();
    api.getUserOrders().then(setLaptops);
  }, []);

  return (
    <Main>
      <div className={styles.appPageWrapper}>
        <div className={styles.appPageProductList}>
          {laptops.map(product => {
            return <PoductCard 
              {...product.laptop}
              key={product.id} 
              boyable={false}
            />
          })}
        </div>
      </div>
    </Main>
  )
}