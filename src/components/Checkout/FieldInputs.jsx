import React from 'react'
import {Grid, TextField} from "@material-ui/core"
import { useForm, Controller } from 'react-hook-form'
const FieldInputs = ({name, label, required }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  return (

    <Grid item xs={12} sm={6}>
    <Controller control={control}
      name={name}
      render={({ field }) => <TextField fullWidth label={label} required />}
    />
  </Grid>
  )
}

export default FieldInputs