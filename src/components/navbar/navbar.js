import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import useStyles from './styles';
import { ProductsContext } from "../../context/products";

export const Navbar = props => {

    const styles = useStyles();

    const location = useLocation();

    const { cart } = useContext(ProductsContext);

    return (
        <>
            <AppBar position="fixed" className={styles.appBar} color="inherit" />
            <Toolbar>
                <Typography component={ Link } to="products" variant="h6" className={styles.title} color="inherit">
                    <ShoppingCartIcon />
                    Ecommerce Shop
                </Typography>
                <div className={styles.grow} />
                <div className={styles.button}>
                    {
                        location.pathname === `/` || location.pathname?.includes('products') ? (
                            <IconButton component={ Link } to="cart" area-label="Show cart items" color="inherit">
                                <Badge badgeContent={ cart.total_items } color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        ) : null
                    }
                </div>
            </Toolbar>
        </>
    );

};

