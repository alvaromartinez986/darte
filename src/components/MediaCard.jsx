import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { Stack } from '@mui/system';
export default function MediaCard({ img, text, imgSx, sx }) {
  return (
    <Link href="#" sx={{ textDecoration: 'none' }}>
      <Stack>
        <Stack
          sx={{
            width: 180,
            height: 180,
            borderRadius: '50%',
            boxShadow: '2px 3px',
            backgroundColor: '#F4E0F9',
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            '@media (max-width: 480px)': {
              width: 80,
              height: 80
            },
            ...imgSx
          }}
          title="green iguana"
        />
        <Stack>
          <Typography
            gutterBottom
            sx={{
              fontSize: '22px',
              fontWeight: '900',
              fontFamily: 'CareAround',
              textAlign: 'center',
              color: 'black',
              mt: '20px',
              '@media (max-width: 480px)': {
                fontSize: '12px',
                mt: '10px'
              }
            }}
            component="div"
          >
            {text}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
}
