import * as React from 'react';
import {BottomMenu} from "./BottomMenu";
import {Font} from "@atoms/Font";
import styled from "styled-components";
import {OuterPadding} from "@atoms/OuterPadding";

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  background-color: #000918;
`

export const Footer: React.FC = () => (
  <Wrapper>
    <OuterPadding>
      <BottomMenu/>
      <Font uppercase transparent bold>&copy; {(new Date()).getFullYear()} Fear.FM</Font>
    </OuterPadding>
  </Wrapper>
);
