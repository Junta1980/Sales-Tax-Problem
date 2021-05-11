import { CartProduct } from "./cartproducts";
import { Product } from "./Product";

export class Cart{
    private _items: CartProduct[] = [];


    addTochart (product: Product, quantity: number = 1): this{
        this._items.push( new CartProduct(product ,quantity)); 
        return this     
    }

    getItmes(){
        return this._items
    }
}
