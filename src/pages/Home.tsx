import * as React from 'react';
import { Player } from '@organisms/Player';
import styled from "styled-components";
import {Grid} from "@material-ui/core";

const Page = styled(Grid)`
  height: 100%;
  padding-top: 2rem;
`

export const Home: React.FC = () => (
    <Page container alignItems="center">
        <Player />
    </Page>
);
