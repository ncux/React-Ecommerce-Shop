import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { useContext } from "react";
import { AddShoppingCart } from "@material-ui/icons";
import classes from './product.module.css'
import { ProductsContext } from "../../../context/products";

export const Product = ({ product }) => {

    const { addToCart } = useContext(ProductsContext);

    const { description, id, name, media, price } = product;

    return (
        <div className={`${classes.flexColumn}`}>
            <img src={ media.source } alt={ name } style={{ width: '100px', height: 'auto' }} className={``} />
            <div className={`${classes.simpleFlex}`}>
                <h2>{ name }</h2>
                <p>{ price.formatted_with_symbol }</p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <IconButton area-label="Add To Cart" onClick={ () => addToCart(id, 1) }>
                <AddShoppingCart />
            </IconButton>
        </div>
    );

};

