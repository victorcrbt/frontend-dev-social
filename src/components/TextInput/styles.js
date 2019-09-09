import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 6px 0;

  ${props =>
    props.disabled &&
    css`
      background: ${darken(0.15, '#fafafa')}
      cursor: not-allowed;
    `}

  span {
    color: #ff4040;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.4s ease;

    ${props =>
      props.error &&
      css`
        opacity: 1;
      `};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 4px;
  padding: 0 10px;

  color: #999999;
  background: #fafafa;
  border: 0;
  border-radius: 5px;
  font-size: 16px;

  ${props =>
    props.error &&
    css`
      border: 1px solid red;
    `}

  &::placeholder {
    color: #999999;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
