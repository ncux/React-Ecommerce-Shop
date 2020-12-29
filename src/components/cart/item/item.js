import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@material-ui/core";
import useStyles from './styles';

export const Item = ({ item }) => {

    const { line_total, media, name, quantity } = item;

    const styles = useStyles();

    return (
        <Card>
            <CardMedia image={ media.source } alt={ name } className={styles.media} />
            <CardContent className={styles.cardContent}>
                <Typography variant="h4">{ name }</Typography>
                <Typography variant="h5">{ line_total.formatted_with_symbol }</Typography>
            </CardContent>
           <CardActions className={styles.cardActions}>
               <div className={styles.buttons}>
                   <Button type="button" siz="small">-</Button>
                   <Typography>{ quantity }</Typography>
                   <Button type="button" siz="small">+</Button>
               </div>
               <Button type="button" color="secondary" variant="contained">Remove</Button>
           </CardActions>
        </Card>
    );

};
