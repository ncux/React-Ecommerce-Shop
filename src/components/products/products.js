import { useContext } from "react";
import { Product } from "./product/product";
import classes from './products.module.css'
import useStyles from './styles';
import { ProductsContext } from "../../context/products";

// const products = [
//     { id: 1, name: "sneaker", description: "nice one", price: '$120.99', image: `https://images.unsplash.com/photo-1511317590834-e985451ca5c7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60` },
//     { id: 2, name: "storage-box", description: "box for storage", price: '$1.99', image: `https://images.unsplash.com/photo-1556227996-370b60576b84?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym94ZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60` },
//     { id: 3, name: "phone", description: "good one", price: '$160.99', image: `https://images.unsplash.com/photo-1533228100845-08145b01de14?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60` },
//     { id: 4, name: "watch", description: "it's a watch", price: '$110.99', image: `https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60` },
//     { id: 5, name: "t-shirt", description: "good fit", price: '$22.99', image: `https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60` }
// ];



export const Products = props => {

    const { products } = useContext(ProductsContext);

    const styles = useStyles();

    return (
        <main className="">
            <div className={styles.toolbar} />
            <div className={`${classes.grid2}`}>
                {
                    products.map(product => (
                        <Product key={product.id} product={ product } />
                    ))
                }
            </div>
        </main>
    );

};

