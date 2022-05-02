import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import NavigationBar from "./navigationbar";
const Layout = (props: any) => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
