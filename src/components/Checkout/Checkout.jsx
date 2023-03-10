import {useState, useEffect} from 'react'
import {Paper,Stepper, Step, StepLabel, Typography} from  '@material-ui/core'
import useStyles from './styles';
import {commerce} from '../../lib/commerce';
import AddressFrom from './AddressForm';
import PaymentForm from './PaymentForm';
const steps =['Shipping Address','Payment details' ];
const Checkout = ({cart,error, Order, OnCaptureCheckout}) => {
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
    },[cart.id])
    const nextStep =()=> setactiveStep((preActiveStep )=>preActiveStep+1);
    const previousStep =()=> setactiveStep((preActiveStep )=>preActiveStep-1);

    const next =(data)=>{
      setShippingData(data);
      console.log(data);
      nextStep();
    }
  const Confirmation =()=>{
    <div>
      confirmation
    </div>
  } 
  const Form =()=> activeStep===0
  ? <AddressFrom  CheckoutToken={CheckoutToken} cart={cart} next={next} />:<PaymentForm OnCaptureCheckout={OnCaptureCheckout} nextStep={nextStep} ShippingData={ShippingData} previousStep={previousStep} CheckoutToken={CheckoutToken} />

  return (
    <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
              <Typography variant='h4' align='center '>Checkout</Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step)=>(
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
              </Stepper>
              {activeStep===Step.length?<Confirmation/>:CheckoutToken&&<Form/>}
          </Paper>
        </main>
    </>
  )
}

export default Checkout