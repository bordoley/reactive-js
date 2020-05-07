import { none, Option } from "@reactive-js/core/lib/option";
import { HttpDateTime } from "./interfaces";

export const parseHttpDateTime = (v: string): Option<HttpDateTime> => {
  const asDate = new Date(v);
  const result = asDate.getTime();
  return v !== "" && !Number.isNaN(result) ? result : none;
};

export const httpDateTimeToString = (v: HttpDateTime): string => {
  const date = new Date(v);
  return date.toUTCString();
};
