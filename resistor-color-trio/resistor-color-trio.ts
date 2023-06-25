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
const units = ["ohms", "kiloohms", "megaohms", "gigaohms"] as const;

export function decodedResistorValue([colour1, colour2, factor]: ColourCode[]) {
  const value =
    (resistorBandValue[colour1] * 10 + resistorBandValue[colour2]) *
    10 ** resistorBandValue[factor];

  const zeroCount: number = value
    .toString()
    .split("")
    .reduce((count: number, curr: string): number => {
      if (curr === "0") return count + 1;
      return count + curr === "0" ? 1 : 0;
    }, 0);
  const unitIndex = Math.floor(zeroCount / 3);

  return `${value / 10 ** (unitIndex * 3)} ${units[unitIndex]}`;
}
