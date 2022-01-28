import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';


const Products = ({ products }) => {
    return(
        <main style={{marginTop: '7rem'}}>
       <Grid container justify="center" spacing={3} >
          {products.map((product) => (
              <Grid iteam key={product.id} xs={12} sm={6} md={4} lg={3}>
                 <Product product={product} />    
              </Grid>
          ))}
       </Grid>
   </main>
    );
}

export default Products;