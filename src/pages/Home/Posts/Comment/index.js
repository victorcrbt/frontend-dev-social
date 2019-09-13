import React, { useState, useEffect } from 'react';
import { MdModeEdit, MdClose } from 'react-icons/md';

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

export default function Comment({ comment }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(comment.content);

  useEffect(() => {
    function resizeCommentTextArea() {
      const element = document.getElementById(comment.id);

      return (element.style.height = `${element.scrollHeight}px`);
    }

    resizeCommentTextArea();
  }, [comment.id, value]);

  return (
    <Container>
      <CommentHeader>
        <CommentInfo>
          <UserAvatar src="http://google.com/google.jpg" alt="User avatar" />

          <div>
            <UserName>João Carlos</UserName>
            <PostDate>21h</PostDate>
          </div>
        </CommentInfo>

        <Controls>
          <ControlButton onClick={() => setEditing(true)}>
            <MdModeEdit size={16} color="rgba(0, 0, 0, 0.5)" />
          </ControlButton>

          <ControlButton>
            <MdClose size={16} color="rgba(0, 0, 0, 0.5)" />
          </ControlButton>
        </Controls>
      </CommentHeader>

      <CommentContent>
        <Content
          id={comment.id}
          className="post-content"
          value={value}
          onChange={e => setValue(e.target.value)}
          disabled={!editing}
        />
        {editing && <SaveButton>Salvar post</SaveButton>}
      </CommentContent>
    </Container>
  );
}
