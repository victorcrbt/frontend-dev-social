import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  max-width: 150px;
  margin: 0 auto;

  display: flex;

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

  &:hover .overflow {
    opacity: 1;
  }
`;

export const Preview = styled.img`
  width: 150px;
`;

export const Input = styled.input`
  display: none;
`;

export const Overflow = styled.div`
  opacity: 0;
  transition: opacity 0.2s ease;

  position: absolute !important;
  z-index: 10;
  top: 0;

  border: 0 !important;
  background: transparent !important;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between !important;

  svg {
    margin-top: 30px;
  }

  div {
    width: 150px;
    height: 75px;
    border: 0;
    border-radius: 0px 0px 150px 150px;

    background: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: flex-start;

    span {
      margin-top: 20px;

      color: rgba(255, 255, 255, 0.8);
      font-weight: bold;
    }
  }
`;
