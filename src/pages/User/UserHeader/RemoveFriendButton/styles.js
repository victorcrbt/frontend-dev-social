import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled(Button)`
  height: auto;
  margin: 0;
  margin-bottom: 7px;
  padding: 5px 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 5px;

    flex: 0 0 16px;
  }
`;
