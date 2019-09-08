import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin: 10px 0;

  background: #fafafa;
  border-radius: 5px;

  ${props =>
    props.disabled &&
    css`
      background: ${darken(0.15, '#fafafa')}
      cursor: not-allowed;
    `}
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  color: #999999;
  background: none;
  border: 0;
  font-size: 16px;

  &::placeholder {
    color: #999999;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
