import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hidden, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NetwerkCLogo from './netwerk-c-logo-pico.png';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 12,
    backgroundColor: '#000918',
    bottom: 0,
    position: 'fixed',
    padding: 18,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary
  },
  links: {
    '& a, a:active': {
      marginRight: 20,
      color: theme.palette.text.secondary,
      textDecoration: 'none'
    },
    marginBottom: 10,
    color: theme.palette.text.secondary,
    '& .active': {
      color: '#fff',
      textDecoration: 'underline',
    },
  },
  sponsorHeader: {
    textAlign: 'right',
    color: theme.palette.text.secondary,
  },
  sponsorList: {
    textAlign: 'right',
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
    >
      <Grid item xs={12} sm={8} md={6}>
        <div className={classes.links}>
          <a target="_blank" href="https://www.patreon.com/FearFM" rel="noopener noreferrer">Donate!</a>
          <a target="_blank" href="https://support.fear.fm" rel="noopener noreferrer">Contact</a>
          <NavLink activeClassName='active' to='/terms-and-conditions'>Terms and conditions</NavLink>
          <NavLink to='/privacy-policy'>Privacy policy</NavLink>
        </div>
        <div className={classes.copyright}>
          &copy; 2020 Fear.FM
       </div>
      </Grid>
      <Hidden xsDown>
        <Grid item xs={12} sm={4} md={6}>
          <div className={classes.sponsorHeader}>
            Sponsors
          </div>
          <div className={classes.sponsorList}>
            <a href="https://www.netwerk-c.nl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img height={28} src={NetwerkCLogo} alt='Netwerk-C logo' />
            </a>
        </div>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Footer;
