import React from 'react'
import useStyles from './styles'
import logo from '../../../../src/images/Ak.PNG';
import { Card, CardMedia , CardContent, CardActions, Typography, IconButton }  from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'; 
const Product = ({product , onAddToCart}) => {
    const classes = useStyles();
    // console.log(product);
    // return <div>test</div>
  return (
    <>
    <Card className={classes.root} variant="outlined" >
        <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant='h5' gutterBottom>
                {product.name}
                    
                </Typography>
                <Typography variant='h5'>
                    {product.price.formatted_with_code}
                    
                </Typography>
            
        <Typography variant='body2'  dangerouslySetInnerHTML={{__html:product.description}} color='textSecondary'/>
                </div>
        </CardContent>
        <CardActions disableSpacing className='classes.cardActions'>
            <IconButton aria-label='Add to Cart' onClick={()=>onAddToCart(product.id,1)}>
                <AddShoppingCart/>    
            </IconButton>
        </CardActions>
    </Card>
    </>
  )
}

export default Product