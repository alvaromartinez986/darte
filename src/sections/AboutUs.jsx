import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Image from '../assets/amorcito.png';
import TitleIcons from '../components/TitleIcons';
import ButtonMain from '../components/ButtonMain';

const AboutUs = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      mt="100px"
      sx={{ height: '500px', width: '70%', mx: 'auto' }}
    >
      <Box>
        <img src={Image} alt="" className="aboutus" />
      </Box>
      <Stack direction="column">
        <TitleIcons text="Acerca de nosotros" />
        <Typography
          component="div"
          sx={{ width: '600px', px: '50px', fontWeight: '600', py: '15px' }}
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
