import * as React from 'react';
import { Grid } from '@material-ui/core';
import { MenuLink, Size } from "@atoms/MenuLink";

export interface Props {
  items: Array<{
    exact?: boolean;
    label: string;
    to: string;
  }>;
  size?: Size;
}

export const Menu: React.FC<Props> = ({ items, size}: Props) => (
    <Grid container justify="space-between">
      { items.map(item => (
          <MenuLink size={ size } key={ item.label } exact={ item.exact } to={ item.to }>{ item.label }</MenuLink>
      ))}
    </Grid>
)

export {
  Size,
}
