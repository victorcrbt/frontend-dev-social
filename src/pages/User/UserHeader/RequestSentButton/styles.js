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
    width: 16px;

    margin-right: 5px;

    flex: 0 0 16px;
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    max-width: 250px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 426px) {
    margin-bottom: 0;
    max-width: 310px;
  }
`;
