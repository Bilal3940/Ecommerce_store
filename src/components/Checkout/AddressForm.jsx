import {
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import FieldInputs from "./FieldInputs";
import { Link } from "react-router-dom";
const AddressFrom = ({next }) => {

  const methods = useForm();
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" gutterbottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) =>next(data))}>
          <Grid container spacing={3}>
            <FieldInputs  name="firstname" label="First name" />
            <FieldInputs name="lastname" label="Last name" />
            <FieldInputs name="address" label="Addess" />
            <FieldInputs name="email" label="Email" />
            <FieldInputs name="city" label="City" />
            <FieldInputs name="province" label="Province" />
            <FieldInputs name="country" label="Country" />
            <FieldInputs name="zip" label="Zip" />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className={classes.emptyButton} variant="outlined">
              <Link style={{textDecoration:'none', color:'#fff'}} to="/cart">Back to Cart</Link>
            </button>
            <button className={classes.emptyButton} type="Submit" variant="outlined">Next</button>
          </div>
        </form>
       
      </FormProvider>
    </>
  );
};

export default AddressFrom;
