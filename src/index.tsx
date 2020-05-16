import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Home } from '@pages/Home';
import { Playlists } from '@pages/Playlists';
import { Residents } from '@pages/Residents';
import { Schedule } from '@pages/Schedule';
import { PlaylistProvider } from '@contexts/Playlist/Playlist';

ReactDOM.render(
    <>
      <CssBaseline />
      <PlaylistProvider>
        <BrowserRouter>
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
        </BrowserRouter>
      </PlaylistProvider>
    </>,
    document.getElementById('root'),
);
