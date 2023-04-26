import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://medexworldwide.com/graphql",
  cache: new InMemoryCache(),
});
