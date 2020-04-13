import { HttpRequestPreconditions, HttpHeaders } from "./interfaces";
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
  if (ifMatch !== undefined) {
    writeHeader(
      HttpStandardHeader.IfMatch,
      Array.isArray(ifMatch) ? ifMatch.map(entityTagToString).join(",") : "*",
    );
  }

  if (ifNoneMatch !== undefined) {
    writeHeader(
      HttpStandardHeader.IfNoneMatch,
      Array.isArray(ifNoneMatch)
        ? ifNoneMatch.map(entityTagToString).join(",")
        : "*",
    );
  }

  if (ifModifiedSince !== undefined) {
    writeHeader(
      HttpStandardHeader.IfModifiedSince,
      httpDateTimeToString(ifModifiedSince),
    );
  }

  if (ifUnmodifiedSince !== undefined) {
    writeHeader(
      HttpStandardHeader.IfUnmodifiedSince,
      httpDateTimeToString(ifUnmodifiedSince),
    );
  }

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

/** @ignore */
export const parseHttpRequestPreconditionsFromHeaders = (
  headers: HttpHeaders,
): HttpRequestPreconditions | undefined => {
  const ifMatchHeader = getHeaderValue(headers, HttpStandardHeader.IfMatch);
  const ifMatch =
    (ifMatchHeader !== undefined && parseETagPreference(ifMatchHeader)) ||
    undefined;

  const ifNoneMatchHeader = getHeaderValue(
    headers,
    HttpStandardHeader.IfNoneMatch,
  );
  const ifNoneMatch =
    (ifNoneMatchHeader !== undefined &&
      parseETagPreference(ifNoneMatchHeader)) ||
    undefined;

  const ifModifiedSince = pipe(
    getHeaderValue(headers, HttpStandardHeader.IfModifiedSince) || "",
    parseHttpDateTime,
  );

  const ifUnmodifiedSince = pipe(
    getHeaderValue(headers, HttpStandardHeader.IfUnmodifiedSince) || "",
    parseHttpDateTime,
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
