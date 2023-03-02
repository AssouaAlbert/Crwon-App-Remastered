import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { Button } from "../button/button.component";

import { PaymentFormContainer, FormContainer } from "./payment.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
        console.log("object 2");
        const response = await fetch('/.netlify/functions/create-payment-intent.js', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ amount: 10000 }),
                }).then((res) => {
                    return res.json();
                });
                console.log(response)
            }
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <div>
                    <CardElement />
                    <Button btnType='button' action={paymentHandler} classname='google-button'>Pay Now</Button>
                </div>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;