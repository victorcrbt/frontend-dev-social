import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signInRequest } from '~/store/modules/auth/actions';

import signInSchema from '~/validators/signInValidator';

import Form from '~/components/Form';
import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

import logo from '~/assets/devsocial@2x.png';

import { Container, Logo } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    dispatch(signInRequest(email, password, { setPassword }));
  }

  return (
    <Container>
      <Logo src={logo} alt="DevSocial" />

      <Form onSubmit={handleSubmit} schema={signInSchema}>
        <TextInput
          autoFocus
          name="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextInput
          name="password"
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button type="submit">Entrar</Button>
      </Form>

      <Link to="/cadastro">Ainda não possui conta? Crie gratuitamente!</Link>
      <Link to="/recuperar_senha" className="recovery">
        Esqueceu sua senha? Vamos ajudá-lo a recuperar.
      </Link>
    </Container>
  );
}
