import { createContext, useState, useContext} from "react";

export const CartContext = createContext ({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    isInCart: () => {},
    clearCart: () => {},
    totalQuantity: 0,
    total: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] =useState ([])
    console.log (cart)

    const addItem = (item, quantity) => {
        if (!isInCart (item.id)) {
            setCart (prev => [...prev, {...item, quantity}])
        } else {
            console.error ("Este producto ya fue agregado")
        }
    }

    const isInCart = (id) => {
        return cart.some (prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter (prod => prod.id !== id)
        setCart (cartUpdated)
    }   

    const getTotalQuantity = () => {
    let totalQuantity = 0

    cart.forEach(prod => {
        totalQuantity += prod.quantity
    })

    return totalQuantity
    }

    const totalQuantity = getTotalQuantity()    


    const clearCart = () => {
        setCart ([])
    }

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.precio * prod.quantity
        })

        return total
    }

    const total = getTotal()
    
    return (
        <CartContext.Provider value = {{cart, addItem, clearCart, removeItem, isInCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    return useContext(CartContext)
}

export default CartContext