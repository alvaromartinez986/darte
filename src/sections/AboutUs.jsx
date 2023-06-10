import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Box, Stack, Typography } from '@mui/material';
import Image from '../assets/amorcito.png';
import TitleIcons from '../components/TitleIcons';
import ButtonMain from '../components/ButtonMain';

const AboutUs = () => {
  const matches = useMediaQuery('(max-width: 480px)');

  return (
    <Stack
      direction={matches ? 'column ' : 'row'}
      justifyContent="center"
      mt={matches ? '60px' : '100px'}
      sx={{ height: '500px', width: '100%', mx: 'auto' }}
    >
      <Box sx={{ mx: 'auto' }}>
        <img src={Image} alt="" className="aboutus" />
      </Box>
      <Stack direction="column">
        <TitleIcons text="Acerca de nosotros" />
        <Typography
          component="div"
          sx={{
            width: matches ? '300px' : '600px',
            px: '50px',
            fontWeight: '600',
            fontSize: matches ? '12px' : '16px',
            py: '15px'
          }}
        >
          Soy Jessica Rubio fundadora de D'arte, tu tienda de artículos de
          publicidad y detalles personalizados. Con nosotros descubre la magia
          de los productos personalizados y haz de cada momento algo
          inolvidable. En D'arte, sabemos lo importante que es expresar tu
          estilo único y hacer que tus recuerdos cobren vida. Por eso, hemos
          creado esta tienda especialmente diseñada para ti y para todos
          aquellos que valoran lo auténtico.
        </Typography>
        <ButtonMain sx={{ height: '50px', my: '10px' }}>Tienda</ButtonMain>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
