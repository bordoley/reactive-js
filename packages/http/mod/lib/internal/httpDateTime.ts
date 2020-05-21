import { none, Option } from "../../../../core/mod/lib/option.ts";
import { HttpHeaders } from "../http.ts";
import { getHeaderValue, HttpStandardHeader } from "./httpHeaders.ts";

export type HttpDateTime = number;

export const parseHttpDateTime = (v: string): Option<HttpDateTime> => {
  const asDate = new Date(v);
  const result = asDate.getTime();
  return v !== "" && !Number.isNaN(result) ? result : none;
};

export const httpDateTimeToString = (v: HttpDateTime): string => {
  const date = new Date(v);
  return date.toUTCString();
};

export const parseHttpDateTimeFromHeaders = (
  headers: HttpHeaders,
  header: HttpStandardHeader,
): Option<HttpDateTime> => {
  const headerValue = getHeaderValue(headers, header) ?? "";
  return parseHttpDateTime(headerValue);
};
