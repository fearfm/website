import * as React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import styled from "styled-components";
import { Logo } from '@atoms/Logo';
import { TopMenu } from "@organisms/TopMenu";

const MyAppBar = styled(AppBar)`
  background-color: #000918;
`

const MyToolbar = styled(Toolbar)`
  justify-content: space-between;
  padding: 0 3rem;
  height: 6rem;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  padding-right: 1rem;
`

const Middle = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-left: 1rem;
`

export const Header: React.FC = () => (
  <MyAppBar>
    <MyToolbar>
      <Left>
        <Logo/>
      </Left>
      <Middle>
        <TopMenu/>
      </Middle>
      <Right>
        <div>socials</div>
      </Right>
    </MyToolbar>
  </MyAppBar>
);
