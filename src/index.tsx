import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, Grid} from '@material-ui/core';
import { Home } from '@pages/Home';
import { Playlists } from '@pages/Playlists';
import { Residents } from '@pages/Residents';
import { Schedule } from '@pages/Schedule';
import { PlaylistProvider } from '@contexts/Playlist/Playlist';
import { ScreenProvider } from '@contexts/Screen/Screen';
import { Privacy } from '@pages/Privacy';
import { DocumentHead } from '@organisms/DocumentHead';
import { Header } from '@organisms/Header';
import { Footer } from '@organisms/Footer';
import styled, { createGlobalStyle } from "styled-components";
import DotsSvg from '@assets/dots.svg';
import IcomoonEot from '@assets/fonts/icomoon.eot';
import IcomoonSvg from '@assets/fonts/icomoon.svg';
import IcomoonTtf from '@assets/fonts/icomoon.ttf';
import IcomoonWoff from '@assets/fonts/icomoon.woff';
import {OuterPadding} from "@atoms/OuterPadding";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }
  
  @font-face {
    font-family: 'icomoon';
    src: url('${IcomoonEot}?wuqlhg');
    src: url('${IcomoonEot}?wuqlhg#iefix') format('embedded-opentype'),
      url('${IcomoonTtf}?wuqlhg') format('truetype'),
      url('${IcomoonWoff}?wuqlhg') format('woff'),
      url('${ IcomoonSvg }') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  
  body {
    font-family: "system";
  }
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #fff;
`

const BackgroundImage = styled.div`
  position: fixed;
  background-color: #000918;
  width: 100%;
  height: 100%;
  top: 0;
  background-image: url("${ DotsSvg }");
  background-position: center bottom 2rem;
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: -1;
`

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

const Content = styled(Grid)`
  padding-top: 4rem;
  min-height: 100%;
`

ReactDOM.render(
    <>
      <DocumentHead />
      <CssBaseline />
      <GlobalStyle />
      <ScreenProvider>
        <PlaylistProvider>
          <BrowserRouter>
            <BackgroundImage/>
            <Container>
              <Header />
              <Content container justify="center">
                <OuterPadding>
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
                </OuterPadding>
              </Content>
              <Bottom>
                <Footer />
              </Bottom>
            </Container>
          </BrowserRouter>
        </PlaylistProvider>
      </ScreenProvider>
    </>,
    document.getElementById('root'),
);
