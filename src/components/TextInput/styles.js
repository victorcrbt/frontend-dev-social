import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 6px 0;

  display: flex;
  align-items: center;

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

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;

  label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -20px;
    background: #fafafa;
    height: 100%;
    padding-left: 5px;

    display: flex;
    align-items: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
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
  transition: box-shadow 0.4s ease;

  ${props =>
    props.error &&
    css`
      box-shadow: 0px 0px 8px 2px #ff4040;
    `}

  &::placeholder {
    color: #999999;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
