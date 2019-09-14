import React from 'react';

import { Container, Input, SubmitButton, CancelButton } from './styles';

export default function PostForm({
  handleSubmit,
  content,
  setContent,
  commenting,
  setCommenting,
  handleCancel,
}) {
  return (
    <Container onSubmit={handleSubmit}>
      <Input
        name="comment"
        placeholder="Conte algo aos seus amigos..."
        value={content}
        onChange={e => setContent(e.target.value)}
        commenting={commenting}
        onFocus={() => setCommenting(true)}
        onBlur={() => setTimeout(() => !content && setCommenting(false), 500)}
      />

      {commenting && (
        <>
          <SubmitButton type="submit">Publicar</SubmitButton>
          <CancelButton type="button" onClick={handleCancel}>
            Cancelar
          </CancelButton>
        </>
      )}
    </Container>
  );
}
