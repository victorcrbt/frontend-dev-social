import React, { useState, useEffect } from 'react';
import { MdChat } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';

import AddFriendButton from './AddFriendButton';
import RemoveFriendButton from './RemoveFriendButton';
import RequestReceivedButton from './RequestReceivedButton';
import RequestSentButton from './RequestSentButton';

import {
  Container,
  Left,
  UserAvatar,
  UserInfo,
  UserName,
  Right,
  Controls,
  SendMessageButton,
  FriendCount,
} from './styles';

export default function UserHeader({ user, setUser }) {
  const [friendStatus, setFriendStatus] = useState(user.friend_status);

  useEffect(() => {
    setFriendStatus(user.friend_status);
  }, [user.friend_status]);

  async function handleSendRequest(id) {
    try {
      await api.post(`/users/${id}/friend`);

      const userCopy = user;

      userCopy.friend_status = 'request sent';

      setUser({ ...userCopy });
    } catch (err) {
      toast.error(err.message);
    }
  }

  async function handleCancelRequest(id) {
    try {
      await api.delete(`/users/${id}/unfriend`);

      const userCopy = user;

      userCopy.friend_status = 'not friends';

      setUser({ ...userCopy });
    } catch (err) {
      toast.error(err.message);
    }
  }

  async function handleAcceptRequest(id) {
    try {
      await api.post(`/users/${id}/friend`);

      const userCopy = user;

      userCopy.friend_status = 'friends';

      setUser({ ...userCopy });
    } catch (err) {
      toast.error(err.message);
    }
  }

  async function handleCancelFriendship(id) {
    try {
      await api.delete(`/users/${id}/unfriend`);

      const userCopy = user;

      userCopy.friend_status = 'not friends';

      setUser({ ...userCopy });
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Container>
      <Left>
        <UserAvatar
          src={
            user.avatar ? user.avatar.url : process.env.REACT_APP_DEFAULT_AVATAR
          }
        />

        <UserInfo>
          <UserName>
            {user.first_name} {user.last_name}
          </UserName>
        </UserInfo>
      </Left>

      <Right>
        <Controls>
          {friendStatus === 'not friends' && (
            <AddFriendButton onClick={() => handleSendRequest(user.id)} />
          )}
          {friendStatus === 'request sent' && (
            <RequestSentButton onClick={() => handleCancelRequest(user.id)} />
          )}
          {friendStatus === 'request received' && (
            <RequestReceivedButton
              onClick={() => handleAcceptRequest(user.id)}
            />
          )}
          {friendStatus === 'friends' && (
            <RemoveFriendButton
              onClick={() => handleCancelFriendship(user.id)}
            />
          )}
          <SendMessageButton>
            <MdChat size={16} color="#fff" />
            Enviar mensagem
          </SendMessageButton>
        </Controls>
      </Right>
    </Container>
  );
}

UserHeader.propTypes = {
  user: PropTypes.shape().isRequired,
  setUser: PropTypes.func.isRequired,
};
