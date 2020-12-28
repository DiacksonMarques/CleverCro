import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Basket from './pages/Basket';
import Service from './pages/Service/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/basket" component={Basket} />
      <Route path="/service" component={Service} />
    </Switch>
  );
}
