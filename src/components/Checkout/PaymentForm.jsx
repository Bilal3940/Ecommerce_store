import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Divider } from '@material-ui/core'
import {Elements, ELementsConsumer, ElementsConsumer, CardElement} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import { PaymentElement } from '@stripe/react-stripe-js';
import { AddAlert } from '@material-ui/icons';
const PaymentForm = ({previousStep, CheckoutToken, ShippingData, OnCaptureCheckout, nextStep}) => {

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY,true);
const handleSubmit =async(event, elements, stripe)=>{
  event.preventDefault()
  if(!stripe || !elements) return;
  const cardElement = elements.getElement(CardElement);
  const {error, paymentMethod} = await stripe.createPaymentMethod({type:'card', card:cardElement});
  if(error){
  alert(error);
  }
  else{
    const orderdata ={
      line_items:CheckoutToken.line_items,
      customer :{
        firstname:ShippingData.firstname, 
        lastname:ShippingData.lastname,
        email:ShippingData.email},
      shipping:{name:'Domestic',
       address:ShippingData.address, 
       town:ShippingData.city, province:ShippingData.province,
        country:ShippingData.country,
        postal_code:ShippingData.zip},
      payment:{
        gateway:'stripe',
        stripe:{
          payment_method_id:paymentMethod.id
        }
      }


    }
    OnCaptureCheckout(CheckoutToken.Id, orderdata);
    nextStep();
  }

}
return (
    <>
      
      <Review CheckoutToken={CheckoutToken} />  
      <Divider/>
      <Typography variant='h6' gutterBottom style={{margin:'20px 0'}} >Payment method </Typography>
      <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({elements, stripe})=>(
          <form onSubmit={(e)=> handleSubmit(e,elements, stripe)}>
            <CardElement/>
            <br/> <br/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Button variant='outlined' onClick={previousStep}>Back</Button>
                <Button variant='contained' type='submit' disabled={!stripe} color='primary'>proceed to payment ({CheckoutToken.subtotal.formatted_with_symbol})</Button>
            </div>
          </form>
)}
          </ElementsConsumer>
      </Elements>
    </>
  )
}

export default PaymentForm