import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://wpmedex.designercrunch.net/graphql",
  cache: new InMemoryCache(),
});
