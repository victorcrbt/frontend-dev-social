import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';

import phoneMask from '~/util/inputMasks/phoneNumberMask';

import {
  Container,
  ProfileForm,
  Input,
  Separator,
  Title,
  Info,
  SubmitButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [firstName, setFirstName] = useState(profile.first_name || '');
  const [lastName, setLastName] = useState(profile.last_name || '');
  const [email, setEmail] = useState(profile.email || '');
  const [phone, setPhone] = useState(
    profile.phone ? phoneMask(profile.phone) : ''
  );
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  return (
    <Container>
      <ProfileForm onSubmit={handleSubmit}>
        <Input
          name="first_name"
          placeholder="Digite seu nome"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <Input
          name="last_name"
          placeholder="Digite seu sobrenome"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <Input
          name="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          name="phone"
          autoFocus
          autoComplete="off"
          placeholder="Digite seu telefone (opcional)"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          onKeyUp={() => phoneMask(phone, setPhone)}
        />

        <Separator />

        <Title>Alteração de senha</Title>

        <Info>
          Os campos abaixo não são obrigatórios. Preencha apenas caso queira
          alterar sua senha atual.
        </Info>

        <Input
          type="password"
          name="oldPassword"
          placeholder="Digite sua senha atual"
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua nova senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua nova senha"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <SubmitButton type="submit">Salvar perfil</SubmitButton>
      </ProfileForm>
    </Container>
  );
}
