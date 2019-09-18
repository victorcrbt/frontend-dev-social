import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #fafafa;
  border-radius: 5px;
  overflow: hidden;

  display: flex;
`;

export const Friends = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100%;

  z-index: 99;
  border-right: 1px solid #999;
  background: #fafafa;

  @media screen and (max-width: 425px) {
    max-width: 40px;
  }
`;

export const Friend = styled.div`
  height: 35px;
  padding: 5px;

  display: flex;
  align-items: center;
  transition: background 0.2s ease;

  &:hover {
    background: #ccc;
    cursor: pointer;
  }
`;

export const FriendAvatar = styled.img`
  width: 25px;
  height: 25px;

  border-radius: 12.5px;
`;

export const FriendName = styled.span`
  margin-left: 5px;

  @media screen and (max-width: 425px) {
    margin-left: 0;
    display: none;
  }
`;
