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
  spaceBetween?: boolean;
}

const Wrapper = styled(Box)<{ size: Size }>`
  display: flex;
  width: ${ props => props.size === Size.large ? 'calc(100% + 2.5rem)' : 'calc(100% + 1rem)' };
`

export const Menu: React.FC<Props> = ({ items, size, spaceBetween }: Props) => (
    <Wrapper size={ size } mx={ size === Size.large ? -2.5 : -1 } justifyContent={ spaceBetween ? 'space-between' : 'inherit' }>
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
