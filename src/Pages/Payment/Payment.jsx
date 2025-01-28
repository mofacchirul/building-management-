import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheakoutFrom from './CheakoutFrom';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

    return (
        <div>
             <Elements stripe={stripePromise}>
      <CheakoutFrom></CheakoutFrom>
    </Elements>
        </div>
    );
};

export default Payment;

