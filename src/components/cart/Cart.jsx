import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles';
import Cartitem from './cartitem/Cartitem';
import { Link } from 'react-router-dom';
const Cart = ({cart, Emptycart, removeitem, products , handleUpdateCartQnt}) => {
    const classes = useStyles();
    const isEmpty = !cart.line_items?.length;

    const EmptyCart =()=>(
        <Typography variant='subtitle1' >You have no items in the cart</Typography>
        );
    const FilledCart=()=>(
        <>
        <Grid container spacing={3}>
        {cart.line_items.map((item)=>(
            <Grid item xs={12} sm={4} key = {item.id} >
                <Cartitem item={item} Emptycart ={Emptycart} removeitem ={removeitem} handleUpdateCartQnt={handleUpdateCartQnt}/>
            </Grid>
        ))}

        </Grid>
        <div className={classes.CartDetails}>
            <Typography variant='h5'>
                subtotal:{cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={()=>Emptycart()} >Empty Cart</Button>
                <Button component={Link} to= '/checkout' className={classes.checkoutButton}   size='large' type='button' variant='contained' color='primary'>Checkout</Button>

            </div>
        </div>
        </>
    );
    if(!cart.line_items)
    return  '...loading'; 
  return (
    <Container maxWidth = "md">
        <div className={classes.toolbar}/>
        <Typography className={classes.title} varint="h5" gutterBottom>Your Shopping Cart</Typography>
        {isEmpty? <EmptyCart/>:<FilledCart/>}
    </Container>
  )
}

export default Cart