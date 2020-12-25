import { createContext, useEffect, useState } from 'react';
import { commerce } from "../lib/commerce";

export const ProductsContext = createContext();

export const ProductsState = ({ children }) => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce?.products?.list();
        console.log(data);
        setProducts(data);
    };

    useEffect(() => fetchProducts(), []);

    return (
        <ProductsContext.Provider value={{
            products,
            setProducts,
            fetchProducts,
        }}>
            { children }
        </ProductsContext.Provider>
    );

};
