import React, { useState } from "react";
import Product from "./Product";
import { CircularProgress, Stack, TextField } from "@mui/material";
import useFetchData from "../../hooks/useFetchData";
import Filter from "./Filter";
import { useQuery } from "../../hooks/useQuery";

const buildFilterfetch = (filter, name) => {
  const category = filter ? `[categories][id]=${filter}&` : "";
  const productName = name ? `[title][$startsWithi]=${name}` : "";

  return `filters${productName || category}`;
};

const Products = () => {
  let query = useQuery();
  const [filterName, setFilterName] = useState();

  const [filterProducts, setFilterProducts] = useState(query.get("idCategory"));
  const { data: products, loading } = useFetchData(
    "/products?populate=*&sort=order&" +
      buildFilterfetch(filterProducts, filterName)
  );

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Filter
        setFilterProducts={setFilterProducts}
        filterProducts={filterProducts}
      />
      <Stack sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
        <TextField
          label="Buscar Productos"
          variant="outlined"
          sx={{ my: "auto", width: "80%", mx: "7%", mt: 10 }}
          onChange={(e) => {
            setFilterProducts();
            setFilterName(e.target.value);
          }}
        />
        <ProductsList products={products} loading={loading} />
      </Stack>
    </Stack>
  );
};

const ProductsList = ({ products, loading }) => (
  <Stack
    sx={{
      width: "80%",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-around",
      gap: "7%",
      px: 10,
      "@media (max-width:500px)": {
        display: "block",
        px: 0,
        mx: "auto",
      },
    }}
  >
    {loading ? (
      <CircularProgress sx={{ mx: "auto", my: 20, width: "100%" }} />
    ) : (
      products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          img={product.attributes.img.data.attributes.url}
          whatsappUrl={product.attributes.whatsappUrl}
          name={product.attributes.title}
          price={product.attributes.price}
        />
      ))
    )}
  </Stack>
);

export default Products;
