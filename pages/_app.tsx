import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { Auth0Provider } from '@auth0/auth0-react';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  let origin = '';
  useEffect(() => {
    origin = window.location.origin;
  }, []);
  return (
    <Auth0Provider domain="dev-f2iz9uyx.us.auth0.com" clientId="b0GUxuoH4RtrgcBfzBddpk8dcSml10bL" redirectUri="http://localhost:3000/user">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
}

export default MyApp;
