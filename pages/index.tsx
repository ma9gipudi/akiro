import { useAuth0 } from '@auth0/auth0-react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import LoginButton from '../components/loginButton';
import StyledButton from '../components/styledbutton';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const router = useRouter();

  if (user && isAuthenticated) {
    router.replace('/user');
  }

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <p className={styles.description}>Connect your MetaMask Wallet to get started</p>
        <StyledButton href="/user">Connect</StyledButton>

        <p className={styles.description}>or</p>
        <LoginButton>Sign Up</LoginButton>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
