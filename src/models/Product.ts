
export interface Product {
    tag: string
    articleNumber: string
    name: string
    description: string
    category: string
    price: number
    oldPrice?: number
    rating: number
    imageName: string
}

//AddProductContext
export interface IAddProduct {
    articleNumber: string
    name: string
    tag: string
    description: string
    category: string
    price: number
    oldPrice?: number
    rating: number
    imageName: string
}
export interface AddProduct{
    name: string
    tag: string
    description: string
    category: string
    price: number
    oldPrice?: number
    rating: number
    imageName: string
}