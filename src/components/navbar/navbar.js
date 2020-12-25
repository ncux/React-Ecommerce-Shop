import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';

export const Navbar = props => {

    const styles = useStyles();

    return (
        <>
            <AppBar position="fixed" className={styles.appBar} color="inherit" />
            <Toolbar>
                <Typography variant="h6" className={styles.title} color="inherit">
                    <ShoppingCartIcon />
                    Ecommerce Shop
                </Typography>
                <div className={styles.grow} />
                <div className={styles.button}>
                    <IconButton area-label="Show cart items" color="inherit">
                        <Badge badgeContent={5} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </>
    );

};

