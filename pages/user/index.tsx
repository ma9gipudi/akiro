import { NextPage } from 'next';
import { Fragment } from 'react';
import AppHead from '../../components/head';
import StyledButton from '../../components/styledbutton';
import Company from '../../models/Company';

const UserPage: NextPage = () => {
  async function onCreateHandler() {
    await fetch('/api/saveCompany', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new Company('Moonbase 1')),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <Fragment>
      <AppHead></AppHead>
      <div>
        <StyledButton as="Link" onClick={onCreateHandler} primary>
          Create an Org to get started
        </StyledButton>
      </div>
    </Fragment>
  );
};

export default UserPage;
