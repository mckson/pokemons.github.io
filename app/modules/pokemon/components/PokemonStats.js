import React from 'react';

import { getStatType, MAX_CHARACTERISTIC_VALUE, STAT_COLOR } from '../../../constants';
import ProgressBar from '../../shared/progressBar';

import './styles.scss';

const Stat = ({ name, value, maxValue = MAX_CHARACTERISTIC_VALUE }) => {
  const statType = getStatType(parseInt(value));
  const statColor = STAT_COLOR[statType];

  return (
    <div className="stat-container">
      <div className="stat-info-container">
        <div>{name}:</div>
        <div>{value}</div>
      </div>
      <ProgressBar current={value} max={maxValue} color={statColor} />
    </div>
  );
};

const PokemonStats = ({ stats }) => {
  const { hp, attack, defense, specialAttack, specialDefense, speed } = stats;

  return (
    <div>
      {hp && <Stat name={'HP'} value={hp} />}
      {attack && <Stat name={'Attack'} value={attack} />}
      {defense && <Stat name={'Defense'} value={defense} />}
      {specialAttack && <Stat name={'Sp. Atk'} value={specialAttack} />}
      {specialDefense && <Stat name={'Sp. Def'} value={specialDefense} />}
      {speed && <Stat name={'Speed'} value={speed} />}
      <div className="stat-info-container">
        <div>Total:</div>
        <div>{hp + attack + defense + specialAttack + specialDefense + speed}</div>
      </div>
    </div>
  );
};

export default PokemonStats;
