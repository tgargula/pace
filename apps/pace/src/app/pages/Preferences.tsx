import { PreferencesState } from '@hackyeah/types';
import { Box, Button, Typography } from '@mui/material';
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
  // TODO CHANGE STYLING of buttons
  height: 100;
  display: 'flex';
  justify-content: 'center';
  align-items: 'left';
  right: 0;
  margin-right: 10px;
`;
export const StylePrevButton = styled(Button)`
  height: 100;
  display: 'flex';
  left: 0;
  margin-left: 10px;
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

      <StyledNextButton variant="contained" onClick={() => onNext()}>
        Next
      </StyledNextButton>
    </>
  );
};
