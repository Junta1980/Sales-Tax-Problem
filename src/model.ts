import { Product } from "./Product";

export enum Types {
    OTHER,
    BOOK,
    FOOD,
    MEDICAL
}

export interface Prod {
    name: string,
    price: number,
    type?: Types,
    importax?: boolean
}

export interface BillItem {
    product: Product,
    tax: number,
    quantity: number,
    totalPrice?: number
}
