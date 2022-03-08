export const abilitiesPreview = (state) => state.abilities.abilitiesPreview;
export const abilityByName = (name) => (state) =>
  state.abilities.abilities.find((a) => a.name === name);
export const selectedAbility = (state) => state.abilities.selectedAbility;
