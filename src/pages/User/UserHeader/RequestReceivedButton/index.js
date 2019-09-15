import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { MdBlock } from 'react-icons/md';

import { Container } from './styles';

export default function RequestReceivedButton({ onClick }) {
  const [buttonText, setButtonText] = useState('Solicitação recebida');
  const [icon, setIcon] = useState(IoIosSend);

  function handleOnMouseOver() {
    setButtonText('Confirmar amizade');
    setIcon(MdBlock);
  }

  function handleOnMouseOut() {
    setButtonText('Solicitação recebida');
    setIcon(IoIosSend);
  }

  return (
    <Container
      onClick={onClick}
      onMouseOver={handleOnMouseOver}
      onFocus={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
      onBlur={handleOnMouseOut}
    >
      {icon}
      {buttonText}
    </Container>
  );
}
