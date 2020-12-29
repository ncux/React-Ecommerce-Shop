//import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./components/404";
import { Products } from "./components/products/products";
import { Cart } from "./components/cart/cart";

export const Routes = () => {

    return useRoutes([
        {
            path: '',
            redirectTo: '/products',
            element: <Products />
        },
        {
            path: '/',
            element: <Products />
        },
        {
            path: 'products',
            element: <Products />
        },
        {
            path: 'cart',
            element: <Cart />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]);

};
