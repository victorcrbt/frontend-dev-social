import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

import logo from '~/assets/devsocial@2x.png';

import { Container, Form, Logo, InfoText } from './styles';

export default function RecoveryPass() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Logo src={logo} alt="DevSocial" />

      <InfoText>
        Caso tenha esquecido sua senha, você pode fazer a redefinição da mesma.
        Insira seu e-mail no campo abaixo e enviaremos Instruções para a
        redefinição da senha.
      </InfoText>

      <Form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Digite seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button type="submit">Criar conta</Button>
      </Form>

      <Link to="/">Voltar a tela de login.</Link>
    </Container>
  );
}
