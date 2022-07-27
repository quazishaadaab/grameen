import "../styles/globals.css";
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo-client";
import { Toaster } from "react-hot-toast";

// ... (triple dots) mean there are other things in it
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // need to wrap apollo for graphql to work( apollo connect our graphql endpoint)
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Toaster />
        {/* makes whole app scrollable and grey */}
        <div className="h-screen overflow-y-scroll bg-slate-200">
          <Header />

          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
