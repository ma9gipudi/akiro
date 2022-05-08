import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AuthNavBar from './authnavigationbar';
import NavigationBar from './navigationbar';
const Layout = (props: any) => {
  const authenticated = true;
  return (
    <div>
      {!authenticated ? (
        <NavigationBar></NavigationBar>
      ) : (
        <AuthNavBar></AuthNavBar>
      )}
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
