import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
