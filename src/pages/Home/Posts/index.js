import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import PostHeader from './PostHeader';
import PostInteractions from './PostInteractions';
import Comment from './Comment';
import CommentForm from '../CommentForm';

import { Container, PostContent, Content, SaveButton } from './styles';

export default function Post({ post, handleDelete }) {
  const profile = useSelector(state => state.user.profile);

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(post.content);
  const [comments, setComments] = useState([]);
  const [commenting, setCommenting] = useState(false);
  const [commentValue, setCommentValue] = useState('');

  useEffect(() => {
    setComments(post.comments);
  }, [post.comments]);

  useEffect(() => {
    function resizeTextArea() {
      const element = document.getElementById(post.id);

      return (element.style.height = `${element.scrollHeight}px`);
    }

    resizeTextArea();
  }, [post.content, post.id]);

  async function handleCommentDelte(id) {
    try {
      await api.delete(`/comments/${id}`);

      const commentsWithoutDeleted = comments;

      const commentIndex = comments.findIndex(comment => comment.id === id);

      commentsWithoutDeleted.splice(commentIndex, 1);

      setComments([...commentsWithoutDeleted]);
      toast.success('Comentário excluído com sucesso!');
    } catch (err) {
      switch (err.response.data.error) {
        case 'You cannot delete another person comment.': {
          toast.error('Você não pode deletar um comentário de outro usuário.');
          break;
        }
        default: {
          toast.error(err.response.data.error);
        }
      }
    }
  }

  async function handlePostEdit(id) {
    try {
      await api.put(`/posts/${id}`, { content: value });

      setEditing(false);
      toast.success('Post editado com sucesso!');
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function handleSubmitComment() {
    try {
      const response = await api.post(`/posts/${post.id}/comment`, {
        content: commentValue,
      });

      setComments([...comments, response.data]);
      setCommenting(false);
      setCommentValue('');
    } catch (err) {
      toast.error(err.message);
    }
  }

  function handleCancelComment() {
    setCommentValue('');
    setCommenting(false);
  }

  return (
    <Container>
      <PostHeader
        profile={profile}
        user={post.user}
        post={post}
        setEditing={setEditing}
        handleDelete={handleDelete}
        handlePostEdit={handlePostEdit}
      />
      <PostContent>
        <Content
          id={post.id}
          className="post-content"
          value={value}
          onChange={e => setValue(e.target.value)}
          disabled={!editing}
        />
        {editing && (
          <SaveButton onClick={() => handlePostEdit(post.id)}>
            Salvar post
          </SaveButton>
        )}
      </PostContent>

      <PostInteractions
        likes={post.likes}
        comments={comments}
        postId={post.id}
      />

      {comments.map(comment => (
        <Comment
          className="comment"
          comment={comment}
          user={comment.user}
          handleCommentDelete={handleCommentDelte}
        />
      ))}
      <CommentForm
        handleSubmit={handleSubmitComment}
        content={commentValue}
        setContent={setCommentValue}
        commenting={commenting}
        setCommenting={setCommenting}
        handleCancel={handleCancelComment}
      />
    </Container>
  );
}
