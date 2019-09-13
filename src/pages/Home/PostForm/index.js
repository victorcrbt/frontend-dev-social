import React from 'react';

import { NewPost, Input, SubmitButton, CancelButton } from './styles';

export default function PostForm({
  handleSubmit,
  schema,
  content,
  setContent,
  posting,
  setPosting,
  handleCancel,
}) {
  return (
    <NewPost onSubmit={handleSubmit} schema={schema}>
      <Input
        name="post"
        placeholder="Conte algo aos seus amigos..."
        value={content}
        onChange={e => setContent(e.target.value)}
        posting={posting}
        onFocus={() => setPosting(true)}
        onBlur={() => setTimeout(() => !content && setPosting(false), 500)}
      />

      {posting && (
        <>
          <SubmitButton type="submit">Publicar</SubmitButton>
          <CancelButton type="button" onClick={handleCancel}>
            Cancelar
          </CancelButton>
        </>
      )}
    </NewPost>
  );
}
