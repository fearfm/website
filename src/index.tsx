import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';
import { Home } from '@pages/Home';
import { Playlists } from '@pages/Playlists';
import { Residents } from '@pages/Residents';
import { Schedule } from '@pages/Schedule';
import { PlaylistProvider } from '@contexts/Playlist/Playlist';
import { BottomMenu } from '@organisms/BottomMenu';
import { Font } from "@atoms/Font";
import { Privacy } from '@pages/Privacy';
import { DocumentHead } from '@organisms/DocumentHead';
import { Header } from '@organisms/Header';
import styled, { createGlobalStyle } from "styled-components";
import DotsSvg from '@assets/dots.svg';

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

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000918;
  color: #fff;
  padding-top: 6rem;
`

const BackgroundImage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-image: url("${ DotsSvg }");
  background-position: center bottom 2rem;
  background-size: 100%;
  background-repeat: no-repeat;
`

const Content = styled(Grid)`
  padding: 0 3rem;
  height: calc(100% - 4rem);
  overflow: auto;
  z-index: 1;
`

const Footer = styled(Grid)`
  padding: 1rem 3rem;
  display: flex;
`

ReactDOM.render(
    <>
      <DocumentHead />
      <CssBaseline />
      <GlobalStyle />
      <PlaylistProvider>
        <BrowserRouter>
          <Container>
            <BackgroundImage/>
            <Header />
            <Content item xs={ 12 }>
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
                <Route exact path="/privacy">
                  <Privacy/>
                </Route>
              </Switch>
            </Content>
            <Footer xs={12} item container alignItems="center">
              <Grid xs={ 3 } item container direction="column">
                <Grid item><BottomMenu /></Grid>
                <Grid item><Font uppercase transparent bold>&copy; { (new Date()).getFullYear() } Fear.FM</Font></Grid>
              </Grid>
              <Grid xs={ 9 } item container justify="flex-end">
                Powered by
              </Grid>
            </Footer>
          </Container>
        </BrowserRouter>
      </PlaylistProvider>
    </>,
    document.getElementById('root'),
);
