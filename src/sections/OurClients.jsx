import { Stack, Typography } from '@mui/material';
import React from 'react';
import TitleIcons from '../components/TitleIcons';
import Client1 from '../assets/joy.png';
import Client2 from '../assets/evolucion.png';
import Client3 from '../assets/piaget.png';
import Client4 from '../assets/duqueria.png';
import Client5 from '../assets/dental.png';
import Client6 from '../assets/yoga.png';

const OurClients = () => {
  const clients = [
    { img: Client1, imgSx: { backgroundSize: '90%' } },
    { img: Client2, imgSx: { backgroundSize: '70%' } },
    { img: Client3, imgSx: { backgroundSize: '80%' } },
    { img: Client4, imgSx: { backgroundSize: '90%' } },
    { img: Client5, imgSx: { backgroundSize: '70%' } },
    { img: Client6, imgSx: { backgroundSize: '80%' } }
  ];
  return (
    <Stack direction="column">
      <TitleIcons text="Nuestros Clientes" />
      <Typography
        sx={{ textAlign: 'center', fontWeight: '600' }}
        component="div"
      >
        Estas son algunas de las empresas que confian en nosotros para resaltar
        su marca
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={9} mt="50px">
        {clients.map((client) => (
          <Stack
            sx={{
              borderRadius: '50%',
              border: '1px dotted #8F148F',
              backgroundColor: '#f2f2f2',
              width: 180,
              height: 180,
              backgroundImage: `url(${client.img})`,
              backgroundSize: '50%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              ...client.imgSx
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default OurClients;
