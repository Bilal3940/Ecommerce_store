import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Divider } from '@material-ui/core'
import {ELements, CardElementd, ELementsConsumer} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
const PaymentForm = ({previousStep, CheckoutToken}) => {
  return (
    <>
      <h1>PAyment Form</h1>
      <Review CheckoutToken={CheckoutToken} />
    </>
  )
}

export default PaymentForm