import { useState } from "react";
import {useSelector} from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";



import { Button } from "../button/button.component";

import { PaymentFormContainer, FormContainer } from "./payment.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
        const response = await fetch('/.netlify/functions/create-payment-intent.js', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ amount: 10000 }),
                }).then((res) => {return res.json();});
                const  {paymentIntent:{client_secret} }= response;
                const paymentResult = await stripe.confirmCardPayment(client_secret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_name:{
                            name: 'Albert Berto'}
                    }
                })
                if(paymentResult.error){
                    alert(paymentResult.error)
                }
                else {
                    if(paymentResult.paymentIntent.status === 'succeeded') alert("Payment successful");
                }


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