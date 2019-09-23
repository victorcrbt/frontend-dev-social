import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import { ReactComponent as LoadingSvg } from '~/assets/loading.svg';

export const Container = styled.button.attrs(props => ({
  disabled: props.loading && true,
}))`
  width: 100%;
  height: 50px;
  margin: 10px 0;

  border: 0;
  border-radius: 5px;
  background: #bc40f4;
  color: #fff;
  font-weight: bold;
  overflow: hidden;
  transition: background 0.2s ease;

  display: flex;
  justify-content: center;
  align-items: center;

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

export const Loading = styled(LoadingSvg)``;
