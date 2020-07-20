import * as React from 'react';
import { Grid, Box } from '@material-ui/core';
import styled from "styled-components";
import { Logo } from '@atoms/Logo';
import { TopMenu } from "@organisms/TopMenu";
import { ScreenContext, Screen } from "@contexts/Screen";
import { Socials } from "@molecules/Socials";
import {CenterColumn} from "@atoms/CenterColumn";

const Left = styled.div`
  flex: 1;
  display: flex;
  order: 1;
  margin-bottom: 0.5rem;
`

const Middle = styled.div<{ screen: Screen }>`
  flex: 1;
  flex-basis: ${ props => props.screen.isMobile ? '100%' : '25%' };
  display: flex;
  order: ${ props => props.screen.isMobile ? 3 : 2 };
`

const Right = styled.div<{ screen: Screen }>`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  order: ${ props => props.screen.isMobile ? 2 : 3 };
`

export const Header: React.FC = () => {
  const screen = React.useContext(ScreenContext);
  return (
      <Grid container justify="space-between">
        <Left>
          <Logo iconOnly={ screen.isMobile }/>
        </Left>
        <Middle screen={ screen }>
          <CenterColumn>
            <TopMenu/>
          </CenterColumn>
        </Middle>
        <Right screen={ screen }>
          <Socials/>
        </Right>
      </Grid>
  );
}
