import React from 'react';
import { Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import pokeballIcon from 'images/pokeball.png';

import { Routes } from '../../../constants/routes';

import './styles.scss';
import ProgressBar from '../../shared/progressBar';

const Layout = ({ children }) => {
  return (
    <Grid className="layout">
      <header className="header">
        <img className="logo-icon" src={pokeballIcon} />
        <Typography>Pokemons App</Typography>
      </header>
      <div className="sidebar">
        <Link to={Routes.HOME}>Home</Link>
        <Link to={Routes.POKEDEX.ROOT}>Pokedex</Link>
        <ProgressBar max={400} current={64} min={0} />
      </div>
      <main className="main">{children}</main>
      <footer className="footer">Footer</footer>
    </Grid>
  );
};

export default Layout;
