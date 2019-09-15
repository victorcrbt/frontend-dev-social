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

export const PostContent = styled.div``;

export const Content = styled(TextArea)`
  padding: 10px;

  color: #444;
`;

export const SaveButton = styled(Button)``;
