import { NextPage } from 'next';
import { Fragment } from 'react';
import AppHead from '../../components/head';
const UserPage: NextPage = () => {
  return (
    <Fragment>
      <AppHead></AppHead>
      <div>
        <h1> Create an Org to get started</h1>
      </div>
    </Fragment>
  );
};

export default UserPage;
