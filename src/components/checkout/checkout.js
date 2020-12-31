import { Paper, Stepper, Typography, Step, StepLabel, CircularProgress, Divider, Button } from "@material-ui/core";
import { useContext, useState, useEffect } from "react";
import useStyles from './styles';
import { AddressForm } from "./address-form/address-form";
import { PaymentForm } from "./payment-form/payment-form";
import { commerce } from "../../lib/commerce";
import { ProductsContext } from "../../context/products";

export const Checkout = () => {

    const { cart } = useContext(ProductsContext);

    const styles = useStyles();

    const steps = ['Shipping Address', 'Payment Details'];

    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState('');

    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={ checkoutToken } /> : <PaymentForm />;

    const Confirmation = () => (<div>Done</div>);
    
    const generateCheckoutTokenId = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            setCheckoutToken(token); // the token has a bunch of info
        } catch (e) {
            console.log(e);
        }
    };

    // create checkoutTokenId
    useEffect(() => generateCheckoutTokenId(), [cart]);

    return (
        <>
            <div className={styles.toolbar} />
            <main className={styles.layout}>
                <Paper className={styles.paper}>
                    <Typography align="center" variant="h4">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={styles.stepper}>
                        {
                            steps.map(step => (
                                <Step key={step}>
                                    <StepLabel>{ step }</StepLabel>
                                </Step>
                            ))
                        }
                    </Stepper>
                    { activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form /> }
                </Paper>
            </main>
        </>
    );

};
