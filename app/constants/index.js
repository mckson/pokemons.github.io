export const postfixes = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
};

export const POKEMON_TYPE = {
  NORMAL: 0,
  FIGHTING: 1,
  FLYING: 2,
  POISON: 3,
  GROUND: 4,
  ROCK: 5,
  BUG: 6,
  GHOST: 7,
  STEEL: 8,
  FIRE: 9,
  WATER: 10,
  GRASS: 11,
  ELECTRIC: 12,
  PSYCHIC: 13,
  ICE: 14,
  DRAGON: 15,
  DARK: 16,
  FAIRY: 17,
  UNKNOWN: 18,
  SHADOW: 19,
};

export const POKEMON_TYPE_COLOR = {
  [POKEMON_TYPE.NORMAL]: '#aa9',
  [POKEMON_TYPE.FIGHTING]: '#b54',
  [POKEMON_TYPE.FLYING]: '#89f',
  [POKEMON_TYPE.POISON]: '#a59',
  [POKEMON_TYPE.GROUND]: '#db5',
  [POKEMON_TYPE.ROCK]: '#ba6',
  [POKEMON_TYPE.BUG]: '#ab2',
  [POKEMON_TYPE.GHOST]: '#66b',
  [POKEMON_TYPE.STEEL]: '#aab',
  [POKEMON_TYPE.FIRE]: '#f42',
  [POKEMON_TYPE.WATER]: '#39f',
  [POKEMON_TYPE.GRASS]: '#7c5',
  [POKEMON_TYPE.ELECTRIC]: '#fc3',
  [POKEMON_TYPE.PSYCHIC]: '#f59',
  [POKEMON_TYPE.ICE]: '#6cf',
  [POKEMON_TYPE.DRAGON]: '#76e',
  [POKEMON_TYPE.DARK]: '#754',
  [POKEMON_TYPE.FAIRY]: '#e9e',
  [POKEMON_TYPE.UNKNOWN]: '#727272',
  [POKEMON_TYPE.SHADOW]: '#404040',
};

export const MAX_CHARACTERISTIC_VALUE = 180;
export const STAT_TYPE = {
  EXTRA_SMALL: 0, // 0 - 29
  SMALL: 1, // 30 - 59
  MEDIUM: 2, // 60 - 89
  NORMAL: 3, // 90 - 119
  GOOD: 4, // 120 - 149
  COOL: 5, // 150 - 180
};

export const STAT_COLOR = {
  [STAT_TYPE.EXTRA_SMALL]: '#f34444',
  [STAT_TYPE.SMALL]: '#ff7f0f',
  [STAT_TYPE.MEDIUM]: '#ffdd57',
  [STAT_TYPE.NORMAL]: '#a0e515',
  [STAT_TYPE.GOOD]: '#23cd5e',
  [STAT_TYPE.COOL]: '#00c2b8',
};

export const getStatType = (stat) => {
  if (stat < 30) return STAT_TYPE.EXTRA_SMALL;
  if (stat < 60) return STAT_TYPE.SMALL;
  if (stat < 90) return STAT_TYPE.MEDIUM;
  if (stat < 120) return STAT_TYPE.NORMAL;
  if (stat < 150) return STAT_TYPE.GOOD;
  return STAT_TYPE.COOL;
};

export const getPokemonTypeByTypeName = (typeName) => {
  if (typeName === 'normal') return POKEMON_TYPE.NORMAL;
  if (typeName === 'fighting') return POKEMON_TYPE.FIGHTING;
  if (typeName === 'flying') return POKEMON_TYPE.FLYING;
  if (typeName === 'poison') return POKEMON_TYPE.POISON;
  if (typeName === 'ground') return POKEMON_TYPE.GROUND;
  if (typeName === 'rock') return POKEMON_TYPE.ROCK;
  if (typeName === 'bug') return POKEMON_TYPE.BUG;
  if (typeName === 'ghost') return POKEMON_TYPE.GHOST;
  if (typeName === 'steel') return POKEMON_TYPE.STEEL;
  if (typeName === 'fire') return POKEMON_TYPE.FIRE;
  if (typeName === 'water') return POKEMON_TYPE.WATER;
  if (typeName === 'grass') return POKEMON_TYPE.GRASS;
  if (typeName === 'electric') return POKEMON_TYPE.ELECTRIC;
  if (typeName === 'psychic') return POKEMON_TYPE.PSYCHIC;
  if (typeName === 'ice') return POKEMON_TYPE.ICE;
  if (typeName === 'dark') return POKEMON_TYPE.DARK;
  if (typeName === 'fairy') return POKEMON_TYPE.FAIRY;
  if (typeName === 'unknown') return POKEMON_TYPE.UNKNOWN;
  if (typeName === 'shadow') return POKEMON_TYPE.SHADOW;

  return POKEMON_TYPE.UNKNOWN;
};

export const EVOLUTION_TRIGGERS = {
  LEVEL_UP: { id: 1, name: 'level-up', label: 'level up' },
  TRADE: { id: 2, name: 'trade' },
  USE_ITEM: { id: 3, name: 'use-item', label: 'use' },
  SHED: { id: 4, name: 'shed' },
  SPIN: { id: 5, name: 'spin' },
  TOWER_OF_DARKNESS: { id: 6, name: 'tower-of-darkness' },
  TOWER_OF_WATERS: { id: 7, name: 'tower-of-waters' },
  THREE_CRITICAL_HITS: { id: 8, name: 'three-critical-hits' },
  TAKE_DAMAGE: { id: 9, name: 'take-damage' },
  OTHER: { id: 10, name: 'other' },
};

export const getEvolutionTriggerByName = (name) => {
  if (name === EVOLUTION_TRIGGERS.LEVEL_UP.name) return EVOLUTION_TRIGGERS.LEVEL_UP;
  if (name === EVOLUTION_TRIGGERS.TRADE.name) return EVOLUTION_TRIGGERS.TRADE;
  if (name === EVOLUTION_TRIGGERS.USE_ITEM.name) return EVOLUTION_TRIGGERS.USE_ITEM;
  if (name === EVOLUTION_TRIGGERS.SHED.name) return EVOLUTION_TRIGGERS.SHED;
  if (name === EVOLUTION_TRIGGERS.SPIN.name) return EVOLUTION_TRIGGERS.SPIN;
  if (name === EVOLUTION_TRIGGERS.TOWER_OF_DARKNESS.name)
    return EVOLUTION_TRIGGERS.TOWER_OF_DARKNESS;
  if (name === EVOLUTION_TRIGGERS.TOWER_OF_WATERS.name) return EVOLUTION_TRIGGERS.TOWER_OF_WATERS;
  if (name === EVOLUTION_TRIGGERS.THREE_CRITICAL_HITS.name)
    return EVOLUTION_TRIGGERS.THREE_CRITICAL_HITS;
  if (name === EVOLUTION_TRIGGERS.TAKE_DAMAGE.name) return EVOLUTION_TRIGGERS.TAKE_DAMAGE;

  return EVOLUTION_TRIGGERS.OTHER;
};
