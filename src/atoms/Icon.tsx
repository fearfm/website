import * as React from 'react';
import styled from "styled-components";

export enum Type {
    play = '\\ea1c',
    stop = '\\ea1e',
    volume = '\\ea27',
    facebook = '\\ea90',
    instagram = '\\ea92',
    twitter = '\\ea96',
}

export interface Props {
    icon: Type;
}

export const Icon = styled.span<Props>`
  font-family: 'icomoon';
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  &:before {
    content: '${ props => props.icon }';
  }
`
