import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';

import UserHeader from './UserHeader';

import { Container } from './styles';

export default function User({ match }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUser(id) {
      try {
        const response = await api.get(`/users/${id}`);

        setUser(response.data);
      } catch (err) {
        toast.error(err.message);
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
