import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack, Grid } from "@mui/material";

const Product = ({ img, name, whatsappUrl, price }) => {
  return (
    <Grid item xs={4} md={2} sx={{ mx: 15 }}>
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
            backgroundSize: "170px 200px",
            height: 220,
          }}
          image={img}
          title="green iguana"
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
    </Grid>
  );
};

export default Product;
