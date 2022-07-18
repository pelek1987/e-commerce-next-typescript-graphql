import "../styles/globals.css";
import "../styles/utils/selected.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { Layout } from "../components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { CartStateContextProvider } from "../components/Cart/CartContext";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartStateContextProvider>
      <QueryClientProvider client={client}>
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </CartStateContextProvider>
  );
}

export default MyApp;
