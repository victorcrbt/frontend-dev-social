import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 50px;
  margin: 10px 0;

  border: 0;
  border-radius: 5px;
  background: #bc40f4;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease;

  &:hover {
    background: ${lighten(0.06, '#bc40f4')};
  }

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background: ${darken(0.2, '#bc40f4')};

      &:hover {
        background: ${darken(0.2, '#bc40f4')};
      }
    `}
`;
