import * as React from 'react';
import { Font as FontComponent, Size } from "@atoms/Font";
import { Icon, Type } from "@atoms/Icon";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-right: -0.3rem;
`

const Link = styled.a`
  text-decoration: none;
`

const Font = styled(FontComponent)`
  padding: 0.3rem;
`

export const Socials: React.FC = () => (
    <Wrapper>
      <Link href="https://www.facebook.com/Fear.FM/" target="_blank" title="Fear.FM on Facebook">
        <Font transparent="hover" size={ Size.large }>
          <Icon icon={ Type.facebook } />
        </Font>
      </Link>
      <Link href="https://www.instagram.com/fearfmofficial" target="_blank" title="Fear.FM on Instagram">
        <Font transparent="hover" size={ Size.large }>
          <Icon icon={ Type.instagram } />
        </Font>
      </Link>
      <Link href="https://twitter.com/fearfm" target="_blank" title="Fear.FM on Twitter">
        <Font transparent="hover" size={ Size.large }>
          <Icon icon={ Type.twitter } />
        </Font>
      </Link>
    </Wrapper>
)
