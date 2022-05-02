import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import StyledButton from '../components/styledbutton';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Welcome to Moonbase </title>
        <meta name="description" content="Moonbase" />
        {/* todo: change icon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Moonbase!</h1>
        <p className={styles.description}>
          Connect your MetaMask Wallet to get started
        </p>
        <StyledButton name="Connect"></StyledButton>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
