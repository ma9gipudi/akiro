import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (props: any) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return !isAuthenticated ? (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  ) : (
    <div></div>
  );
};

export default LoginButton;
