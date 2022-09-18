export type ECPContract = {
  tag: string;
  value: {
    d: string;
    v: number;
    stream:
      | "original"
      | "min_warning"
      | "min_danger"
      | "max_warning"
      | "max_danger";
  }[];
}[];
