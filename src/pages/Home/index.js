import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import api from '~/services/api';

import {
  Container,
  NewPost,
  Input,
  SubmitButton,
  CancelButton,
} from './styles';

const schema = yup.object().shape({
  post: yup.string().required('Você não pode salvar um post em branco.'),
});

export default function Home() {
  const [content, setContent] = useState('');
  const [posting, setPosting] = useState(false);
  const [posts, setPosts] = useState([]);

  async function handleSubmit() {
    try {
      const response = await api.post('/posts', { content });

      setContent('');
      setPosting(false);
      setPosts([response.data, ...posts]);
      toast.success('Post criado com sucesso!');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  function handleCancel() {
    setContent('');
    setPosting(false);
  }

  return (
    <Container>
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

      {posts.map(post => (
        <div>{post.content}</div>
      ))}
    </Container>
  );
}
