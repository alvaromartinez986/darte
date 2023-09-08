import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Product = ({ id, img, name, whatsappUrl, price }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 280,
        height: 380,
        mt: 10,
        border: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{
          alignItems: "center",
          backgroundSize: "90%",
          height: 280,
        }}
        image={img}
        title="green iguana"
        onClick={() => navigate(`/products/${id}`)}
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2} ml={1}>
          <Typography>Precio: ${price.toLocaleString()} </Typography>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              window.location.href =
                "https://wa.me/+573183027621?text=" + whatsappUrl;
            }}
          >
            Comprar
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Product;
