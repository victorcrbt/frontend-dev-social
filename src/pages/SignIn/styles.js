import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 315px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .recovery {
    font-size: 13px;
  }

  a {
    margin-bottom: 5px;

    color: #fff;
    font-weight: bold;
    transition: color 0.2s ease;

    &:hover {
      color: ${darken(0.1, '#fff')};
    }
  }
`;

export const Logo = styled.img`
  max-width: 315px;
`;
