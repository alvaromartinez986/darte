import React, { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import MediaCard from '../components/MediaCard';
import TitleIcons from '../components/TitleIcons';
import useMediaQuery from '@mui/material/useMediaQuery';

import Image from '../assets/articulo1.png';
import Image2 from '../assets/articulo2.png';
import Image3 from '../assets/articulo3.png';
import Image4 from '../assets/articulo4.png';
import Image5 from '../assets/articulo5.png';
import Image6 from '../assets/articulo6.png';

const HotProducts = () => {
  const matches = useMediaQuery('(max-width: 480px)');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const products = [
    { title: 'combos', img: Image, imgSx: { backgroundSize: '90%' } },
    { title: 'termos', img: Image2, imgSx: { backgroundSize: '60%' } },
    {
      title: 'vasos',
      img: Image3,
      imgSx: { backgroundSize: '80%', backgroundPosition: '65% 100%' }
    },
    {
      title: 'cuadernos',
      img: Image4,
      imgSx: { backgroundSize: '50%' }
    },
    { title: 'camisas', img: Image5, imgSx: { backgroundSize: '90%' } },
    { title: 'publicidad', img: Image6, imgSx: { backgroundSize: '100%' } }
  ];
  const [productsToShow, setProductsToShow] = useState(products);

  useEffect(() => {
    if (matches) {
      setProductsToShow(products.slice(0, 3));
    } else {
      setProductsToShow(products);
    }
  }, [matches, products]);

  return (
    <Stack sx={{ mt: '50px' }} direction="column">
      <Stack sx={{ mx: 'auto' }} direction="row">
        <Stack direction="column">
          <TitleIcons text="Productos destacados" />
          <Typography
            sx={{
              fontWeight: 600,
              my: '15px',
              width: '40%',
              mx: 'auto',
              '@media (max-width: 480px)': {
                fontSize: '12px',
                width: '60%'
              }
            }}
          >
            ¡Explora nuestras categorías destacadas y descubre los artículos de
            personalizados que necesitas para regalar ese detalle único y
            creativo! Realiza tus compras con nuestro asesor y recibe tus
            productos en la comodidad de tu hogar con D'arte. ¡Déjanos llevar
            tus ideas al siguiente nivel!
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        mt="30px"
        sx={{
          gap: '64px',
          '@media (max-width: 480px)': {
            gap: '24px'
          }
        }}
      >
        {productsToShow.map((product) => (
          <MediaCard
            key={product.title}
            text={product.title}
            sx={{ mx: '50px' }}
            img={product.img}
            imgSx={product.imgSx}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default HotProducts;
