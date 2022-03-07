import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

import { Routes as RoutesConstants } from './constants/routes';
import Layout from './modules/layout/components';
import PokemonsContainer from './modules/pokedex/containers/PokemonsContainer';
import PokemonContainer from './modules/pokemon/containers/PokemonContainer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={RoutesConstants.HOME}
        element={
          <Layout>
            <Outlet />
          </Layout>
        }>
        <Route path={RoutesConstants.POKEDEX.ROOT} element={<PokemonsContainer />} />
        <Route path={RoutesConstants.POKEDEX.POKEMON} element={<PokemonContainer />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
