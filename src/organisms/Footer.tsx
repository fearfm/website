import * as React from 'react';
import {Grid} from '@material-ui/core';
import {BottomMenu} from "./BottomMenu";
import {Font} from "@atoms/Font";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
`

export const Footer: React.FC = () => (
  <Wrapper>
    <BottomMenu />
    <Font uppercase transparent bold>&copy; { (new Date()).getFullYear() } Fear.FM</Font>
  </Wrapper>
);
