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
type ColorCode = keyof typeof resistorBandValue;

export const COLORS = Object.keys(resistorBandValue) as ColorCode[];

export const colorCode = (code: ColorCode) => {
  return resistorBandValue[code];
};
