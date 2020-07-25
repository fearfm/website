import * as React from 'react';
import styled from "styled-components";
import {ReactComponent as LogoSvg} from '@assets/logo.svg';

export interface Props {
  iconOnly?: boolean;
}

const Inner = styled(LogoSvg)<Props>`
  fill: #fff;
  height: 1.5rem;

  .logo_svg__outside {
    opacity: 0.9;
  }

  .logo_svg__middle {
    opacity: 0.7;
  }

  .logo_svg__inside {
    opacity: 0.5;
  }

  .logo_svg__text {
    display: ${props => props.iconOnly ? 'none' : 'default'};
  }
`

export const Logo: React.FC<Props> = (props: Props) => (
  <Inner {...props} viewBox={props.iconOnly ? '0 0 80 32' : '0 0 244 32'}/>
);
