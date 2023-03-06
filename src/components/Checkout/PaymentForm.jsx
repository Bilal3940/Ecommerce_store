import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
const PaymentForm = ({previousStep}) => {
  return (
    <div>
      <h1>PAyment Form</h1>
      <Button onClick={previousStep} >Pervious Step</Button>
    </div>
  )
}

export default PaymentForm