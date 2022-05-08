import { Container } from '@mui/material';
import React from 'react';
import CreateCompany from '../../components/createCompanyForm';

const CreateCompanyPage = () => {
  return (
    <React.Fragment>
      <Container>
        <CreateCompany></CreateCompany>
      </Container>
    </React.Fragment>
  );
};

export default CreateCompanyPage;
