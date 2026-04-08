import type { JSX } from "react";

export default function space(n: number): JSX.Element {
  return <span>{"\u00A0".repeat(n)}</span>;
}
