import React, { useEffect } from 'react';

import api from '~/services/api';

// import { Container } from './styles';

export default function Home() {
  useEffect(() => {
    async function load() {
      try {
        const response = await api.get('/users');

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    load();
  }, []);

  return <h1>Home</h1>;
}
