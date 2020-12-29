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
        const item = await commerce?.cart?.add(productId, quantity);
        console.log(item);
        setCart(item['cart']);
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
        }}>
            { children }
        </ProductsContext.Provider>
    );

};
