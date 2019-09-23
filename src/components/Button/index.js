import React from 'react';
import PropTypes from 'prop-types';

import { Container, Loading } from './styles';

export default function Button({
  children,
  loading,
  iconWidth,
  iconHeight,
  ...rest
}) {
  return (
    <Container {...rest}>
      {loading ? <Loading width={iconWidth} height={iconHeight} /> : children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf()])
    .isRequired,
  loading: PropTypes.bool,
  iconWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  loading: false,
  iconWidth: 40,
  iconHeight: 40,
};
