import React from 'react';
import { Stack, Typography } from '@mui/material';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

const TitleIcons = ({ text, sx }) => {
  return (
    <Stack sx={{ mx: 'auto' }} direction="row">
      <IconProducts sx={{ transform: 'rotate(-90deg)' }} />
      <Typography
        sx={{
          fontFamily: 'CareAround',
          fontSize: '55px',
          color: '#8F148F',
          ...sx
        }}
      >
        {text}
      </Typography>
      <IconProducts sx={{ transform: 'rotate(90deg)' }} />
    </Stack>
  );
};

const IconProducts = ({ sx }) => {
  return (
    <SpaOutlinedIcon
      sx={{
        fontSize: '24px',
        fontWeight: 'lighter',
        color: '#8F148F',
        mt: '25px',
        mx: '5px',
        opacity: '0.7',
        ...sx
      }}
    />
  );
};

export default TitleIcons;
