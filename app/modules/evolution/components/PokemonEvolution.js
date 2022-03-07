import React, { useEffect } from 'react';

import PokemonEvolutionCardContainer from '../../pokemon/containers/PokemonEvolutionCardContainer';
import PokemonEvolutionDetailsContainer from '../../pokemon/containers/PokemonEvolutionDetailsContainer';

import './styles.scss';

const Chain = ({ node }) => {
  return (
    <div className="evolution-chain-container">
      <div className="evolution-card-container">
        <PokemonEvolutionCardContainer url={node.species.url} name={node.species.name} />
      </div>
      <div className="evolution-subchain-container">
        {node.evolves?.length > 0 &&
          node.evolves.map((node, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <PokemonEvolutionDetailsContainer nodeIndex={index} evolutionDetails={node.details} />
              <Chain node={node} />
            </div>
          ))}
      </div>
    </div>
  );
};

const PokemonEvolution = ({ evolution }) => {
  useEffect(() => {
    const evolutionContainer = document.querySelector('.evolution-container');
    evolutionContainer.addEventListener('wheel', (e) => {
      if (evolutionContainer.scrollWidth > evolutionContainer.clientWidth) {
        e.preventDefault();
        evolutionContainer.scrollLeft += e.deltaY / 3;
      }
    });
  }, []);

  return (
    <div className="evolution-container">
      <Chain node={evolution} />
    </div>
  );
};

export default PokemonEvolution;
