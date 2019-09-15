import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import api from '~/services/api';

import PostForm from './PostForm';
import Posts from './Posts';

import { Container } from './styles';

const schema = yup.object().shape({
  post: yup.string().required('Você não pode salvar um post em branco.'),
});

export default function Home() {
  const [content, setContent] = useState('');
  const [posting, setPosting] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await api.get('/posts');

        setPosts(response.data);
      } catch (err) {
        toast.error(err.message);
      }
    }

    loadPosts();
  }, []);

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

  async function handleDelete(id) {
    try {
      await api.delete(`/posts/${id}`);

      const postIndex = posts.findIndex(post => post.id === id);

      const postsWithoutDeleted = posts;
      postsWithoutDeleted.splice(postIndex, 1);

      setPosts([...postsWithoutDeleted]);
      toast.success('Post excluído com sucesso!');
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
      <PostForm
        handleSubmit={handleSubmit}
        schema={schema}
        content={content}
        setContent={setContent}
        posting={posting}
        setPosting={setPosting}
        handleCancel={handleCancel}
      />

      {posts.map(post => (
        <Posts post={post} key={post.id} handleDelete={handleDelete} />
      ))}
    </Container>
  );
}
