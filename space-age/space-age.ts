const EARTH_ORBITAL_SECS = 31557600;

const PLANET_ORBITAL_PERIOD_RELATIVE_TO_EARTH = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} as const;
type Planet = keyof typeof PLANET_ORBITAL_PERIOD_RELATIVE_TO_EARTH;

export function age(planet: Planet, seconds: number): number {
  return Number(
    (
      seconds /
      (PLANET_ORBITAL_PERIOD_RELATIVE_TO_EARTH[planet] * EARTH_ORBITAL_SECS)
    ).toFixed(2)
  );
}
