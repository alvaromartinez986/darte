import React, { useEffect, useState } from "react";
import Product from "./Product";
import { CircularProgress, Grid } from "@mui/material";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
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
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, md: 4 }}
      sx={{ ml: "auto !important" }}
    >
      {products.length === 0 ? (
        <CircularProgress />
      ) : (
        products.map((product) => (
          <Product
            key={product.attributes.title}
            img={product.attributes.img.data.attributes.url}
            whatsappUrl={product.attributes.whatsappUrl}
            name={product.attributes.title}
            price={product.attributes.price}
          />
        ))
      )}
    </Grid>
  );
};

export default Products;
