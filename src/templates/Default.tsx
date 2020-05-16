import * as React from "react";
import styled from "styled-components";
import { Grid } from '@material-ui/core';
import { TopMenu } from '@organisms/TopMenu';

interface Props {
  children: React.ReactNode;
}

const Container = styled(Grid)`
  height: 100vh;
  padding: 0 3rem;
  background-color: #841f1f;
`

const Header = styled(Grid)`
  height: 4rem;
`

const Content = styled(Grid)`
  height: calc(100% - 8rem);
`


const Footer = styled(Grid)`
  height: 4rem;
`

export const Default: React.FC = ({ children }: Props) => (
   <Container container>
     <Header xs={12} item container alignItems="center">
       <Grid xs={ 4 } item container>
         Fear.FM
       </Grid>
       <Grid xs={ 4 } item container>
         <TopMenu />
       </Grid>
       <Grid xs={ 4 } item container justify="flex-end">
         Social
       </Grid>
     </Header>
     <Content xs={12} item>
       { children }
     </Content>
     <Footer xs={12} item container alignItems="center">
       <Grid xs={ 6 } item container>
         Contact
       </Grid>
       <Grid xs={ 6 } item container justify="flex-end">
         Powered by
       </Grid>
     </Footer>
   </Container>
);
