import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectedSpecies } from '../../pokedex/selectors';
import PokemonEvolution from '../components/PokemonEvolution';
import { getEvolutionChain } from '../actions';
import { selectedEvolutionChain } from '../selectors';

// const mocked = {
//   chain: {
//     evolves_to: [
//       {
//         evolves_to: [
//           {
//             evolves_to: [],
//             is_baby: false,
//             species: { name: 'number 3' },
//           },
//         ],
//         species: { name: 'number 1' },
//       },
//       {
//         evolves_to: [
//           {
//             evolves_to: [
//               {
//                 evolves_to: [
//                   {
//                     evolves_to: [
//                       {
//                         evolves_to: [],
//                         species: {
//                           name: 'number 9',
//                         },
//                       },
//                     ],
//                     species: {
//                       name: 'number 6',
//                     },
//                   },
//                   {
//                     evolves_to: [
//                       {
//                         evolves_to: [
//                           {
//                             evolves_to: [
//                               {
//                                 evolves_to: [
//                                   {
//                                     evolves_to: [],
//                                     species: {
//                                       name: 'number 9',
//                                     },
//                                   },
//                                 ],
//                                 species: {
//                                   name: 'number 6',
//                                 },
//                               },
//                               {
//                                 evolves_to: [
//                                   {
//                                     evolves_to: [
//                                       {
//                                         evolves_to: [],
//                                         species: {
//                                           name: 'number 10',
//                                         },
//                                       },
//                                     ],
//                                     species: {
//                                       name: 'number 8',
//                                     },
//                                   },
//                                 ],
//                                 species: {
//                                   name: 'number 7',
//                                 },
//                               },
//                             ],
//                             species: {
//                               name: 'number 10',
//                             },
//                           },
//                         ],
//                         species: {
//                           name: 'number 8',
//                         },
//                       },
//                     ],
//                     species: {
//                       name: 'number 7',
//                     },
//                   },
//                 ],
//                 species: {
//                   name: 'number 5',
//                 },
//               },
//             ],
//             species: { name: 'number 4' },
//           },
//         ],
//         species: { name: 'number 2' },
//       },
//     ],
//     species: { name: 'number 0' },
//   },
// };

const getAllChains = (chain) => {
  if (!chain) {
    return null;
  }

  const iterate = (node, path = []) => {
    const currentPath = [...path, node.species.name];
    if (node.evolves_to.length) {
      return node.evolves_to.forEach((child) => iterate(child, currentPath));
    }
    chains.push(currentPath);
  };

  let chains = [];
  iterate(chain);

  return chains;
};

const getChainTree = (chain) => {
  if (!chain) {
    return null;
  }

  const iterate = (node) => {
    let newNode = { species: node.species, details: node.evolution_details };

    if (node.evolves_to.length) {
      newNode.evolves = node.evolves_to.map((child) => iterate(child));
    }

    return newNode;
  };

  const tree = iterate(chain, []);

  return tree;
};

const PokemonEvolutionContainer = () => {
  const dispatch = useDispatch();

  const currentSpecies = useSelector(selectedSpecies);
  const currentEvolutionChain = useSelector(selectedEvolutionChain);

  useEffect(() => {
    const evolutionChainUrl = currentSpecies?.evolution_chain?.url;

    if (evolutionChainUrl) {
      dispatch(getEvolutionChain({ url: evolutionChainUrl }));
    }
  }, [currentSpecies, dispatch]);

  const chains = getAllChains(currentEvolutionChain?.chain);
  const tree = getChainTree(currentEvolutionChain?.chain);

  return chains && tree && <PokemonEvolution chains={chains} evolution={tree} />;
};

export default PokemonEvolutionContainer;
