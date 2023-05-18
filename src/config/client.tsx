import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://medex.designercrunch.net/graphql",
  cache: new InMemoryCache(),
});
