import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import RecoveryPass from '~/pages/RecoveryPass';
import Home from '~/pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/cadastro" component={SignUp} />
      <Route path="/recuperar_senha" component={RecoveryPass} />

      <Route path="/inicio" component={Home} isPrivate />
    </Switch>
  );
}
