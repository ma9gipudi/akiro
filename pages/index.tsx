import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import LoginButton from '../components/loginButton';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const router = useRouter();

  if (user && isAuthenticated) {
    router.replace('/user');
  }

  const signUpHandler = () => {
    router.replace('/signup');
  };

  return (
    <Box>
      <main className={styles.main}>
        <p className={styles.description}>
          <Button variant="text" sx={{ 'text-transform': 'none' }}
            onClick={signUpHandler}>
            <Typography sx={{ 'font-size': '1.5rem' }}>Sign up</Typography>
          </Button>
          to get started
        </p>
        <LoginButton></LoginButton>
      </main>

      <footer className={styles.footer}></footer>
    </Box>
  );
};

export default Home;
