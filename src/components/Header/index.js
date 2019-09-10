import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';

import api from '~/services/api';

import logo from '~/assets/devsocial.png';

import {
  Container,
  Content,
  Logo,
  SearchForm,
  SearchInput,
  User,
  UserAvatar,
  UserName,
  Triangle,
  Submenu,
} from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [search, setSearch] = useState('');

  async function handleSubmit() {
    const response = await api.get('/users');

    console.log(response);
  }

  return (
    <Container>
      <Content>
        <Logo src={logo} alt="DevSocial" />

        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            placeholder="Digite o nome do usuário..."
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            icon={<MdSearch size={20} color="#999" />}
          />

          <button type="submit">Pesquisar</button>
        </SearchForm>

        <User>
          <UserAvatar src={profile.avatar.url} alt="Avatar" />

          <UserName>
            {profile.first_name} {profile.last_name}
          </UserName>

          <Triangle className="triangle" />

          <Submenu className="submenu">
            <Link to="/perfil">Perfil</Link>
            <button type="button" onClick={() => dispatch(signOut())}>
              Sair
            </button>
          </Submenu>
        </User>
      </Content>
    </Container>
  );
}
