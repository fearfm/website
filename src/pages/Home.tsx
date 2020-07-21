import * as React from 'react';
import { Player } from '@organisms/Player';
import styled from "styled-components";
import {Grid} from "@material-ui/core";
import {CenterColumn} from "@atoms/CenterColumn";

const Page = styled(Grid)`
  height: 100%;
`

export const Home: React.FC = () => (
    <Page container alignItems="center">
        <CenterColumn>
            <Player />
        </CenterColumn>
    </Page>
);
