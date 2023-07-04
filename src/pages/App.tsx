import MainLayout from '../layouts/Main';
import PoductCard from '../components/ProductCard';
import { CardGroup } from './CardGroup';

export default function App() {
  return (
    <MainLayout>
      <CardGroup>
        <PoductCard 
          productName="Computer 1" 
          price={10000} 
          productId="sdgee" 
        />
        <PoductCard 
          productName="Computer 2" 
          price={20} 
          productId="sgeioe" 
        />
        <PoductCard 
          productName="Computer 3" 
          price={5422} 
          productId="nftht" 
        />
      </CardGroup>
      <CardGroup>
        <PoductCard 
          productName="Computer 4" 
          price={100} 
          productId="sdgee" 
        />
        <PoductCard 
          productName="Computer 5" 
          price={.65} 
          productId="sgeioe" 
        />
        <PoductCard 
          productName="Computer 6" 
          price={2343} 
          productId="nftht" 
        />
        </CardGroup>
    </MainLayout>
  )
}


