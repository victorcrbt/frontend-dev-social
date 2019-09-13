import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 5px;
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
