import { PreferencesState } from '@hackyeah/types';
import { TimePicker } from '@mui/lab';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const DefaultPreferencesState: PreferencesState = {
  currentState: 'SleepingStartTime',
  data: {
    EatingTimes: [],
    SleepingTimes: null,
    OtherPreferences: [],
  },
};

export const preferenceStateStorage = DefaultPreferencesState;

export const StyledNextButton = styled(Button)`
  height: 100;
`;
export const StylePrevButton = styled(Button)`
  height: 100;
`;
export const SubmitButton = styled(Button)`
  height: 100;
`;

export const StyledTimePicker = styled(TimePicker)`
  display: 'block';
`;

export const Preferences = () => {
  const navigate = useNavigate();

  const onNext = () => {
    console.log('next');
    navigate('/SleepingPreference');
  };

  return (
    <>
      <Typography variant="h4" align="center" marginTop={5} gutterBottom>
        Please, tell us about your day in the next few minutes
      </Typography>

      {/* Place grid on center */}
      <Grid container alignItems="center" direction="column">
        <Grid item xs={12}>
          <StyledNextButton variant="contained" onClick={() => onNext()}>
            Next
          </StyledNextButton>
        </Grid>
      </Grid>
    </>
  );
};
