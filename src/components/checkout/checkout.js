import { Paper, Stepper, Typography, Step, StepLabel, CircularProgress, Divider, Button } from "@material-ui/core";
import { useState } from "react";
import useStyles from './styles';
import { AddressForm } from "./address-form/address-form";
import { PaymentForm } from "./payment-form/payment-form";

export const Checkout = () => {

    const styles = useStyles();

    const steps = ['Shipping Address', 'Payment Details'];

    const [activeStep, setActiveStep] = useState(0);

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />;

    const Confirmation = () => (<div>Done</div>);

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
                    { activeStep === steps.length ? <Confirmation /> : <Form /> }
                </Paper>
            </main>
        </>
    );

};
