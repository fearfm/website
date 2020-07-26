interface Track {
  artist: string;
  title: string;
  image: string;
}

interface Tracklist {
  artist: string;
  title: string;
}

export interface TrackInfo {
  tracklist: Tracklist;
  track: Track;
}
