import * as React from "react";
import styled from "styled-components";
import {ScreenContext, Screen} from "@contexts/Screen";

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.div<{ screen: Screen }>`
  width: ${ props => props.screen.isMobile ? '100%' : '400px' };
  margin: ${ props => props.screen.isMobile ? '0' : '0 auto' };
`

export const CenterColumn: React.FC<Props> = ({ children }: Props) => {
  const screen = React.useContext(ScreenContext);
  return (
      <Wrapper screen={ screen }>
        {children}
      </Wrapper>
  )
}
