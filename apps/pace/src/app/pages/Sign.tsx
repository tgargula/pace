import styled from 'styled-components';
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

export const Sign = () => {
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Container>
      {/* <Heading>Login with Google</Heading> */}
      {user ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <GoogleButton onClick={handleLogin}>Sign in with Google</GoogleButton>
      )}
      <Link to="/private">/private</Link>
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
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: crimson;
  color: white;
`;
