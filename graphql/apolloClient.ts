import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/cl5vjv8b406u201uk7nihdmlm/master",
  cache: new InMemoryCache(),
});
