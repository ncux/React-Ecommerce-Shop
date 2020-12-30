import { createContext, useEffect, useState } from 'react';
import { commerce } from "../lib/commerce";

export const ProductsContext = createContext();

export const ProductsState = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({  });

    const fetchProducts = async () => {
        const { data } = await commerce?.products?.list();
        setProducts(data);
    };

    const fetchCart = async () => {
        const data = await commerce?.cart?.retrieve();
        setCart(data);
    };

    const addToCart = async (productId, quantity) => {
        const data = await commerce?.cart?.add(productId, quantity);
        setCart(data['cart']);
    };

    const updateCartQuantity = async (productId, quantity) => {
        const data = await commerce?.cart?.update(productId, { quantity });
        setCart(data['cart']);
    };

    const removeFromCart = async (productId) => {
        const data = await commerce?.cart?.remove(productId);
        setCart(data['cart']);
    };

    const emptyCart = async () => {
        const data = await commerce?.cart?.empty();
        setCart(data['cart']);
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <ProductsContext.Provider value={{
            cart,
            products,
            setProducts,
            addToCart,
            fetchProducts,
            removeFromCart,
            updateCartQuantity,
            emptyCart,
        }}>
            { children }
        </ProductsContext.Provider>
    );

};
