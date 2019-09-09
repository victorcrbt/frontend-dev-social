import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

import logo from '~/assets/devsocial@2x.png';

import { Container, Form, Logo } from './styles';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Formato de e-mail inválido.')
    .required('O e-mail é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors(null);

    try {
      await schema.validate({ email, password }, { abortEarly: false });

      dispatch(signInRequest(email, password, { setPassword }));
    } catch (err) {
      setErrors(err.inner);
    }
  }

  return (
    <Container>
      <Logo src={logo} alt="DevSocial" />

      <Form onSubmit={handleSubmit}>
        <TextInput
          autoFocus
          name="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          errors={errors}
        />
        <TextInput
          name="password"
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          errors={errors}
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
