import { none, Option } from "../../option.ts";
import { HttpDateTime } from "./interfaces.ts";

/** @ignore */
export const parseHttpDateTime = (v: string): Option<HttpDateTime> => {
  const asDate = new Date(v);
  const result = asDate.getTime();
  return v !== "" && !Number.isNaN(result) ? result : none;
};

/** @ignore */
export const httpDateTimeToString = (v: HttpDateTime): string => {
  const date = new Date(v);
  return date.toUTCString();
};
