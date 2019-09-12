import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

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

  @media screen and (max-width: 425px) {
    height: auto;
    padding: 10px 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 200px;
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SearchForm = styled(Form)`
  position: relative;
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

export const ResultList = styled.ul`
  position: absolute;
  top: 50px;
  width: calc(100% + 20px);
  padding: 0;
  margin: 0;
  margin-left: -20px;
  max-height: 200px;
  z-index: 99;

  border-radius: 5px;
  list-style: none;
  background: #fafafa;
  cursor: pointer;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    width: 5px;
    margin-right: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #999;
    -webkit-border-radius: 2.5px;
    border-radius: 2.5px;
  }
`;

export const ResultItem = styled.li`
  padding: 10px;

  display: flex;
  align-items: center;

  &:hover {
    background: ${darken(0.08, '#fafafa')};
  }
`;

export const ResultImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  margin-right: 10px;
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
  height: 40px;
  margin-right: 10px;

  border-radius: 20px;
`;

export const UserName = styled.div`
  color: #fafafa;
  font-weight: bold;

  @media screen and (max-width: 700px) {
    display: none;
  }
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
  z-index: 100;

  a,
  button {
    width: 100%;
    display: block;
    padding: 10px;
    color: #fafafa;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.4);
    border: 0;
    text-align: left;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
