import { Add } from '@mui/icons-material';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0.5em;
  bottom: 0.5em;
  height: 1.5em;
  width: 1.5em;
  font-size: 42px;
  background-color: #4285f4;
  border-radius: 0.5em;
  border: none;
  cursor: pointer;
  &:hover:active,
  &:active {
    background-color: #0b4fbc;
  }
`;

const AddIcon = styled(Add)`
  && {
    font-size: 42px;
    color: white;
  }
`;

type Props = {
  onClick?: () => void;
};

const AddButton = ({ onClick }: Props) => (
  <Wrapper
    onClick={() => {
      if (onClick) onClick();
    }}
  >
    <AddIcon />
  </Wrapper>
);

export default AddButton;
