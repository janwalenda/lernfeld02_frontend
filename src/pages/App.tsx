import MainLayout from '../layouts/Main';
import PoductCard from '../components/ProductCard';
import { CardGroup } from '../components/CardGroup';

export default function App() {
  return (
    <MainLayout>
      <CardGroup>
        <PoductCard 
          productName="Laptop 1" 
          price={10000} 
          productId="sdgee" 
        />
        <PoductCard 
          productName="Laptop 2" 
          price={20} 
          productId="sgeioe" 
        />
        <PoductCard 
          productName="Laptop 3" 
          price={5422} 
          productId="nftht" 
        />
      </CardGroup>
      <CardGroup>
        <PoductCard 
          productName="Laptop 4" 
          price={100} 
          productId="sdgee" 
        />
        <PoductCard 
          productName="Laptop 5" 
          price={.65} 
          productId="sgeioe" 
        />
        <PoductCard 
          productName="Laptop 6" 
          price={2343} 
          productId="nftht" 
        />
        </CardGroup>
    </MainLayout>
  )
}


