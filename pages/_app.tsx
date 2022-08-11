import "../styles/globals.css";
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo-client";
import { Toaster } from "react-hot-toast";
import { QuickstartProvider } from "./Dashboard/context";

// ... (triple dots) mean there are other things in it
function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    // need to wrap apollo for graphql to work( apollo connect our graphql endpoint)
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
      <QuickstartProvider>

        <Toaster />
        {/* makes whole app scrollable and grey */}
        <div className="h-screen w-screen overflow-y-scroll bg-red-200">

          <Component {...pageProps} />
        </div>
        </QuickstartProvider>

      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
