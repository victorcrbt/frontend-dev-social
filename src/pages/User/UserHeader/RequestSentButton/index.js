import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { MdBlock } from 'react-icons/md';

import { Container } from './styles';

export default function RequestSentButton({ onClick }) {
  const [buttonText, setButtonText] = useState('Solicitação enviada');
  const [icon, setIcon] = useState(IoIosSend);

  function handleOnMouseOver() {
    setButtonText('Cancelar solicitação');
    setIcon(MdBlock);
  }

  function handleOnMouseOut() {
    setButtonText('Solicitação enviada');
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
