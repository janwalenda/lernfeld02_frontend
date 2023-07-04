/* eslint-disable @typescript-eslint/no-inferrable-types */
import MainLayout from '../layouts/Main';
import PoductCard from '../components/ProductCard';
import { generateRandomProducts } from '../helpers/generateRandomProducts';

export default function App() {
  const products = generateRandomProducts(5);


  return (
    <MainLayout>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, calc(100% /3))',
        height: '100%',
        overflowY: 'scroll',
      }}>
        {products.map(product => {
          return <PoductCard {...product} key={product.productId} />
        })}
      </div>
    </MainLayout>
  )
}
