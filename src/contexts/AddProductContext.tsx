import React, { createContext, useContext, useState } from "react";
import { AddProduct, IAddProduct } from "../models/Product";

export interface IProdoctContext {
    product: IAddProduct
    setProduct: React.Dispatch<React.SetStateAction<IAddProduct>>
    productRequest: AddProduct
    setProductRequest: React.Dispatch<React.SetStateAction<AddProduct>>
    products: IAddProduct[]
    create: (e: React.FormEvent) => void
    get: (articleNumber: string) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (articleNumber: string) => void
}

export const AddProductContext = createContext<IProdoctContext | null>(null)
export const useAddProductContext = () => {return useContext(AddProductContext)} 

interface ProductProp {
    children: any
}

const AddProductProvider = ({children}: ProductProp) => {
    const baseUrl = 'http://localhost:5000/api/products'
    const product_default: IAddProduct = {articleNumber: "", tag:"", name: "", description: "", category: "", price: 0, rating: 0, imageName: ""}
    const productRequest_default: AddProduct = { name: "", tag:"", description: "", category: "", price: 0, rating: 0, imageName: ""}

    const [product, setProduct] = useState<IAddProduct>(product_default)
    const [productRequest, setProductRequest] = useState<AddProduct>(productRequest_default)
    const [products, setProducts] = useState<IAddProduct[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(baseUrl, {
            method: 'post',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(productRequest)
        })

        if (result.status === 201) {
            setProductRequest(productRequest_default)            
        }
        else
        console.log('error')

    }


    const get = async (articleNumber: string) => {
        const result = await fetch(`${baseUrl}/${articleNumber}` )

        if (result.status === 200)
            setProduct(await result.json())
    }

    const getAll = async () => {
        const result = await fetch(`${baseUrl}` )
        
        if (result.status === 200)
            setProducts(await result.json())
    }

    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if (result.status === 200) 
            setProduct(await result.json())
        
    }
    const remove = async (articleNumber: string) => {
        const result = await fetch(`${baseUrl}/${articleNumber}`, {
            method: 'delete'
        })

        if (result.status === 204) 
            setProduct(product_default)
    }

    return (
        <AddProductContext.Provider value={{product, setProduct, productRequest, setProductRequest, products, create, get, getAll, update, remove}}>
            {children}
        </AddProductContext.Provider>
    )
}
export default AddProductProvider