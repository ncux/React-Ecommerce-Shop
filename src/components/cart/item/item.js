import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { useContext } from "react";
import useStyles from './styles';
import { ProductsContext } from "../../../context/products";

export const Item = ({ item }) => {

    const { id, line_total, media, name, quantity } = item;

    const { removeFromCart, updateCartQuantity } = useContext(ProductsContext);

    const styles = useStyles();

    return (
        <Card>
            <CardMedia image={ media.source } alt={ name } className={styles.media} />
            <CardContent className={styles.cardContent}>
                <Typography variant="h4">{ name }</Typography>
                <Typography variant="h5">{ line_total.formatted_with_symbol }</Typography>
            </CardContent>
           <CardActions className={styles.cartActions}>
               <div className={styles.buttons}>
                   <Button onClick={ () => updateCartQuantity(id, quantity-1) } type="button" siz="small">-</Button>
                   <Typography>{ quantity }</Typography>
                   <Button onClick={ () => updateCartQuantity(id, quantity+1) } type="button" siz="small">+</Button>
               </div>
               <Button onClick={ () => removeFromCart(id) } type="button" color="secondary" variant="contained">
                   Remove
               </Button>
           </CardActions>
        </Card>
    );

};
