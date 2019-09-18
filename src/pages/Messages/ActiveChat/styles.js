import styled from 'styled-components';

import Form from '~/components/Form';
import TextInput from '~/components/TextInput';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #f3f3f3;

  display: flex;
  flex-direction: column;
`;

export const ChatHeader = styled.div`
  height: 60px;
  padding: 0 10px;

  background: #e5e5e5;
  box-shadow: 3px 0px 5px 2px #444;
  z-index: 10;

  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 15px;
`;

export const UserName = styled.span`
  margin-left: 10px;

  font-weight: bold;
`;

export const ChatBody = styled.div`
  height: 100%;
  overflow: auto;
  padding: 10px;

  .inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
`;

export const MessageSent = styled.div`
  max-width: 80%;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: 5px;
  padding: 10px;

  border-radius: 5px;
  background: #BFE3FF;
`;

export const MessageReceived = styled.div`
  max-width: 80%;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 5px;
  padding: 10px;

  border-radius: 5px;
  background: #D4D4D4;
`;

export const SenderName = styled.span`
  font-weight: bold;
  color: #B53EEC;
`;

export const ReceiverName = styled.span`
  font-weight: bold;
  color: #222;
`;

export const Message = styled.p``;

export const ChatForm = styled(Form)`
  height: 50px;
  padding: 0 10px;
  margin: 0;

  background: #e5e5e5;

  display: flex;
  align-items: center;

  button {
    display: none;
  }
`;

export const Input = styled(TextInput)`
  height: 45px;
  padding: 0 20px;
  margin: 0;

  border-radius: 100px;
`;
