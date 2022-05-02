import { NextPage } from 'next';
import { Fragment } from 'react';
import AppHead from '../components/head';

const About: NextPage = () => {
  return (
    <Fragment>
      <AppHead></AppHead>
      <div>
        <h1>Contact us</h1>
      </div>
    </Fragment>
  );
};

export default About;
