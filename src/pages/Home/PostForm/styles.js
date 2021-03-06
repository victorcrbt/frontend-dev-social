import styled from 'styled-components';
import { darken } from 'polished';

import Form from '~/components/Form';
import TextArea from '~/components/TextArea';
import Button from '~/components/Button';

export const NewPost = styled(Form)`
  padding: 10px 10px 10px 10px;
  margin-bottom: 20px;

  background: #fafafa;
  border-radius: 5px;
`;

export const Input = styled(TextArea)`
  height: ${props => (props.posting ? '200px' : '30px')};
  margin-top: 10px;
  padding: 0;

  background: transparent;
  transition: height 0.4s ease;
`;

export const SubmitButton = styled(Button)`
  height: 40px;
`;

export const CancelButton = styled(Button)`
  margin-top: 0;
  height: 40px;

  background: #f55656;

  &:hover {
    background: ${darken(0.02, '#f55656')};
  }
`;
