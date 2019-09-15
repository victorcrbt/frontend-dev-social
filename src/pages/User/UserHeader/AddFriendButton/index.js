import React from 'react';
import { MdPersonAdd } from 'react-icons/md';

import { Container } from './styles';

export default function AddFriendButton({ onClick }) {
  return (
    <Container onClick={onClick}>
      <MdPersonAdd size={16} />
      Adicionar
    </Container>
  );
}
