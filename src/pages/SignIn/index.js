import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

import logo from '~/assets/devsocial@2x.png';

import { Container, Form, Logo } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Logo src={logo} alt="DevSocial" />

      <Form onSubmit={handleSubmit}>
        <TextInput
          autoFocus
          placeholder="Digite seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextInput
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button type="submit">Entrar</Button>
      </Form>

      <Link to="/cadastro">Ainda não possui conta? Crie gratuitamente!</Link>
      <Link to="/recuperar_senha">
        Esqueceu sua senha? Vamos ajudá-lo a recuperar.
      </Link>
    </Container>
  );
}
