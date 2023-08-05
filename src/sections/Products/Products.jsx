import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Grid } from '@mui/material';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + '/products?populate=*',
          {
            headers: {
              Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN
            }
          }
        );
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container sx={{ ml: 20 }}>
      {products.map((product, index) => (
        <Product
          key={index}
          img={
            process.env.REACT_APP_UPLOAD_URL +
            product.attributes.img.data.attributes.url
          }
          name={product.attributes.title}
          price={product.attributes.price}
        />
      ))}
    </Grid>
  );
};

export default Products;
