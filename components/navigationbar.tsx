import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
//     background-color: #222;
  }
`;

const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>m</Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Item><Nav.Link href='/'> Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/About'>About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/Contact'>Contact</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
