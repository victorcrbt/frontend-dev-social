import React from 'react';
import { MdClose } from 'react-icons/md';

import { Container } from './styles';

export default function RemoveFriendButton({ onClick }) {
  return (
    <Container onClick={onClick}>
      <MdClose size={16} />
      Cancelar amizade
    </Container>
  );
}
