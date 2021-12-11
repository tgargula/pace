import styled from 'styled-components';
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

export const Sign = () => {
  const { user, login, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/tasks');
  };

  const handleLogout = () => {
    logout();
  };

  const handleRegister = () => {
    // TODO Change Mock Register
    login();
    // Redirect to forms page
    navigate('/preferences');
  };

  return (
    <Container>
      {/* <Heading>Login with Google</Heading> */}
      {user ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <>
          <GoogleButton onClick={handleLogin}>Sign in with Google</GoogleButton>
          <GoogleButton onClick={handleRegister}>
            Register With Google
          </GoogleButton>
        </>
      )}
      {/* <Link to="/private">/private</Link>
      <Link to="/tasks">/tasks</Link> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form``;
const Heading = styled.h1``;

const GoogleButton = styled.button`
  padding: 1rem 2rem;
  display: flex;
  margin: 1rem;
  border-radius: 5px;
  width: 15rem;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: crimson;
  color: white;
`;
