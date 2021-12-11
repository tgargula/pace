import { BasicDateType, Preference } from '@hackyeah/types';
import { TimePicker } from '@mui/lab';
import { TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  preferenceStateStorage,
  StyledNextButton,
  StylePrevButton,
} from '../Preferences';

export const SleepingPreference = () => {
  const [sleepingTime, setSleepingTime] = useState<Date>();
  const [wakingUpTime, setwakingUpTime] = useState<Date>();
  const navigate = useNavigate();
  useEffect(() => {
    setSleepingTime(preferenceStateStorage.data.SleepingTimes?.date.dateStart);
    setwakingUpTime(preferenceStateStorage.data.SleepingTimes?.date.dateEnd);
  }, []);

  const storeData = () => {
    const basicDateType: BasicDateType = {
      dateStart: sleepingTime,
      dateEnd: wakingUpTime,
      isRepeated: false,
      repeatType: 'day',
    };

    const preference: Preference = {
      name: 'sleeping',
      date: basicDateType,
    };

    preferenceStateStorage.data.SleepingTimes = preference;
  };

  const onNext = () => {
    storeData();
    navigate('/EatingPreference');
  };

  const onPrev = () => {
    storeData();
    navigate('/preferences');
  };

  return (
    <>
      <Typography variant="h4" align="center" marginTop={5} gutterBottom>
        Please, tell us about your sleeping habits
      </Typography>
      <TimePicker
        label="When do you usually go to bed?"
        value={sleepingTime}
        onChange={(newValue: any) => {
          setSleepingTime(newValue);
          storeData();
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <TimePicker
        label="When do you usually wake up?"
        value={wakingUpTime}
        onChange={(newValue: any) => {
          setwakingUpTime(newValue);
          storeData();
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <StylePrevButton variant="contained" onClick={() => onPrev()}>
        Prev
      </StylePrevButton>
      <StyledNextButton variant="contained" onClick={() => onNext()}>
        Next
      </StyledNextButton>
    </>
  );
};
