import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer } from '../components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col h-screen'>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
