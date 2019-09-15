import React, { useState, useEffect } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdModeEdit, MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  Container,
  CommentHeader,
  CommentInfo,
  UserAvatar,
  UserName,
  PostDate,
  Controls,
  ControlButton,
  CommentContent,
  Content,
  SaveButton,
} from './styles';

export default function Comment({
  comment,
  user,
  handleCommentDelete,
  profile,
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(comment.content);

  useEffect(() => {
    /**
     * Used to adapt the textarea height to the preloaded comment.
     */
    function resizeCommentTextArea() {
      const element = document.getElementById(comment.id);

      return (element.style.height = `${element.scrollHeight}px`);
    }

    resizeCommentTextArea();
  }, [comment.id, value]);

  async function handleCommentEdit() {
    try {
      await api.put(`/comments/${comment.id}`, { content: value });

      toast.success('Comentário editado com sucesso!');
      setEditing(false);
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Container>
      <CommentHeader>
        <CommentInfo>
          <UserAvatar
            src={
              user.avatar
                ? user.avatar.url
                : 'http://localhost:3333/static/avatars/default.png'
            }
            alt="User avatar"
          />

          <div>
            <UserName>
              {user.first_name} {user.last_name}
            </UserName>
            <PostDate>
              {formatRelative(parseISO(comment.createdAt), new Date(), {
                locale: pt,
              })}
            </PostDate>
          </div>
        </CommentInfo>

        {comment.user_id === profile.id && (
          <Controls>
            <ControlButton onClick={() => setEditing(true)}>
              <MdModeEdit size={16} color="rgba(0, 0, 0, 0.5)" />
            </ControlButton>

            <ControlButton onClick={() => handleCommentDelete(comment.id)}>
              <MdClose size={16} color="rgba(0, 0, 0, 0.5)" />
            </ControlButton>
          </Controls>
        )}
      </CommentHeader>

      <CommentContent>
        <Content
          id={comment.id}
          className="post-content"
          value={value}
          onChange={e => setValue(e.target.value)}
          disabled={!editing}
        />
        {editing && (
          <SaveButton onClick={handleCommentEdit}>Salvar post</SaveButton>
        )}
      </CommentContent>
    </Container>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape().isRequired,
  user: PropTypes.shape().isRequired,
  handleCommentDelete: PropTypes.func.isRequired,
  profile: PropTypes.shape().isRequired,
};
