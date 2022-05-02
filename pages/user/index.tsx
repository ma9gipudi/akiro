import { NextPage } from 'next';
import { Fragment } from 'react';
import AppHead from '../../components/head';
import StyledButton from '../../components/styledbutton';
import Link from 'next/link';
import UserWorkflow from '../../components/wizard';
const UserPage: NextPage = () => {
  return (
    <Fragment>
      <AppHead></AppHead>
      <div>
        <StyledButton as="Link" primary>
          Create an Org to get started
        </StyledButton>
      </div>
    </Fragment>
  );
};

export default UserPage;
