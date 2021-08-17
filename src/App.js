import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { onError } from "@apollo/client/link/error";
import Products from "./pages/Product/index";
import { authProtectedRoutes, publicRoutes } from './routes/index';
import AppRoute from "./routes/route";
import VerticalLayout from './components/VerticalLayout';
import CartProvider from "./contexts/cart";
const Layout = VerticalLayout;

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