import { Container, Typography, Button, Grid } from "@material-ui/core";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/products";
import useStyles from './styles';
import { Item } from "./item/item";

export const Cart = () => {

    const styles = useStyles();

    const { cart } = useContext(ProductsContext);

    const [empty, setEmpty] = useState(cart?.line_items?.length > 0);

    const emptyCart = (
        <Typography variant="subtitle1">
            There are no items in your cart. <br />
            <Link to="products">
                <small className={`${styles.link} hover:underline`}>Add items to cart</small>
            </Link>
        </Typography>
    );

    const fullCart = (
        <>
            <Grid container spacing={3}>
                {
                    cart?.line_items?.length > 0 ? (
                        <>
                            {
                                cart.line_items.map(item => (
                                    <Grid key={item.id} item xs={12} sm={4}>
                                        <Item item={ item } />
                                    </Grid>
                                ))
                            }
                            <div className={styles.cardDetails}>
                                <Typography variant="h4">Subtotal: { cart?.subtotal?.formatted_with_symbol }</Typography>
                                <div>
                                    <Button className={styles.emptyButton} color="secondary" variant="contained" type="button" size="large">
                                        Empty Cart
                                    </Button>
                                    <Button className={styles.checkoutButton} color="primary" variant="contained" type="button" size="large">
                                        Checkout
                                    </Button>
                                </div>
                            </div>

                        </>

                    ) : null
                }

            </Grid>

        </>
    );

    return (
        <Container>
            <div className={styles.toolbar} />
            <Typography variant="h3" className={styles.title}>Your shopping cart</Typography>
            { empty ? emptyCart : fullCart }
        </Container>
    );

};
