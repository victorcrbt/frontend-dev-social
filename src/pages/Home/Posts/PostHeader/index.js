import React from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdModeEdit, MdClose } from 'react-icons/md';

import {
  Container,
  PostInfo,
  UserAvatar,
  UserName,
  PostDate,
  Controls,
  ControlButton,
} from './styles';

export default function PostHeader({ post, user, profile, setEditing, handleDelete }) {
  return (
    <Container>
      <PostInfo>
        <UserAvatar src="http://google.com/google.jpg" alt="User avatar" />
        <div>
          <UserName>
            {user.first_name} {user.last_name}
          </UserName>
          <PostDate>
            {formatRelative(parseISO(post.createdAt), new Date(), {
              locale: pt,
            })}
          </PostDate>
        </div>
      </PostInfo>

      {post.user_id === profile.id && (
        <Controls>
          <ControlButton onClick={() => setEditing(true)}>
            <MdModeEdit size={16} color="rgba(0, 0, 0, 0.5)" />
          </ControlButton>

          <ControlButton onClick={() => handleDelete(post.id)}>
            <MdClose size={16} color="rgba(0, 0, 0, 0.5)" />
          </ControlButton>
        </Controls>
      )}
    </Container>
  );
}
