import PaymentForm from "./PaymentForm";
import { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Buttons,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import FieldInputs from "./FieldInputs";
import { cart } from "../cart/Cart";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";

const AddressFrom = ({ CheckoutToken,next }) => {
  const [Shippingcountries, setShippingcountries] = useState([]);
  const [Shippingcountry, setShippingcountry] = useState("");
  const [Shippingcities, setShippingcities] = useState([]);
  const [Shippingcity, setShippingcity] = useState("");
  const [Shippingoptions, setShippingoptions] = useState([]);
  const [Shippingoption, setShippingoption] = useState("");

  const methods = useForm();
  const classes = useStyles();

  // const countries = Object.entries(Shippingcountries).map(([code, name])=>({id:code, label:name}))
  // console.log(countries);

  const fetchcountries = async (CheckoutTokenId) => {
    const { countries } = await commerce.services.localeListCountries(
      CheckoutTokenId
    );
    setShippingcountries(countries);
    setShippingcountry(Object.keys(countries)[0]);
    console.log(countries);
  };
  useEffect(() => {
    fetchcountries(CheckoutToken.id);
  }, []);
  return (
    <>
      <Typography variant="h6" gutterbottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) =>next([data]))}>
          <Grid container spacing={3}>
            <FieldInputs  required name="firstname" label="First name" />
            <FieldInputs required name="lastname" label="Last name" />
            <FieldInputs required name="address" label="Addess" />
            <FieldInputs required name="email" label="Email" />
            <FieldInputs required name="city" label="City" />
            <FieldInputs required name="Province" label="Province" />
            <FieldInputs required name="country" label="Country" />
            <FieldInputs required name="zip" label="Zip" />
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
