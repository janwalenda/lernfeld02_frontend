import { Product } from "../interfaces/Product";

export default function ProductDetails(item: Product) {
  return (
    <div>
      <div >
        <h4>Details</h4>
      </div>
      <small>
        <h5>CPU:</h5>
        <p>{item.cpu.name}</p>
      </small>
      <small>
        <h5>Cores:</h5>
        <p>{item.cpu.count_amount}</p>
      </small>
      <small>
        <h5>Display Size:</h5>
        <p>{item.display.size_in_zoll} Zoll</p>
      </small>
      <small>
        <h5>Resolution:</h5>
        <p>{item.display.resolution_in_pixel} Pixel</p>
      </small>
      <small>
        <h5>Battery:</h5>
        <p>{item.battery.capacity_in_wh} wh</p>
      </small>
      <small>
        <h5>RAM:</h5>
        <p>{item.ram.capacity_in_gb} GB</p>
      </small>
      <small>
        <h5>Describtion:</h5>
        <p>{item.description}</p>
      </small>
    </div>
  );
}