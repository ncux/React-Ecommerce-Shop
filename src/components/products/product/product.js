import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import classes from './product.module.css'

export const Product = ({ product }) => {

    const { description, image, name, price } = product;

    return (
        <div className={`${classes.flexColumn}`}>
            <img src={ image } alt={ name } style={{ width: '100px', height: 'auto' }} className={``} />
            <div className={`${classes.simpleFlex}`}>
                <h2>{ name }</h2>
                <p>{ price }</p>
            </div>
            <p>{ description }</p>
            <IconButton area-label="Add To Cart">
                <AddShoppingCart />
            </IconButton>
        </div>
    );

};

