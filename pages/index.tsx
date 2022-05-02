import type { NextPage } from 'next';
import AppHead from '../components/head';
import StyledButton from '../components/styledbutton';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <AppHead></AppHead>
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <p className={styles.description}>
          Connect your MetaMask Wallet to get started
        </p>
        <StyledButton name="Connect" href='/user'></StyledButton>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
