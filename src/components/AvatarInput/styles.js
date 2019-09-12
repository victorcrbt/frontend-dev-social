import styled from 'styled-components';

export const Container = styled.label`
  div {
    width: 150px;
    height: 150px;

    border-radius: 75px;
    border: 1px dashed #ddd;
    background: rgba(255, 255, 255, 0.02);
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Preview = styled.img`
  width: 150px;
`;

export const Input = styled.input`
  display: none;
`;
