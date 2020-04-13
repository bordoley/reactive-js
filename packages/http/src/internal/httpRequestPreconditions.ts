import {
  HttpRequestPreconditions,
  HttpHeaders,
  EntityTag,
  HttpDateTime,
} from "./interfaces";
import { entityTagToString, pETag, parseETag } from "./entityTag";
import { httpDateTimeToString, parseHttpDateTime } from "./httpDateTime";
import { HttpStandardHeader, getHeaderValue } from "./httpHeaders";
import { httpList } from "./httpGrammar";
import { pipe } from "@reactive-js/pipe";
import {
  parseWith,
  eof,
  pAsterisk,
  or,
  mapTo,
} from "@reactive-js/parser-combinators";

const writeEtagPreferenceHeader = (
  header: HttpStandardHeader,
  value: readonly EntityTag[] | "*" | undefined,
  writeHeader: (header: string, value: string) => void,
) => {
  if (value !== undefined) {
    writeHeader(
      header,
      Array.isArray(value) ? value.map(entityTagToString).join(",") : "*",
    );
  }
};

const writeDateHeader = (
  header: HttpStandardHeader,
  value: HttpDateTime | undefined,
  writeHeader: (header: string, value: string) => void,
) => {
  if (value !== undefined) {
    writeHeader(header, httpDateTimeToString(value));
  }
};

/** @ignore */
export const writeHttpRequestPreconditionsHeaders = (
  {
    ifMatch,
    ifModifiedSince,
    ifNoneMatch,
    ifUnmodifiedSince,
    ifRange,
  }: HttpRequestPreconditions,
  writeHeader: (header: string, value: string) => void,
) => {
  writeEtagPreferenceHeader(HttpStandardHeader.IfMatch, ifMatch, writeHeader);
  writeEtagPreferenceHeader(
    HttpStandardHeader.IfNoneMatch,
    ifNoneMatch,
    writeHeader,
  );
  writeDateHeader(
    HttpStandardHeader.IfModifiedSince,
    ifModifiedSince,
    writeHeader,
  );
  writeDateHeader(
    HttpStandardHeader.IfUnmodifiedSince,
    ifUnmodifiedSince,
    writeHeader,
  );

  if (ifRange !== undefined) {
    writeHeader(
      HttpStandardHeader.IfRange,
      typeof ifRange === "number"
        ? httpDateTimeToString(ifRange)
        : entityTagToString(ifRange),
    );
  }
};

const parseETagPreference = pipe(
  pETag,
  httpList,
  or(pipe(pAsterisk, mapTo<number, "*">("*"))),
  eof,
  parseWith,
);

const parseOptionalETagPreference = (
  headers: HttpHeaders,
  header: HttpStandardHeader,
) => {
  const value = getHeaderValue(headers, header);
  return (value !== undefined && parseETagPreference(value)) || undefined;
};

const parseOptionalDatePreference = (
  headers: HttpHeaders,
  header: HttpStandardHeader,
) => pipe(getHeaderValue(headers, header) || "", parseHttpDateTime);

/** @ignore */
export const parseHttpRequestPreconditionsFromHeaders = (
  headers: HttpHeaders,
): HttpRequestPreconditions | undefined => {
  const ifMatch = parseOptionalETagPreference(
    headers,
    HttpStandardHeader.IfMatch,
  );
  const ifNoneMatch = parseOptionalETagPreference(
    headers,
    HttpStandardHeader.IfNoneMatch,
  );
  const ifModifiedSince = parseOptionalDatePreference(
    headers,
    HttpStandardHeader.IfModifiedSince,
  );
  const ifUnmodifiedSince = parseOptionalDatePreference(
    headers,
    HttpStandardHeader.IfUnmodifiedSince,
  );

  const ifRangeHeader = getHeaderValue(headers, HttpStandardHeader.IfRange);
  const ifRange =
    ifRangeHeader !== undefined
      ? parseHttpDateTime(ifRangeHeader) || parseETag(ifRangeHeader)
      : undefined;

  const isUndefined =
    ifMatch === undefined &&
    ifNoneMatch === undefined &&
    ifModifiedSince === undefined &&
    ifUnmodifiedSince === undefined &&
    ifRangeHeader === undefined;

  return isUndefined
    ? undefined
    : {
        ifMatch,
        ifModifiedSince,
        ifNoneMatch,
        ifUnmodifiedSince,
        ifRange,
      };
};
