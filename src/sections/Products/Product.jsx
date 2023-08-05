import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

const Product = ({ img, name, description, price }) => {
  return (
    <Card sx={{ width: 300, mx: 10, mt: 10, border: 'none' }}>
      <CardMedia
        sx={{
          alignItems: 'center',
          backgroundSize: '170px 200px',
          height: 220
        }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
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
                "https://wa.me/+573183027621?text=I'm%20interested%20in%20your%20car%20for%20sale";
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
