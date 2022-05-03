import { NextPage } from 'next';
import { Fragment, Key, useEffect, useState } from 'react';
import AppHead from '../../components/head';
import StyledButton from '../../components/styledbutton';
import Company from '../../models/Company';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const UserPage: NextPage = () => {
  const [companies, setCompanies] = useState([]);

  async function onCreateHandler() {
    await fetch('/api/createCompany', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new Company('Moonbase 1')),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    fetch('/api/company/get')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompanies(data);
      })
      .catch((err) => console.log(err));
  }, []);

  let Companies = <span></span>;
  if (companies.length > 0) {
    Companies = (
      <Row xs={1} md={2} className="g-4">
        {companies.map((c: Company) => (
          <Col key={c.id}>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>{c.name}</Card.Title>
                <Card.Text>Company details</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Create another Company</Card.Title>
              <Card.Text></Card.Text>
              <StyledButton onClick={onCreateHandler} primary>
                Go!
              </StyledButton>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }

  return (
    <Fragment>
      <AppHead></AppHead>
      <Container>{Companies}</Container>
    </Fragment>
  );
};

export default UserPage;
