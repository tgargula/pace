import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleButton } from '../components/GoogleButton';
import { useAuth } from '../context/AuthProvider';

export const Sign = () => {
  // auth logic moved to Google Button
  // const { user, login, logout } = useAuth();

  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   login();
  //   navigate('/tasks');
  // };

  // const handleLogout = () => {
  //   logout();
  // };

  // const handleRegister = () => {
  //   // TODO Change Mock Register
  //   login();
  //   // Redirect to forms page
  //   navigate('/preferences');
  // };

  return (
    <Container>
      {/* <Heading>Login with Google</Heading> */}

      <GoogleButton />

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

// const GoogleButton = styled.button`
//   padding: 1rem 2rem;
//   display: flex;
//   margin: 1rem;
//   border-radius: 5px;
//   width: 15rem;
//   text-align: center;
//   align-items: center;
//   justify-content: space-between;
// `;

const Button = styled.button`
  background-color: crimson;
  color: white;
`;
