import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

import logo from '~/assets/devsocial@2x.png';

import { Container, Form, Logo } from './styles';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Logo src={logo} alt="DevSocial" />

      <Form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Digite sua nova senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextInput
          placeholder="Confirme sua senha"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <Button type="submit">Alterar senha</Button>
      </Form>

      <Link to="/">Voltar a tela de login.</Link>
    </Container>
  );
}
