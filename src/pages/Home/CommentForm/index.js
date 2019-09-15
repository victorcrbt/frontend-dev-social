import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container, Input, SubmitButton, CancelButton } from './styles';

export default function PostForm({ postId, comments, setComments }) {
  const [content, setContent] = useState('');
  const [commenting, setCommenting] = useState(false);

  async function handleSubmitComment() {
    try {
      const response = await api.post(`/posts/${postId}/comment`, {
        content,
      });

      setComments([...comments, response.data]);
      setCommenting(false);
      setContent('');
    } catch (err) {
      toast.error(err.message);
    }
  }

  function handleCancelComment() {
    setContent('');
    setCommenting(false);
  }

  return (
    <Container onSubmit={handleSubmitComment}>
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
          <CancelButton type="button" onClick={handleCancelComment}>
            Cancelar
          </CancelButton>
        </>
      )}
    </Container>
  );
}

PostForm.propTypes = {
  postId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setComments: PropTypes.func.isRequired,
};
