import { Stack, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Stack sx={{ height: '30vh', textAlign: 'center', py: '100px' }}>
      <Typography variant="h1">Oops! Pagina no encontrada....</Typography>
    </Stack>
  );
};

export default ErrorPage;
