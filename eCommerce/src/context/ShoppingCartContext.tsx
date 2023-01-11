import React, { createContext, ReactNode, useContext, useState } from 'react'

type ShoppingCartProviderProps = {
   children: ReactNode
}

type ShoppingCartContext = {
    getItemQuantity : (id: number) => number
    increaseCartQuantity : (id: number) => void
    decreaseCartQuantity : (id: number) => void
    removeFromQuantity : (id: number) => void
}

type CartItem = {
    id: number
    quantity: number
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

const useShoppingCart = () => {
  return (
    useContext(ShoppingCartContext)
  )
}


export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id )?.quantity || 0
    }

    return (
        <ShoppingCartContext.Provider value={{getItemQuantity}}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

