import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.div`
  padding: 0 0 20px 0;

  border-bottom: 1px solid #666;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 768px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
`;

export const UserAvatar = styled.img`
  max-width: 180px;
  max-height: 180px;

  border-radius: 90px;

  flex: 1 1 180px;

  @media screen and (max-width: 425px) {
    max-width: 90px;
    max-height: 90px;

    border-radius: 45px;

    flex: 1 1 90px;
  }
`;

export const UserInfo = styled.div`
  margin-left: 20px;
`;

export const UserName = styled.h1`
  color: #fafafa;
  font-size: 1.5rem;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 768px) and (min-width: 426px) {
    margin-top: 10px;

    flex-direction: row;
    align-items: center;
  }

  @media screen and (max-width: 425px) {
    margin-top: 10px;

    align-items: center;
  }
`;

export const SendMessageButton = styled(Button)`
  max-width: 150px !important;
  height: auto;
  margin: 0;
  padding: 5px 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 5px;

    flex: 0 0 16px;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    width: 100%;
    max-width: 250px !important;
    margin-left: 10px;
  }

  @media screen and (max-width: 426px) {
    width: 100%;
    max-width: 310px !important;
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const FriendCount = styled.span`
  margin-left: auto;

  color: #fafafa;
  font-weight: bold;
  font-size: 18px;
`;
