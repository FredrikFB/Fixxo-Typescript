
export interface Product {
    articleNumber?: string
    name?: string
    description?: string
    category?: string
    price?: number
    oldPrice?: number
    rating?: number
    imageName?: string
}
export interface IProductContextType {
    products: Product[]
    featured: Product[]
    getProducts: () => void
    getFeatured: () => void
}