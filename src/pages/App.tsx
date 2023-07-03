import MainLayout from '../layouts/Main';
import PoductCard from '../components/ProductCard';

export default function App() {
  return (
    <MainLayout>
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
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
      </div>
    </MainLayout>
  )
}
