import styled from 'styled-components';

export const Container = styled.div``;

export const Interactions = styled.div`
  padding: 10px 5px;
  padding: ${props => (props.isEmpty ? 0 : '10px 5px')};
  margin-bottom: 10px;

  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  display: ${({ isEmpty }) => (isEmpty ? 'none' : 'flex')};
  justify-content: space-between;
`;

export const Likes = styled.div`
  font-weight: bold;
  color: #666;
`;

export const Comments = styled.div`
  margin-left: auto;

  font-weight: bold;
  color: #666;
`;

export const Actions = styled.div`
  padding: 0px 5px;
  margin-bottom: 10px;

  display: flex;

  svg {
    color: ${({ liked }) => (liked ? '#BC40F4' : '#444')};
  }

  button {
    border: 0;
    background: transparent;

    display: flex;
    align-items: center;
  }

  span {
    margin-left: 5px;

    color: ${({ liked }) => (liked ? '#BC40F4' : '#444')};
    font-weight: bold;
    cursor: pointer;
  }
`;
