import PaymentForm from './PaymentForm';
import { useState, useEffect } from 'react';
import {InputLabel, Select, MenuItem, Buttons, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider } from 'react-hook-form';
import FieldInputs from './FieldInputs';
import { commerce } from '../../lib/commerce';
const AddressFrom = ({cart}) => {
  const [Shippingcountries, setShippingcountries] = useState([])
  const [Shippingcountry, setShippingcountry] = useState('')
  const [Shippingcities, setShippingcities] = useState([])
  const [Shippingcity, setShippingcity] = useState('')
  const [Shippingoptions, setShippingoptions] = useState([])
  const [Shippingoption, setShippingoption] = useState('')
  const [CheckoutToken, setCheckoutToken] = useState('');
  const methods = useForm();
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

  const fetchcountries = async(CheckoutTokenId)=>{
    try {
      const {countries} = await commerce.services.localeListShippingCountries(CheckoutTokenId);
      console.log(CheckoutTokenId);
      console.log(countries);
      setShippingcountries(countries);
    } catch (error) {
      console.log(error);
    }
    }
    useEffect(() => {;  
    fetchcountries(CheckoutToken.id);
    }, [])
    

  return (
    <>
    <Typography variant="h6" gutterbottom >Shipping Address</Typography>
    <FormProvider >
      <form >
          <Grid container spacing={3}>
            <FieldInputs required name='firstname' label='First name' />
            <FieldInputs required name='lastname' label='Last name' />
            <FieldInputs required name='address' label='Addess' />
            <FieldInputs required name='email' label='Email' />
            <FieldInputs required name='city' label='City' />
            <FieldInputs required name='zip' label='Zip / Postal Code' />
            <Grid xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={""} fullWidth onChange={""}>
                <MenuItem key={""} value={""}>Select me</MenuItem>
              </Select>
            </Grid>
            <Grid xs={12} sm={6}>
              <InputLabel>Shipping City</InputLabel>
              <Select value={""} fullWidth onChange={""}>
                <MenuItem key={""} value={""}>Select me</MenuItem>
              </Select>
            </Grid>
            <Grid xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={""} fullWidth onChange={""}>
                <MenuItem key={""} value={""}>Select me</MenuItem>
              </Select>
            </Grid>
          </Grid>
      </form>

    </FormProvider>
    </>
  );
}

export default AddressFrom