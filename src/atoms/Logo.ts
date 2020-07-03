import styled from "styled-components";
import { ReactComponent as LogoSvg } from '@assets/logo.svg';

export const Logo = styled(LogoSvg)`
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
`
