import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

import UserHeader from './UserHeader';

import { Container } from './styles';

export default function User({ match }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUser(id) {
      try {
        const response = await api.get(`/users/${id}`);

        console.tron.log(response.data);

        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    loadUser(match.params.id);
  }, [match, match.params.id]);

  return (
    <Container>
      <UserHeader user={user} setUser={setUser} />
    </Container>
  );
}

User.propTypes = {
  match: PropTypes.shape().isRequired,
};
