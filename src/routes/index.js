import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import RecoveryPass from '~/pages/RecoveryPass';
import ResetPassword from '~/pages/ResetPassword';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import User from '~/pages/User';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/cadastro" component={SignUp} />
      <Route path="/recuperar_senha" component={RecoveryPass} />
      <Route path="/redefinir_senha/:token" component={ResetPassword} />

      <Route path="/inicio" component={Home} isPrivate />
      <Route path="/perfil" component={Profile} isPrivate />

      <Route path="/usuario/:id" component={User} isPrivate />
    </Switch>
  );
}
