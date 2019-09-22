import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  Container,
  ChatHeader,
  UserAvatar,
  UserName,
  ChatBody,
  MessageSent,
  MessageReceived,
  SenderName,
  ReceiverName,
  Message,
  ChatForm,
  Input,
} from './styles';

export default function ActiveChat({ user }) {
  const { id, first_name, last_name } = useSelector(
    state => state.user.profile
  );

  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    function scrollChatToBottom() {
      const element = document.getElementById('chat-body');
      element.scrollTop = element.scrollHeight;
    }

    scrollChatToBottom();
  }, [messages]);

  useEffect(() => {
  async function loadMessages() {
    try {
      const response = await api.get('/messages', {
        params: {
          receiver_id: user.id,
        },
      });

        setMessages(response.data);
      } catch (err) {
        toast.error(err.message);
      }
    }

  useEffect(() => {
    loadMessages();
  }, []); // eslint-disable-line

  useEffect(() => {
    setMessages([]);
    loadMessages();
  }, [user]); // eslint-disable-line

  useEffect(() => {
    const socket = io('http://localhost:3333/', {
      secure: true,
      rejectUnauthorized: false,
      path: '/api/socket.io',
      query: {
        user_id: id,
      },
    });

    socket.on('messageReceived', data => {
      if (data.sender_id === user.id) return setMessages([...messages, data]);
    });

    socket.on('messageSent', data => {
      setMessages([...messages, data]);
    });
  }, [messages]); // eslint-disable-line

  async function handleSubmit() {
    try {
      await api.post('/messages', { content: value, receiver_id: user.id });

      setValue('');
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Container>
      <ChatHeader>
        <UserAvatar
          src={
            user.avatar ? user.avatar.url : process.env.REACT_APP_DEFAULT_AVATAR
          }
        />

        <UserName>
          {user.first_name} {user.last_name}
        </UserName>
      </ChatHeader>

      <ChatBody id="chat-body">
        <div className="inner">
          {messages.length !== 0 &&
            messages.map(message =>
              message.sender_id === id ? (
                <MessageSent key={message.id}>
                  <SenderName>
                    {first_name} {last_name}
                  </SenderName>
                  <Message>{message.content}</Message>
                </MessageSent>
              ) : (
                <MessageReceived key={message.id}>
                  <ReceiverName>
                    {user.first_name} {user.last_name}
                  </ReceiverName>
                  <Message>{message.content}</Message>
                </MessageReceived>
              )
            )}
        </div>
      </ChatBody>

      <ChatForm onSubmit={handleSubmit}>
        <Input
          name="message"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit" />
      </ChatForm>
    </Container>
  );
}
