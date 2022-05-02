import Head from 'next/head';
export const AppHead = () => {
  return (
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
  );
};

export default AppHead;
