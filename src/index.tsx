import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '@pages/Home';
import { PlaylistProvider } from '@contexts/Playlist/Playlist';

ReactDOM.render(
    <PlaylistProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/">
              <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </PlaylistProvider>,
    document.getElementById('root'),
);
