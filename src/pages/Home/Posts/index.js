import React, { useState, useEffect } from 'react';
import { MdClose, MdModeEdit } from 'react-icons/md';

import {
  Container,
  PostHeader,
  PostInfo,
  UserAvatar,
  UserName,
  PostDate,
  Controls,
  ControlButton,
  PostContent,
  Content,
  SaveButton,
} from './styles';

export default function Posts({ postInfo: post }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(post.content);

  useEffect(() => {
    function resizeTextArea() {
      const elements = document.getElementById(post.content);

      return (elements.style.height = `${elements.scrollHeight}px`);
    }

    resizeTextArea();
  }, [post.content, value]);

  return (
    <Container>
      <PostHeader>
        <PostInfo>
          <UserAvatar src="http://google.com/google.jpg" alt="User avatar" />
          <div>
            <UserName>Victor Batalha</UserName>
            <PostDate>21h</PostDate>
          </div>
        </PostInfo>

        <Controls>
          <ControlButton onClick={() => setEditing(true)}>
            <MdModeEdit size={16} color="rgba(0, 0, 0, 0.5)" />
          </ControlButton>

          <ControlButton>
            <MdClose size={16} color="rgba(0, 0, 0, 0.5)" />
          </ControlButton>
        </Controls>
      </PostHeader>

      <PostContent>
        <Content
          id={post.content}
          className="post-content"
          value={value}
          onChange={e => setValue(e.target.value)}
          disabled={!editing}
        />
        {editing && <SaveButton>Salvar post</SaveButton>}
      </PostContent>
    </Container>
  );
}
