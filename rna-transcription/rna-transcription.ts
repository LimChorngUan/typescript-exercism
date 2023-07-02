const DNA_TO_RNA_COMPLEMENT = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
} as const;
type DNA = keyof typeof DNA_TO_RNA_COMPLEMENT;

export function toRna(dnaStrand: string): string {
  return dnaStrand.split("").reduce((rnaStrand, dna) => {
    if (!(dna in DNA_TO_RNA_COMPLEMENT)) {
      throw new Error("Invalid input DNA.");
    }
    return rnaStrand + DNA_TO_RNA_COMPLEMENT[dna as DNA];
  }, "")
}
