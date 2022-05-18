import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LoginButton = (props: any) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return !isAuthenticated ? (
    <Button onClick={() => loginWithRedirect()}>Sign In</Button>
  ) : (
    <div></div>
  );
};

export default LoginButton;
