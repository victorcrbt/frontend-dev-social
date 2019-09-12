import React, { useContext, useEffect, useState } from 'react';

import { Container, InputWrapper, Input } from './styles';

import FormContext from '../Form/Context';

export default function TextArea({ name, style, disabled, icon, ...rest }) {
  const errors = useContext(FormContext);

  const [err, setErr] = useState(null);

  useEffect(() => {
    setErr(null);
    if (errors !== null && errors !== undefined) {
      errors.map(error => error.path === name && setErr(error.message));
    }
  }, [errors, name]);

  return (
    <Container style={style} error={err} disabled={disabled}>
      <InputWrapper>
        {icon && <label htmlFor={name}>{icon}</label>}

        <Input
          id={name}
          name={name}
          disabled={disabled}
          error={err}
          {...rest}
        />
      </InputWrapper>
      <span>{err}</span>
    </Container>
  );
}
