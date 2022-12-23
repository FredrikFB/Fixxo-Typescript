import {createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart"
import { Product } from "../models/Product";
import { ICartItem } from "../models/ShoppingCartModel";


interface ShoppingCartProviderType {
    children: any
}

export interface ShoppingCartType {
    items: ICartItem[]
    cartQuantity: number
    incrementQuantity: (cartItem: ICartItem) => void
    decrementQuantity: (cartItem: ICartItem) => void
    removeItem: (articleNumber: string) => void

}

export const ShoppingCartContext = createContext<ShoppingCartType | null>(null)
export const useShoppingCartContext = ()=> {return useContext(ShoppingCartContext)}



const ShoppingCartProvider: React.FC<ShoppingCartProviderType> = ({children}) => { //timestamp 1.27.17
    const [items, setItems] = useState<ICartItem[]>([])

    const cartQuantity = items.reduce((quantity, item) => item.quantity + quantity, 0 ) 


    const incrementQuantity = (cartItem: ICartItem) => {
        const {articleNumber, product} = cartItem

        setItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, {articleNumber, product, quantity: 1}]
            }else {
                return items.map(item => {
                    if(item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    const decrementQuantity = (cartItem: ICartItem) => {
        const {articleNumber} = cartItem

        setItems(items => {
            if(items.find(item => item.articleNumber === articleNumber)?.quantity === 1){
                return items.filter(item => item.articleNumber !== articleNumber)
            }else{
                return items.map(item => {
                    if(item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity -1}
                    } else{
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: string) => {
        setItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{items, cartQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>

}
export default ShoppingCartProvider