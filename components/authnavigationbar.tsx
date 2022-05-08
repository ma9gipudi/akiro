import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import StyledButton from './styledbutton';

const Styles = styled.div`
  .navbar {
    border-bottom: 1px solid rgb(236, 239, 241);
  }
`;

const AuthNavBar = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="/"> Moonbase</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/">
                <Button>Create Company</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default AuthNavBar;
