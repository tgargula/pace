import { PreferencesState } from '@hackyeah/types';
import { useNavigate } from 'react-router-dom';
import { StyledNextButton } from '../Preferences';

export const OtherPreference = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log('submitted');
    navigate('/tasks');
  };

  return (
    <StyledNextButton
      color="primary"
      variant="contained"
      onClick={() => onSubmit()}
    >
      Submit
    </StyledNextButton>
  );
};
