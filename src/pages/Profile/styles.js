import styled from 'styled-components';

import Form from '~/components/Form';
import TextInput from '~/components/TextInput';
import AvatarInput from '~/components/AvatarInput';
import Button from '~/components/Button';

export const Container = styled.div`
  width: 100%;
  height: calc(100% + 80px);
  max-width: 600px;
  margin: 0 auto;
`;

export const ProfileForm = styled(Form)`
  background: #181818;
  padding: 20px;
  border-radius: 10px;
`;

export const Input = styled(TextInput)`
  height: 40px;
`;

export const ImageInput = styled(AvatarInput)`
  display: block;
  margin: 0 auto !important;
  border: 1px solid red;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;

  background: rgba(255, 255, 255, 0.3);
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
`;

export const Info = styled.p`
  color: rgba(255, 255, 255, 0.3);
  margin: 5px;
`;

export const SubmitButton = styled(Button)``;
