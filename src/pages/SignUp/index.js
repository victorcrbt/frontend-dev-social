import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

import logo from '~/assets/devsocial@2x.png';

import { Container, Form, Logo } from './styles';

export default function SignIn() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
          autoFocus
          placeholder="Digite seu primeiro nome"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextInput
          placeholder="Digite seu sobrenome"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <TextInput
          placeholder="Digite seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextInput
          placeholder="Digite seu telefone (opcional)"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <TextInput
          placeholder="Digite sua senha"
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

        <Button type="submit">Criar conta</Button>
      </Form>

      <Link to="/">Já possui conta? Entre agora!</Link>
    </Container>
  );
}
