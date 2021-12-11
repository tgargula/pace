import {
  GoogleLogin,
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useQuery } from 'react-query';
import { useAuth } from '../context/AuthProvider';

const DEV_URL = 'http://localhost:3333';
const API_URL = DEV_URL || 'https://8301-85-14-87-42.ngrok.io';
const ENDPOINT = `${API_URL}/api/auth/clientID`;

const getClientID = (): Promise<{ google_client_id: string }> =>
  fetch(ENDPOINT).then((res) => res.json());

export const GoogleButton = () => {
  const { data } = useQuery(ENDPOINT, getClientID);
  const { user, setUser } = useAuth();

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    setUser(response as any);
  };

  const logout = () => {
    setUser(null);
  };

  if (!data?.google_client_id) return <div>Loading</div>;
  if (user)
    return (
      <GoogleLogout
        clientId={data.google_client_id}
        buttonText="Logout"
        onLogoutSuccess={logout}
      />
    );
  return (
    <GoogleLogin
      clientId={data.google_client_id}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={true}
      cookiePolicy={'single_host_origin'}
    />
  );
};
