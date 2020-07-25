import * as React from 'react';
import {Player} from '@organisms/Player';
import {CenterColumn} from "@atoms/CenterColumn";

export const Residents: React.FC = () => (
  <CenterColumn>
    <h1>Residents</h1>
    <Player/>
  </CenterColumn>
);
