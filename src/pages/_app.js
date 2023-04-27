import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ApolloProvider } from "@apollo/client";
import { client } from "../config/client";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </>
  );
}



