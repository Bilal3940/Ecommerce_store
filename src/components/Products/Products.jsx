import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
// const products =[
//   {id:1, name:"shoes",description:'Running Shoes.' ,price:'$13', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBc6Z21ncpWLxBDmf7VdBh291lh4Qsb-jlj61eajD&s' },
//   {id:2, name:'macbook',description:'Apple macbook', price:'$13', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4K5KZGxpo13vI4SxlCJ0zfifA2-rsTwUxarplr_8o&s' },
//   {id:3, name:"shoes",description:'Running Shoes.' ,price:'$13', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBc6Z21ncpWLxBDmf7VdBh291lh4Qsb-jlj61eajD&s' },
//   {id:4, name:'macbook',description:'Apple macbook', price:'$13', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4K5KZGxpo13vI4SxlCJ0zfifA2-rsTwUxarplr_8o&s' },
//   {id:5, name:"shoes",description:'Running Shoes.' ,price:'$13', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBc6Z21ncpWLxBDmf7VdBh291lh4Qsb-jlj61eajD&s' },
//   {id:6, name:'macbook',description:'Apple macbook', price:'$13', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4K5KZGxpo13vI4SxlCJ0zfifA2-rsTwUxarplr_8o&s' },
//   {id:7, name:"shoes",description:'Running Shoes.' ,price:'$13', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBc6Z21ncpWLxBDmf7VdBh291lh4Qsb-jlj61eajD&s' },
//   {id:8, name:'macbook',description:'Apple macbook', price:'$13', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4K5KZGxpo13vI4SxlCJ0zfifA2-rsTwUxarplr_8o&s' },
  
// ]
const Products = ({products, onAddToCart}) => {
  const classes = useStyles();
    return(
  <main className={classes.content}>
    <div className={classes.toolbar}/>
    <Grid container justifyContent='center' spacing={4}>
        {products.map((product)=>(
            <Grid item key ={product.id} xs={12} sm={6} md ={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
            ))}
    </Grid>
  </main>
    ) 
}

export default Products;