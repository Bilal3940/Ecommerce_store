import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = ({CheckoutToken}) => {
  return (
    <>
    <Typography variant='h6' gutterbottom>Order Summary</Typography>
    <Typography variant='h6'>{CheckoutToken.id}</Typography>
    <List disablePadding>
    </List>
    </>
  )
}

export default Review