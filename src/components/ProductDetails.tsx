import { Product } from "../interfaces/Product";

export default function ProductDetails(item: Product) {
  return (
    <aside >
      <div >
        <h4>Details</h4>
      </div>
      <small>Name: {item.name}</small><br/>
      <small>CPU: {item.cpu.name}</small><br/>
      <small>Cores: {item.cpu.count_amount}</small><br/>
      <small>Display Size: {item.display.size_in_zoll} Zoll</small><br/>
      <small>Resolution: {item.display.resolution_in_pixel} Pixel</small><br/>
      <small>Battery: {item.battery.capacity_in_wh} wh</small><br/>
      <small>RAM: {item.ram.capacity_in_gb} GB</small><br/>
      <small>Describtion: {item.description}</small><br/>
    </aside>
  );
}