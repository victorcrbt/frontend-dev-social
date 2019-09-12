import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';

import api from '~/services/api';
import history from '~/services/history';

import logo from '~/assets/devsocial.png';

import {
  Container,
  Content,
  Logo,
  Right,
  SearchForm,
  SearchInput,
  ResultList,
  ResultItem,
  ResultImage,
  User,
  UserAvatar,
  UserName,
  Triangle,
  Submenu,
} from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [user, setUser] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (user === '') return setSearchResults([]);

    async function searchUser() {
      const response = await api.get('/users', {
        params: {
          user,
        },
      });

      setSearchResults(response.data);
    }

    searchUser();
  }, [user]);

  return (
    <Container>
      <Content>
        <Link to="/inicio">
          <Logo src={logo} alt="DevSocial" />
        </Link>

        <Right>
          <SearchForm>
            <SearchInput
              autoComplete="off"
              placeholder="Digite o nome do usuário..."
              name="search"
              value={user}
              onChange={e => setUser(e.target.value)}
              onBlur={() => setTimeout(() => setSearchResults([]), 500)}
              icon={<MdSearch size={20} color="#999" />}
            />

            {searchResults.length > 0 && (
              <ResultList>
                {searchResults.map(result => (
                  <ResultItem
                    key={result.id}
                    onClick={() => history.push(`/usuario/${result.id}`)}
                  >
                    <ResultImage
                      src={
                        result.avatar
                          ? result.avatar.url
                          : 'http://localhost:3333/static/avatars/default.png'
                      }
                      alt="User avatar"
                    />
                    {result.first_name}
                    {` `}
                    {result.last_name}
                  </ResultItem>
                ))}
              </ResultList>
            )}

            <button type="submit">Pesquisar</button>
          </SearchForm>

          <User>
            <UserAvatar
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'http://localhost:3333/static/avatars/default.png'
              }
              alt="Avatar"
            />

            <UserName>
              {profile.first_name} {profile.last_name}
            </UserName>

            <Triangle className="triangle" />

            <Submenu className="submenu">
              <Link to="/inicio">Inicio</Link>
              <Link to="/perfil">Perfil</Link>
              <button type="button" onClick={() => dispatch(signOut())}>
                Sair
              </button>
            </Submenu>
          </User>
        </Right>
      </Content>
    </Container>
  );
}
