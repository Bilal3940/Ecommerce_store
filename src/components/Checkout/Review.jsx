import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = ({CheckoutToken}) => {
  return (
    <>
    <Typography variant='h6' gutterbottom>Order Summary</Typography>
    {CheckoutToken} 
    <List disablePadding>

    </List>
    </>
  )
}

export default Review