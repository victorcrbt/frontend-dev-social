import React, { useState, useEffect, useCallback } from 'react';

import { Container } from './styles';

import FormContext from './Context';

export default function Form({ children, schema, onSubmit, ...rest }) {
  const [err, setErr] = useState(null);
  const [fields, setFields] = useState({});

  const handleSetFields = useCallback(
    inputFields => {
      const fieldsData = {};

      if (!Array.isArray(children)) {
        return setFields({ [children.props.name]: children.props.value });
      }

      inputFields.map(child => {
        if (typeof child === 'boolean') return;
        if (!child.props) return;
        if (child.props.type !== 'text') return;

        fieldsData[child.props.name] = child.props.value;
      });

      setFields(fieldsData);
    },
    [children]
  );

  useEffect(() => {
    handleSetFields(children);
  }, [children, handleSetFields, onSubmit]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!schema) {
      return onSubmit();
    }

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
