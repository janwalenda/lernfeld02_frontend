import { Product } from "../interfaces/Product";

export function generateRandomProducts(length: number): Product[] {
    const products: Product[] = [];
    for (let i = 0; i < length; i++) {
        
        const randomPrice = (Math.random() * 10000);
        const product: Product = {
            price: randomPrice,
            productId: generateRandomProductID(),
            productName: `Computer ${i}`
        };

        products.push(product);
    }
    return products;
}

function generateRandomProductID(): string {
    const productIdChars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOP".split('');
    let productId = '';
    for(let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(
            Math.random() * productIdChars.length
        );
        const char = productIdChars[randomIndex];
        productId += char;
    }
    return productId;
}