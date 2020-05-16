import * as React from 'react';
import { Grid } from '@material-ui/core';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const MenuLink = styled(NavLink)`
  position: relative;
  color: rgba(255, 255, 255, 0.4);
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 300ms;
  
  &:hover, &:active, &:focus, &.active {
    color: #fff;
  }
  
  &:after {
    content: '';
    background-color: rgba(255, 255, 255, 0.4);
    width: 0;
    left: 50%;
    transition: all 400ms;
  }
  
  &.active:after {
    content: '';
    position: absolute;
    bottom: -0.2rem;
    height: 2px;
    border-radius: 2px;
    background-color: #fff;
    width: 100%;
    left: 0;
  }
`

export const TopMenu: React.FC = () => (
    <Grid container justify="space-between">
      <MenuLink exact to="/">Home</MenuLink>
      <MenuLink to="/playlists">Playlists</MenuLink>
      <MenuLink to="/residents">Residents</MenuLink>
      <MenuLink to="/schedule">Schedule</MenuLink>
    </Grid>
)
