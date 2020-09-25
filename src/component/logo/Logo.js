import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ReactComponent as LogoContent } from "./logo.svg"

const Wrapper = styled.div`
  svg {
    fill: #fff;
    height: 34px;
  }
  .inside {
    opacity: 0.5;
  }
  .middle {
    opacity: 0.7;
  }
  .outside {
    opacity: 0.9;
  }
  .text {
    display: ${(props) => (props.iconOnly ? "none" : "default")};
  }
`

function Logo(props) {
  console.log(props)
  const { iconOnly, ...rest } = props
  return (
    <Wrapper {...rest} iconOnly={iconOnly}>
      <LogoContent />
    </Wrapper>
  )
}

Logo.defaultProps = {
  iconOnly: false,
}

Logo.propTypes = {
  iconOnly: PropTypes.bool,
}

export default Logo
