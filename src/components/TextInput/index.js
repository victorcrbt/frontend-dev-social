import React from 'react';

import { Container, Input } from './styles';

export default function TextInput({ name, style, disabled, ...rest }) {
  return (
    <Container style={style} disabled={disabled}>
      <Input name={name} disabled={disabled} {...rest} />
    </Container>
  );
}
