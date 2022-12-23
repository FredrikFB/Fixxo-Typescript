import { Product } from "./Product"

export interface ICartItem {
    articleNumber: string
    product: Product
    quantity: number 
}