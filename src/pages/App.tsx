/* eslint-disable @typescript-eslint/no-inferrable-types */
import MainLayout from '../layouts/Main';
import PoductCard from '../components/ProductCard';
import { generateRandomProducts } from '../helpers/generateRandomProducts';
import styles from '../styles/App.module.scss';

export default function App() {
  const products = generateRandomProducts(100);


  return (
    <MainLayout>
      <div className={styles.appPageProductList}>
        {products.map(product => {
          return <PoductCard {...product} key={product.productId} />
        })}
      </div>
    </MainLayout>
  )
}
