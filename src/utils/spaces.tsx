import type { JSX } from "react";

const space1: JSX.Element = <span>&nbsp;</span>;
const space2: JSX.Element = <span>&nbsp;&nbsp;</span>;
const space3: JSX.Element = <span>&nbsp;&nbsp;&nbsp;</span>;

export default function space(n: number): JSX.Element {
  return <span>{"\u00A0".repeat(n)}</span>;
}

export { space1, space2, space3 };
