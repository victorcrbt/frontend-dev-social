import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import api from '~/services/api';

import PostForm from './PostForm';
import Posts from './Posts';

import { Container } from './styles';

const schema = yup.object().shape({
  post: yup.string().required('Você não pode salvar um post em branco.'),
});

const content1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, sapien vel blandit tempus, est erat consequat augue, at bibendum erat purus id ligula. Fusce interdum venenatis tristique. Praesent eget porta quam. Praesent in est quis tellus gravida facilisis. Vivamus rutrum nunc turpis, in tempus justo ultricies id. Sed commodo lacus a nisi faucibus, vitae tincidunt orci porttitor. Donec nec tortor non mauris suscipit tincidunt ut a nunc. Duis posuere laoreet massa iaculis semper. Mauris gravida tempus neque id elementum. Praesent arcu sapien, ornare ut massa vel, vulputate malesuada magna.';

const content2 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, sapien vel blandit tempus, est erat consequat augue, at bibendum erat purus id ligula. Fusce interdum venenatis tristique. Praesent eget porta quam. Praesent in est quis tellus gravida facilisis. Vivamus rutrum nunc turpis, in tempus justo ultricies id. Sed commodo lacus a nisi faucibus, vitae tincidunt orci porttitor. Donec nec tortor non mauris suscipit tincidunt ut a nunc. Duis posuere laoreet massa iaculis semper. Mauris gravida tempus neque id elementum. Praesent arcu sapien, ornare ut massa vel, vulputate malesuada magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, sapien vel blandit tempus, est erat consequat augue, at bibendum erat purus id ligula. Fusce interdum venenatis tristique. Praesent eget porta quam. Praesent in est quis tellus gravida facilisis. Vivamus rutrum nunc turpis, in tempus justo ultricies id. Sed commodo lacus a nisi faucibus, vitae tincidunt orci porttitor. Donec nec tortor non mauris suscipit tincidunt ut a nunc. Duis posuere laoreet massa iaculis semper. Mauris gravida tempus neque id elementum. Praesent arcu sapien, ornare ut massa vel, vulputate malesuada magna.';

const content3 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, sapien vel blandit tempus, est erat consequat augue, at bibendum erat purus id ligula. Fusce interdum venenatis tristique. Praesent eget porta quam. Praesent in est quis tellus gravida facilisis. Vivamus rutrum nunc turpis, in tempus justo ultricies id. Sed commodo lacus a nisi faucibus, vitae tincidunt orci porttitor. Donec nec tortor non mauris suscipit tincidunt ut a nunc. Duis posuere laoreet massa iaculis semper. Mauris gravida tempus neque id elementum. Praesent arcu sapien, ornare ut massa vel, vulputate malesuada magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, sapien vel blandit tempus, est erat consequat augue, at bibendum erat purus id ligula. Fusce interdum venenatis tristique. Praesent eget porta quam. Praesent in est quis tellus gravida facilisis. Vivamus rutrum nunc turpis, in tempus justo ultricies id. Sed commodo lacus a nisi faucibus, vitae tincidunt orci porttitor. Donec nec tortor non mauris suscipit tincidunt ut a nunc. Duis posuere laoreet massa iaculis semper. Mauris gravida tempus neque id elementum. Praesent arcu sapien, ornare ut massa vel, vulputate malesuada magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, sapien vel blandit tempus, est erat consequat augue, at bibendum erat purus id ligula. Fusce interdum venenatis tristique. Praesent eget porta quam. Praesent in est quis tellus gravida facilisis. Vivamus rutrum nunc turpis, in tempus justo ultricies id. Sed commodo lacus a nisi faucibus, vitae tincidunt orci porttitor. Donec nec tortor non mauris suscipit tincidunt ut a nunc. Duis posuere laoreet massa iaculis semper. Mauris gravida tempus neque id elementum. Praesent arcu sapien, ornare ut massa vel, vulputate malesuada magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, sapien vel blandit tempus, est erat consequat augue, at bibendum erat purus id ligula. Fusce interdum venenatis tristique. Praesent eget porta quam. Praesent in est quis tellus gravida facilisis. Vivamus rutrum nunc turpis, in tempus justo ultricies id. Sed commodo lacus a nisi faucibus, vitae tincidunt orci porttitor. Donec nec tortor non mauris suscipit tincidunt ut a nunc. Duis posuere laoreet massa iaculis semper. Mauris gravida tempus neque id elementum. Praesent arcu sapien, ornare ut massa vel, vulputate malesuada magna.';

export default function Home() {
  const [content, setContent] = useState('');
  const [posting, setPosting] = useState(false);
  const [posts, setPosts] = useState([
    { content: content1 },
    { content: content2 },
    { content: content3 },
  ]);

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
        <Posts postInfo={post} key={post.content} />
      ))}
    </Container>
  );
}
