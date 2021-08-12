import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./components/GetUsers";
//import Form from "./Components/Form";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const shop = "https://tough-one-store.myshopify.com/api/2021-07/graphql.json";
const token = "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";
const token1 = "7545a37426037781068f8066f1190342";

const httpLink = new HttpLink({
  uri: shop,
  headers: {
    'X-Shopify-Storefront-Access-Token': token1
  }
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
       <GetUsers />
    </ApolloProvider>
  );
}

export default App;