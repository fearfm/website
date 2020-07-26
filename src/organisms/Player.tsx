import * as React from 'react';
import {PlaylistContext} from "@contexts/Playlist";
import {Font, Size} from "@atoms/Font";
import {Box, Grid} from "@material-ui/core";
import styled from "styled-components";
import {ScreenContext} from "@contexts/Screen";

const Image = styled.img<{ isMobile: boolean }>`
  width: ${props => props.isMobile ? '80%' : '100%'};
  max-width: 400px;
  margin-bottom: 3rem;
`

export const Player: React.FC = () => {
  const playlist = React.useContext(PlaylistContext);
  const screen = React.useContext(ScreenContext);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        {playlist !== null && (
          <>
            <Box mb={1}>
              <Font size={Size.large} bold={true}>
                {playlist.tracklist.artist} - {playlist.tracklist.title}
              </Font>
            </Box>
            <Image
              isMobile={screen.isMobile}
              src={playlist.track.image}
            />
            <Box mb={1}>
              <Font size={Size.large} bold={true}>{playlist.track.title}</Font>
            </Box>
            <Font size={Size.small} transparent={true}>
              {playlist.track.artist}
            </Font>
          </>
        )}
        {playlist === null && (
          <>
            <Font size={Size.small} transparent={true}>Loading track info...</Font>
          </>
        )}
      </Grid>
    </>
  );
};
