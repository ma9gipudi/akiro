import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
import Company from '../../models/Company';
const UserPage: NextPage = () => {
  const [companies, setCompanies] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(`${JSON.stringify(user)} ${isAuthenticated}`);
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

  return !isAuthenticated ? (
    <div>Loading..</div>
  ) : (
    <Fragment>
      <Typography>{`Welcome ${user?.email}`} </Typography>
    </Fragment>
  );
};

export default UserPage;
