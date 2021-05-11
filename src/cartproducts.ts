import { Product } from "./Product";

export class CartProduct {

    private _product: Product;
    private _quantity: number;

    constructor(product: Product, quantity: number){
        this._product = product;
        this._quantity = quantity;
    }

    getProduct(): Product {
        return this._product
    }

    getQuantity(): number {
        return this._quantity
    }



}