import React, { useContext, useState } from "react";
import { createContext } from "react";
import { Product } from "../models/Product";

interface ProductProviderProps {
    children: any
}
export interface IProductContextType {
    product: Product
    products: Product[]
    featured: Product[]
    flashSale: Product[]
    get: (articleNumber?: string ) => void
    getProducts: () => void
    getFeatured: (take?: number) => void
    getFlashSale: (take?: number) => void
}


export const ProductContext = createContext<IProductContextType | null>(null)
export const useProductContext = () => {return useContext(ProductContext)}


const ProductProvider: React.FC<ProductProviderProps> = ({children}) => {


    const baseUrl = 'http://localhost:5000/api/products'
    const product_deafault: Product = {tag: "", articleNumber: "", name: "", description: "", category: "", price: 0, rating: 0, imageName: ""}

    const [product, setProduct] =useState<Product>(product_deafault)
    const [products, setProducts] =useState<Product[]>([])
    const [featured, setFeatured] = useState<Product[]>([])
    const [flashSale, setFlashSale] = useState<Product[]>([]) 

    const get =async (articleNumber?: string) => {
        if(articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts =async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }
    const getFeatured =async (take = 0) => {
        const res = await fetch(baseUrl + `/featured/${take}`)
        setFeatured(await res.json())
    }
    const getFlashSale =async (take: number = 0) => {
        let url = baseUrl

        if(take !== 0)
            url= baseUrl + `/flashsale/${take}`
        const res = await fetch(url)
        setFlashSale(await res.json())
    }

    return <ProductContext.Provider value={{product , products, featured, flashSale, get, getProducts, getFeatured, getFlashSale}}>
        {children}
    </ProductContext.Provider>

}
export default ProductProvider

