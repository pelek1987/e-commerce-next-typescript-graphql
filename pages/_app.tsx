import "../styles/globals.css";
import "../styles/utils/selected.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { Layout } from "../components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { CartStateContextProvider } from "../components/Cart/CartContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../graphql/apolloClient";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CartStateContextProvider>
        <QueryClientProvider client={client}>
          <Layout>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </CartStateContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
