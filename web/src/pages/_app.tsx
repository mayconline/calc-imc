import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IMCProvider } from '../context/IMCContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IMCProvider>
      <Component {...pageProps} />
    </IMCProvider>
  );
}
