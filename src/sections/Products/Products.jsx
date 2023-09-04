import React, { useState } from "react";
import Product from "./Product";
import { CircularProgress, Stack } from "@mui/material";
import useFetchData from "../../hooks/useFetchData";
import Filter from "./Filter";
import { useLocation } from "react-router";

export function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const buildFilterfetch = (filter) => {
  return filter ? `[filters][categories][id]=${filter}` : "";
};

const Products = () => {
  let query = useQuery();

  const [filterProducts, setFilterProducts] = useState(query.get("idCategory"));
  const { data: products, loading } = useFetchData(
    "/products?populate=*&sort=order&" + buildFilterfetch(filterProducts)
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
      <Stack
        sx={{
          width: "70%",
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
