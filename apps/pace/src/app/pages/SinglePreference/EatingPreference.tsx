import { BasicDateType, Preference } from '@hackyeah/types';
import { TimePicker } from '@mui/lab';
import { TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  preferenceStateStorage,
  StyledNextButton,
  StyledTimePicker,
  StylePrevButton,
} from '../Preferences';

export const EatingPreference = () => {
  const [breakfastTime, setBreakfastTime] = useState<Date>(new Date());
  const [dinnerTime, setDinnerTime] = useState<Date>(new Date());
  const [supperTime, setSupperTime] = useState<Date>(new Date());
  const navigate = useNavigate();
  useEffect(() => {
    const prefList: any = preferenceStateStorage.data.EatingTimes;
    if (prefList.length > 0) {
      setBreakfastTime(prefList[0].dateStart);
      setDinnerTime(prefList[1].dateStart);
      setSupperTime(prefList[2].dateStart);
    }
  }, []);

  const storeData = () => {
    preferenceStateStorage.data.EatingTimes[0] = {
      name: 'breakfast',
      date: {
        dateStart: breakfastTime,
        isRepeated: true,
        dateEnd: undefined,
        repeatType: 'day',
      },
    };
    preferenceStateStorage.data.EatingTimes[1] = {
      name: 'dinner',
      date: {
        dateStart: dinnerTime,
        dateEnd: undefined,

        isRepeated: true,
        repeatType: 'day',
      },
    };
    preferenceStateStorage.data.EatingTimes[2] = {
      name: 'supper',
      date: {
        dateStart: supperTime,
        dateEnd: undefined,
        isRepeated: true,
        repeatType: 'day',
      },
    };
  };

  const onNext = () => {
    storeData();
    navigate('/OtherPreference');
  };

  const onPrev = () => {
    storeData();
    navigate('/SleepingPreference');
  };

  return (
    <>
      <Typography variant="h4" align="center" marginTop={5} gutterBottom>
        Please, tell us about your eating habits
      </Typography>
      <StyledTimePicker
        label="When do you usually take breakfast?"
        value={breakfastTime}
        onChange={(newValue: any) => {
          setBreakfastTime(newValue);
          storeData();
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <StyledTimePicker
        label="When do you usually take dinner?"
        value={dinnerTime}
        onChange={(newValue: any) => {
          setDinnerTime(newValue);
          storeData();
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <StyledTimePicker
        label="When do you usually take supper?"
        value={supperTime}
        onChange={(newValue: any) => {
          setSupperTime(newValue);
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
