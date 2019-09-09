import React, { useEffect, useState } from 'react';

import { Container, Input } from './styles';

export default function TextInput({ name, style, disabled, errors, ...rest }) {
  const [err, setErr] = useState(null);

  useEffect(() => {
    setErr(null);
    if (errors !== null && errors !== undefined) {
      errors.map(error => error.path === name && setErr(error.message));
    }
  }, [errors, name]);

  return (
    <Container style={style} error={err} disabled={disabled}>
      <Input name={name} disabled={disabled} error={err} {...rest} />
      <span>{err}</span>
    </Container>
  );
}
