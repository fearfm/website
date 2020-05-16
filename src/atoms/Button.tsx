import * as React from 'react';;

export const Button: React.FC = () => {
  return (
      <>
        { latestTrack !== undefined && <>{ latestTrack.artist || 'Unknown artist' } - { latestTrack.title }</> }
        { latestTrack === undefined && <>Loading track info...</> }
      </>
  );
};
