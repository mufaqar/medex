import '@/styles/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ApolloProvider } from '@apollo/client';
import { client } from '../config/client';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <FloatingWhatsApp
          phoneNumber="00821023208582"
          accountName="MedexWorlWide"
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
      </ApolloProvider>
    </>
  );
}
