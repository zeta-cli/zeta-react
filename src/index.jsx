import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminLayout from './modules/admin/admin.layout';
import WorkbenchLayout from './modules/workbench/workbench.layout';
import PublicLayout from './modules/public/public.layout';
import ErrorLayout from './modules/common/error.layout';
import { PrivateRoute } from './modules/zeta-auth';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/public" component={PublicLayout} />
      <PrivateRoute path="/admin" component={AdminLayout} />
      <PrivateRoute path="/" component={WorkbenchLayout} />
      <Route component={ErrorLayout} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// @types/webpack-env
if (module.hot) {
  module.hot.accept();
}
