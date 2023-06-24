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

export function decodedValue(colourCodes: ColourCode[]) {
  return parseInt(
    colourCodes
      .slice(0, 2)
      .map((colourCode) => resistorBandValue[colourCode])
      .join("")
  );
}
