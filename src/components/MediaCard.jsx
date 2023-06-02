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
            width: 200,
            height: 200,
            borderRadius: '50%',
            boxShadow: '2px 3px',
            backgroundColor: '#F4E0F9',
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
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
              mt: '20px'
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
