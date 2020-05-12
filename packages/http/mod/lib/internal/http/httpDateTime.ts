import { none, Option } from "../../../../../core/mod/lib/option.ts";
import { HttpDateTime } from "./interfaces.ts";

export const parseHttpDateTime = (v: string): Option<HttpDateTime> => {
  const asDate = new Date(v);
  const result = asDate.getTime();
  return v !== "" && !Number.isNaN(result) ? result : none;
};

export const httpDateTimeToString = (v: HttpDateTime): string => {
  const date = new Date(v);
  return date.toUTCString();
};
