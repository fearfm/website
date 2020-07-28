import * as React from 'react';
import styled from "styled-components";
import {Grid} from "@material-ui/core";

const Page = styled(Grid)`
  height: 100%;
`

export const NoMatch: React.FC = () => (
  <Page container alignItems="center">
    <h1>404</h1>
  </Page>
);
