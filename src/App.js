import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { authProtectedRoutes} from './routes/index';
import AppRoute from "./routes/route";
import VerticalLayout from './components/VerticalLayout';
import CartProvider from "./contexts/cart";
const Layout = VerticalLayout;

const shop = process.env.REACT_APP_GRAPHQL_ENDPOINT;


const httpLink = new HttpLink({
  uri: shop,
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_GRAPHQL_TOKEN
  }
});
console.log("token bol ",process.env.REACT_APP_GRAPHQL_TOKEN);
console.log("SHOP BOL  ",process.env.REACT_APP_GRAPHQL_ENDPOINT);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

function App() {
  return (
    <React.Fragment>
      <CartProvider>
      <Router>
      <ApolloProvider client={client}>
       {authProtectedRoutes.map((route, idx) => (
       <AppRoute
        path={route.path}
        layout={Layout}
        component={route.component}
        key={idx}
        //isAuthProtected={true}
        exact
      />
      ))}
    </ApolloProvider>
      </Router>
      </CartProvider>
    </React.Fragment>
    
  );
}

export default App;