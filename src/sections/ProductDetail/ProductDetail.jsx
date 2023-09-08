import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import CustomCarousel from "../../components/CustomCarousel";
const ProductDetail = () => {
  let { id } = useParams();

  const { data: product, loading } = useFetchData(`/products/${id}?populate=*`);

  return (
    <>
      {loading ? (
        <CircularProgress sx={{ mx: "auto", mt: 20, width: "100%" }} />
      ) : (
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            mx: "auto",
            justifyContent: "center",
            width: "100%",
            my: 10,
          }}
        >
          <CustomCarousel
            imgs={[
              product.attributes.img.data.attributes.url,
              product.attributes.img2?.data?.attributes?.url,
            ].filter((x) => x !== undefined)}
            sx={{ width: "25%", px: 5 }}
          />
          <Stack sx={{ width: "20%" }}>
            <Typography variant="h3">{product.attributes.title}</Typography>
            <Typography sx={{ mt: "25px" }}>
              {product.attributes.description}
            </Typography>
            <Typography variant="h4">
              Precio: ${product.attributes.price.toLocaleString()}
            </Typography>
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                window.location.href =
                  "https://wa.me/+573183027621?text=" +
                  product.attributes.whatsappUrl;
              }}
            >
              Comprar
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default ProductDetail;
