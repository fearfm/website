import * as React from 'react';
import {Box} from '@material-ui/core';
import {MenuLink, Size} from "@molecules/MenuLink";
import styled from "styled-components";

export interface Props {
  items: Array<{
    exact?: boolean;
    label: string;
    to: string;
  }>;
  size?: Size;
}

const Wrapper = styled(Box)`
  display: flex;
`

export const Menu: React.FC<Props> = ({ items, size}: Props) => (
    <Wrapper mx={ size === Size.large ? -2.5 : -1 }>
      { items.map(item => (
          <Box key={ item.label } px={ size === Size.large ? 2.5 : 1 }>
            <MenuLink size={ size } exact={ item.exact } to={ item.to }>{ item.label }</MenuLink>
          </Box>
      ))}
    </Wrapper>
)

export {
  Size,
}
