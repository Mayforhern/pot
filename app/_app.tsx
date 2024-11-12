// /pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Neon Night</title> {/* Set your title here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
