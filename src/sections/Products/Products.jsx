import React, { useState } from "react";
import Product from "./Product";
import { CircularProgress, Stack } from "@mui/material";
import useFetchData from "../../hooks/useFetchData";
import Filter from "./Filter";

const buildFilterfetch = (filter) => {
  return filter ? `[filters][categories][id]=${filter}` : "";
};

const Products = () => {
  const [filterProducts, setFilterProducts] = useState("");
  const { data: products, loading } = useFetchData(
    "/products?populate=*&sort=order&" + buildFilterfetch(filterProducts)
  );

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "start",
      }}
    >
      <Filter
        setFilterProducts={setFilterProducts}
        filterProducts={filterProducts}
      />
      <Stack
        sx={{
          width: "80vh",
          display: "grid",
          gridTemplateColumns: "500px 500px 500px",
        }}
      >
        {loading ? (
          <CircularProgress sx={{ mx: "auto", my: 20, width: "100%" }} />
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
      </Stack>
    </Stack>
  );
};

export default Products;
