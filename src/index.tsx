import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';
import { Home } from '@pages/Home';
import { Playlists } from '@pages/Playlists';
import { Residents } from '@pages/Residents';
import { Schedule } from '@pages/Schedule';
import { PlaylistProvider } from '@contexts/Playlist/Playlist';
import { TopMenu } from '@organisms/TopMenu';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }
  
  body {
    font-family: "system";
  }
`

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

ReactDOM.render(
    <>
      <CssBaseline />
      <GlobalStyle />
      <PlaylistProvider>
        <BrowserRouter>
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
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/playlists">
                  <Playlists/>
                </Route>
                <Route exact path="/residents">
                  <Residents/>
                </Route>
                <Route exact path="/schedule">
                  <Schedule/>
                </Route>
              </Switch>
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
        </BrowserRouter>
      </PlaylistProvider>
    </>,
    document.getElementById('root'),
);
