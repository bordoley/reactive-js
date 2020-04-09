import { HttpDateTime } from "./interfaces";

/** @ignore */
export const parseHttpDateTime = (v: string): HttpDateTime | undefined => {
  const asDate = new Date(v);
  const result = asDate.getTime();
  return v !== "" && !Number.isNaN(result) ? result : undefined;
};

/** @ignore */
export const serializeHttpDateTime = (v: HttpDateTime): string => {
  const date = new Date(v);
  return date.toUTCString();
};
