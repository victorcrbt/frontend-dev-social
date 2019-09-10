import styled, { keyframes } from 'styled-components';

import Form from '~/components/Form';
import TextInput from '~/components/TextInput';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(180deg)
  }
`;

export const Container = styled.div`
  height: 50px;
  margin-bottom: 20px;

  background: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const SearchForm = styled(Form)`
  max-width: 300px;
  height: 100%;
  margin: 0;
  margin-left: 35px;

  display: flex;
  align-items: center;

  button {
    display: none;
  }
`;

export const SearchInput = styled(TextInput)`
  height: 30px;
  margin: 0;
`;

export const User = styled.div`
  margin-left: auto;
  padding: 0 10px;
  height: 100%;
  position: relative;
  background: (0, 0, 0, 0.4);

  display: flex;
  align-items: center;

  &:hover .triangle {
    animation: ${rotate} 0.2s linear 1 forwards;
  }

  &:hover .submenu {
    height: auto;
  }
`;

export const UserAvatar = styled.img`
  width: 40px;
  margin-right: 10px;

  border-radius: 20px;
`;

export const UserName = styled.div`
  color: #fafafa;
  font-weight: bold;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  margin-left: 5px;

  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5px solid #fafafa;
`;

export const Submenu = styled.div`
  position: absolute;
  width: 100%;
  height: 0;
  padding: 0;
  top: 50px;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.4);

  a {
    display: block;
    padding: 10px;
    color: #fafafa;
    font-weight: bold;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
