import { Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TitleIcons from '../components/TitleIcons';
import useMediaQuery from '@mui/material/useMediaQuery';

import Client1 from '../assets/joy.png';
import Client2 from '../assets/evolucion.png';
import Client3 from '../assets/piaget.png';
import Client4 from '../assets/duqueria.png';
import Client5 from '../assets/dental.png';
import Client6 from '../assets/yoga.png';

const OurClients = () => {
  const matches = useMediaQuery('(max-width: 480px)');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clients = [
    { img: Client1, imgSx: { backgroundSize: '90%' } },
    { img: Client2, imgSx: { backgroundSize: '70%' } },
    { img: Client3, imgSx: { backgroundSize: '80%' } },
    { img: Client4, imgSx: { backgroundSize: '90%' } },
    { img: Client5, imgSx: { backgroundSize: '70%' } },
    { img: Client6, imgSx: { backgroundSize: '80%' } }
  ];

  const [clientsToShow, setClientsToShow] = useState(clients);

  useEffect(() => {
    if (matches) {
      setClientsToShow(clients.slice(0, 3));
    } else {
      setClientsToShow(clients);
    }
  }, [matches, clients]);

  return (
    <Stack direction="column" mt={matches ? '40px' : '0'}>
      <TitleIcons text="Nuestros Clientes" />
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: '600',
          fontSize: matches ? '12px' : '16px'
        }}
        component="div"
      >
        Estas son algunas de las empresas que confian en nosotros para resaltar
        su marca
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          gap: '64px',
          '@media (max-width: 480px)': {
            gap: '24px'
          }
        }}
        mt={matches ? '20px' : '50px'}
      >
        {clientsToShow.map((client, index) => (
          <Stack
            key={index}
            sx={{
              borderRadius: '50%',
              border: '1px dotted #8F148F',
              backgroundColor: '#f2f2f2',
              width: matches ? 90 : 180,
              height: matches ? 90 : 180,
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
