import React from 'react'
import {CardMedia, Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = ({CheckoutToken}) => {
  return (
    <>
    <Typography variant='h6' gutterbottom>Order Summary</Typography>
    
    <List disablePadding>
      {CheckoutToken.line_items.map((product)=>(
        <ListItem style={{padding:'10px 0'}} key={product.name} >
          <img alt={product.image.id} style={{width:'40px', padding:'10px 10px 10px 0'}} src={product.image.url}/>
            <ListItemText  primary={product.name  }  secondary={ `Quantity: ${product.quantity}`}/>
            <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
      <ListItem style={{padding:'10px 0'}}>
          <ListItemText primary="total"/>
          <Typography variant='subtitle1' style={{fontFamily:'900'}}>{CheckoutToken.subtotal.formatted_with_symbol}</Typography>
      </ListItem>
    </List>
    </>
  )
}

export default Review