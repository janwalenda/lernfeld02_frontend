/* eslint-disable @typescript-eslint/no-inferrable-types */
import MainLayout from '../layouts/Main';
import PoductCard from '../components/ProductCard';
import { generateRandomProducts } from '../helpers/generateRandomProducts';
import styles from '../styles/App.module.scss';
import { API } from '../classes/API';
import { useEffect, useState } from 'react';

export default function App() {
  const products = generateRandomProducts(100);
  const [laptops, setLaptops] = useState<any[]>([]);
  
  useEffect(() => {
    const api = new API();
    api.getLaptops().then(setLaptops);
  }, []);

  console.log(laptops);


  return (
    <MainLayout>
      <div className={styles.appPageProductList}>
        {laptops.map(product => {
          return <PoductCard {...product} key={product.productId} />
        })}
      </div>
    </MainLayout>
  )
}
