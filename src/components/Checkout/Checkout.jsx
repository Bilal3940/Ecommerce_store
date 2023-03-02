import {useState} from 'react'
import product from '../Products/Product/Product'
import {paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from  '@material-ui/core'
import useStyles from './styles';
import AddressFrom from './AddressForm';
import PaymentForm from './PaymentForm';
const steps =['Shipping Address','Payment details' ];
const Checkout = ({cart, products}) => {
  const classes = useStyles();
  const Confirmation =()=>{
    <div>
      confirmation
    </div>
  } 
  const [activestep, setActivestep]= useState(0);
  const Form =()=> activestep===0
  ? <AddressFrom/>:<PaymentForm/>

  return (
    <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
          <paper className={classes.paper}>
              <Typography variant='h4' align='center '>Checkout</Typography>
              <Stepper activeStep={0} className={classes.stepper}>
              {steps.map((step)=>(
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
              </Stepper>
              {activestep===Step.length?<Confirmation/>:<Form/>}
          </paper>
        </main>
    </>
  )
}

export default Checkout