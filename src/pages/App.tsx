/* eslint-disable @typescript-eslint/no-inferrable-types */
import MainLayout from '../layouts/Main';
import PoductCard from '../components/ProductCard';
import styles from '../styles/App.module.scss';
import { API } from '../classes/API';
import { useEffect, useState } from 'react';
import { Product } from '../interfaces/Product';

export default function App() {
  const [laptops, setLaptops] = useState<Product[]>([]);
  
  useEffect(() => {
    const api = new API();
    api.getLaptops().then(setLaptops);
  }, []);

  console.log(laptops);


  return (
    <MainLayout>
      <div className={styles.appPageProductList}>
        {laptops.map(product => {
          return <PoductCard {...product} key={product.id} />
        })}
      </div>
    </MainLayout>
  )
}
