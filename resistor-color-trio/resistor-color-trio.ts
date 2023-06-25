const resistorBandValue = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const;
type ColourCode = keyof typeof resistorBandValue;

const units = [
  [1 * 10 ** 9, "giga"],
  [1 * 10 ** 6, "mega"],
  [1 * 10 ** 3, "kilo"],
] as const;

export function decodedResistorValue([colour1, colour2, factor]: ColourCode[]) {
  const value =
    (resistorBandValue[colour1] * 10 + resistorBandValue[colour2]) *
    10 ** resistorBandValue[factor];

  const [divisor, unit] = units.find(([unitValue]) => value >= unitValue) ?? [1, ""]

  return `${value / divisor} ${unit}ohms`;
}
