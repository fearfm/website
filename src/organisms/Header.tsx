import * as React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import styled from "styled-components";
import { Logo } from '@atoms/Logo';
import { TopMenu } from "@organisms/TopMenu";
import { ScreenContext, Screen } from "@contexts/Screen";
import { Socials } from "@molecules/Socials";

const MyAppBar = styled(AppBar)`
  background-color: #000918;
`

const MyToolbar = styled(Toolbar)`
  justify-content: space-between;
  padding: 0 3rem;
  height: 6rem;
  flex-wrap: wrap;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  padding-right: 1rem;
  order: 1;
`

const Middle = styled.div<{ screen: Screen }>`
  flex: 2;
  flex-basis: ${ props => props.screen.isMobile ? '100%' : 'auto' };
  display: flex;
  justify-content: ${ props => props.screen.isMobile ? 'flex-start' : 'center' };;
  order: ${ props => props.screen.isMobile ? 3 : 2 };
`

const Right = styled.div<{ screen: Screen }>`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-left: 1rem;
  order: ${ props => props.screen.isMobile ? 2 : 3 };
`

export const Header: React.FC = () => {
  const screen = React.useContext(ScreenContext);
  return (
      <MyAppBar>
        <MyToolbar>
          <Left>
            <Logo iconOnly={ screen.isMobile }/>
          </Left>
          <Middle screen={ screen }>
            <TopMenu/>
          </Middle>
          <Right screen={ screen }>
            <Socials/>
          </Right>
        </MyToolbar>
      </MyAppBar>
  );
}
