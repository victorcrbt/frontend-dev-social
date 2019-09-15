import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import signUpSchema from '~/validators/signUpValidator';

import { signUpRequest } from '~/store/modules/auth/actions';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

import logo from '~/assets/devsocial@2x.png';

import { Container, RegisterForm, Logo } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(e) {
    if (phone === '') setPhone(null);

    dispatch(signUpRequest(firstName, lastName, email, password, phone));
  }

  return (
    <Container>
      <Logo src={logo} alt="DevSocial" />

      <RegisterForm schema={signUpSchema} onSubmit={handleSubmit}>
        <TextInput
          autoFocus
          name="first_name"
          placeholder="Digite seu primeiro nome"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextInput
          name="last_name"
          placeholder="Digite seu sobrenome"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <TextInput
          name="email"
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
          name="password"
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextInput
          name="confirmPassword"
          placeholder="Confirme sua senha"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <Button type="submit">Criar conta</Button>
      </RegisterForm>

      <Link to="/">Já possui conta? Entre agora!</Link>
    </Container>
  );
}
