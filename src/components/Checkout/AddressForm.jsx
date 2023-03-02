import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import PaymentForm from './PaymentForm';
import {InputLabel, Select, MenuItme, Buttons, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider } from 'react-hook-form';
import FieldInputs from './FieldInputs';
const AddressFrom = () => {
  return (
    <>
    <Typography variant="h6" gutterbottom >Shipping Address</Typography>
    <FormProvider >
      <form onSubmit=''>
          <Grid container spacing={3}>
            <FieldInputs required name='firstname' label='First name' />
            <FieldInputs required name='lastname' label='Last name' />
            <FieldInputs required name='address' label='Addess' />
            <FieldInputs required name='email' label='Email' />
            <FieldInputs required name='city' label='City' />
            <FieldInputs required name='zip' label='Zip / Postal Code' />

          </Grid>
      </form>

    </FormProvider>
    </>
  );
}

export default AddressFrom