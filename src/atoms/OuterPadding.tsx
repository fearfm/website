import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  padding: 0 2rem;
`

export const OuterPadding: React.FC<Props> = ({children}: Props) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
