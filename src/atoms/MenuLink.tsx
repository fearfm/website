import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export enum Size {
  small,
  large,
}

export interface Props {
  size?: Size;
}

export const MenuLink = styled(NavLink)<Props>`
  position: relative;
  color: rgba(255, 255, 255, 0.4);
  font-size: ${ props => props.size === Size.large ? '1rem' : '0.75rem' };
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
