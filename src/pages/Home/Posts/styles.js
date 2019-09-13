import styled from 'styled-components';

import TextArea from '~/components/TextArea';
import Button from '~/components/Button';

export const Container = styled.div`
  margin-bottom: 15px;
  padding: 10px;

  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);

  display: flex;
  flex-direction: column;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostInfo = styled.div`
  display: flex;

  div {
    margin-left: 5px;

    display: flex;
    flex-direction: column;
  }
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  background: rgba(0, 0, 0, 0.2);
`;

export const UserName = styled.h3`
  padding: 0;
  margin: 0;

  color: #7e0eb1;
`;

export const PostDate = styled.span`
  padding: 0;
  margin: 0;

  font-size: 12px;
  color: #999;
  font-weight: bold;
`;

export const Controls = styled.div``;

export const ControlButton = styled.button`
  margin-left: 5px;

  border: 0;
  background: transparent;
`;

export const PostContent = styled.div``;

export const Content = styled(TextArea)`
  padding: 10px;
`;

export const SaveButton = styled(Button)``;
