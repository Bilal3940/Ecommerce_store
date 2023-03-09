import {useState, useEffect} from 'react'
import product from '../Products/Product/Product'
import {paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from  '@material-ui/core'
import useStyles from './styles';
import {commerce} from '../../lib/commerce';
import AddressFrom from './AddressForm';
import PaymentForm from './PaymentForm';
const steps =['Shipping Address','Payment details' ];
const Checkout = ({cart}) => {
  const classes = useStyles();
  const [activeStep, setactiveStep] = useState(0);
  const [CheckoutToken, setCheckoutToken] = useState(null);
  const [ShippingData, setShippingData] = useState([]);
  useEffect(()=>{
    const generatetoken = async()=>{
      try {
        const token = await commerce.checkout.generateToken(cart.id, {type:'cart'});
        console.log(token.id);
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      } 
    }
      generatetoken()
    },[])
    const nextStep =()=> setactiveStep((preActiveStep )=>preActiveStep+1);
    const previousStep =()=> setactiveStep((preActiveStep )=>preActiveStep-1);

    const next =([data])=>{
      setShippingData([data]);
      nextStep();
    }
  const Confirmation =()=>{
    <div>
      confirmation
    </div>
  } 
  const Form =()=> activeStep===0
  ? <AddressFrom  CheckoutToken={CheckoutToken} cart={cart} next={next} />:<PaymentForm previousStep={previousStep} CheckoutToken={CheckoutToken} />

  return (
    <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
          <paper className={classes.paper}>
              <Typography variant='h4' align='center '>Checkout</Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step)=>(
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
              </Stepper>
              {activeStep===Step.length?<Confirmation/>:CheckoutToken&&<Form/>}
          </paper>
        </main>
    </>
  )
}

export default Checkout