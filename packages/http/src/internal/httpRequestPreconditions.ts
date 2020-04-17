import { isNone, isSome, none, Option } from "@reactive-js/option";
import {
  parseWith,
  pAsterisk,
  or,
  mapTo,
} from "@reactive-js/parser-combinators";
import { pipe } from "@reactive-js/pipe";
import { entityTagToString, pETag, parseETag } from "./entityTag";
import { httpDateTimeToString, parseHttpDateTime } from "./httpDateTime";
import { HttpStandardHeader, getHeaderValue } from "./httpHeaders";
import { httpList } from "./httpGrammar";
import {
  HttpRequestPreconditions,
  HttpHeaders,
  EntityTag,
  HttpDateTime,
} from "./interfaces";

const writeEtagPreferenceHeader = (
  header: HttpStandardHeader,
  value: Option<readonly EntityTag[] | "*">,
  writeHeader: (header: string, value: string) => void,
) => {
  if (isSome(value)) {
    writeHeader(
      header,
      Array.isArray(value) ? value.map(entityTagToString).join(",") : "*",
    );
  }
};

const writeDateHeader = (
  header: HttpStandardHeader,
  value: Option<HttpDateTime>,
  writeHeader: (header: string, value: string) => void,
) => {
  if (isSome(value)) {
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

  if (isSome(ifRange)) {
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
  parseWith,
);

const parseOptionalETagPreference = (
  headers: HttpHeaders,
  header: HttpStandardHeader,
) => {
  const value = getHeaderValue(headers, header);
  return (isSome(value) && parseETagPreference(value)) || none;
};

const parseOptionalDatePreference = (
  headers: HttpHeaders,
  header: HttpStandardHeader,
) => pipe(getHeaderValue(headers, header) || "", parseHttpDateTime);

/** @ignore */
export const parseHttpRequestPreconditionsFromHeaders = (
  headers: HttpHeaders,
): Option<HttpRequestPreconditions> => {
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
  const ifRange = isSome(ifRangeHeader)
    ? parseHttpDateTime(ifRangeHeader) || parseETag(ifRangeHeader)
    : none;

  const isUndefined =
    isNone(ifMatch) &&
    isNone(ifNoneMatch) &&
    isNone(ifModifiedSince) &&
    isNone(ifUnmodifiedSince) &&
    isNone(ifRangeHeader);

  return isUndefined
    ? none
    : {
        ifMatch,
        ifModifiedSince,
        ifNoneMatch,
        ifUnmodifiedSince,
        ifRange,
      };
};
