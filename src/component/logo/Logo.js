import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as LogoContent } from './logo.svg';

const Wrapper = styled.div`
  svg {
    fill: #fff;
    height: 34px;
  }
  .inside {
    opacity: 0.5;
  }
  .middle {
    opacity 0.7;
  }
  .outside {
    opacity: 0.9
  }
  .text {
    display: ${props => props.icononly ? 'none' : 'default'};
  }
`;

Logo.propTypes = {
  icononly: PropTypes.bool
};


function Logo(props) {
  const { iconOnly, ...rest } = props;
  return (
    <Wrapper {...rest} icononly={props.icononly}>
      <LogoContent />
    </Wrapper>
  );
}

export default Logo;
