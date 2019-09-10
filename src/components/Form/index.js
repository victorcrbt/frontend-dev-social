import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import FormContext from './Context';

export default function Form({ children, schema, onSubmit, ...rest }) {
  const [err, setErr] = useState(null);
  const [fields, setFields] = useState({});

  function handleSetFields(inputFields) {
    const fieldsData = {};

    inputFields.map(child => {
      if (child.props.type === 'submit') return;

      fieldsData[child.props.name] = child.props.value;
    });

    setFields(fieldsData);
  }

  useEffect(() => {
    handleSetFields(children);
  }, [children, onSubmit]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await schema.validate(fields, { abortEarly: false });
      setErr(null);

      onSubmit();
    } catch (error) {
      setErr(error.inner);
    }
  }

  return (
    <Container onSubmit={e => handleSubmit(e)} {...rest}>
      <FormContext.Provider value={err}>{children}</FormContext.Provider>
    </Container>
  );
}
