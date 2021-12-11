import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Sign } from './Sign';
export const HomePage = () => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" marginTop={5} gutterBottom>
            Welcome to Pace
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Sign />
        </Grid>
      </Grid>
    </div>
  );
};
