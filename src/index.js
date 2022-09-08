import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const client = new ApolloClient({
  uri: "https://galin-test-prod-1.azure-api.net/swapi/",
  //uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query {
        films {
          title
          uri
        }
      }
    `
  })
  .then((result) => console.log(result));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
