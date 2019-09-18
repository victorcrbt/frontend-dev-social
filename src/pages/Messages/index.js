import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

import ActiveChat from './ActiveChat';

import { Container, Friends, Friend, FriendAvatar, FriendName } from './styles';

export default function Messages() {
  const [friends, setFriends] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    async function loadFriends() {
      try {
        const {
          data: { friend_list },
        } = await api.get('/friends');

        friend_list.map(async friend_id => {
          const response = await api.get(`/users/${friend_id}`);

          setFriends([...friends, response.data]);
        });

        if (friend_list !== null) return setFriends(friend_list);
      } catch (err) {
        toast.error(err.message);
      }
    }

    loadFriends();
  }, []); // eslint-disable-line

  return (
    <Container>
      <Friends>
        {friends &&
          friends.map(friend => (
            <Friend key={friend.id} onClick={() => setActiveChat(friend)}>
              <FriendAvatar src={friend.avatar ? friend.avatar.url : process.env.REACT_APP_DEFAULT_AVATAR} />
              <FriendName>{friend.first_name} {friend.last_name}</FriendName>
            </Friend>
          ))}
      </Friends>

      {activeChat && <ActiveChat user={activeChat} />}
    </Container>
  );
}
