import React, { useContext, useState } from "react";
import { createContext } from "react";
import { IProductContextType } from "../models/Product";

export const ProductContext = createContext<IProductContextType | any>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}
export interface Props {
    children: any
}

export const ProductProvider: React.FC<Props> = ({children}) => {
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [products, setProducts] =useState([])
    const [featured, setFeatured] = useState([])


    const getProducts =async () => {
        let res = await fetch(url)
        setProducts(await res.json())
    }
    const getFeatured =async (take = 0) => {
        let res = await fetch(url + `?take=${take}`)
        setFeatured(await res.json())
    }

    return <ProductContext.Provider value={{products, featured, getProducts, getFeatured}}>
        {children}
    </ProductContext.Provider>

}

