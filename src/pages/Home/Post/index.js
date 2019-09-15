import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

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

  useEffect(() => {
    setComments(post.comments);
  }, [post.comments]);

  useEffect(() => {
    /**
     * Used to adapt the textarea height to the preloaded post.
     */
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
      toast.error(err.message);
    }
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
        profile={profile}
      />

      {comments.map(comment => (
        <Comment
          key={comment.id}
          className="comment"
          comment={comment}
          user={comment.user}
          handleCommentDelete={handleCommentDelte}
          profile={profile}
        />
      ))}

      <CommentForm
        postId={post.id}
        comments={comments}
        setComments={setComments}
      />
    </Container>
  );
}

Post.propTypes = {
  post: PropTypes.shape().isRequired,
  handleDelete: PropTypes.func.isRequired,
};
