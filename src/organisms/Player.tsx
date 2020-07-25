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
  const latestTrack = playlist[0];
  return (
    <>
      <Grid container direction="column" alignItems="center">
        {latestTrack !== undefined && (
          <>
            <Image
              isMobile={screen.isMobile}
              src="https://img.discogs.com/9R-_llCWhbTFx0opBsM44Ens9H0=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-15259253-1588804801-4686.jpeg.jpg"
            />
            <Box mb={1}>
              <Font size={Size.large} bold={true}>{latestTrack.title}</Font>
            </Box>
            <Font size={Size.small} transparent={true}>
              {latestTrack.artist || 'Unknown artist'}
            </Font>
          </>
        )}
        {latestTrack === undefined && (
          <>
            <Font size={Size.small} transparent={true}>Loading track info...</Font>
          </>
        )}
      </Grid>
    </>
  );
};
