import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;

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

export const Form = styled.form`
  width: 100%;
  max-width: 315px;
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  max-width: 315px;
`;
