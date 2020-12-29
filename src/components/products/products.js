import { useContext } from "react";
import { Product } from "./product/product";
import classes from './products.module.css'
import useStyles from './styles';
import { ProductsContext } from "../../context/products";

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

