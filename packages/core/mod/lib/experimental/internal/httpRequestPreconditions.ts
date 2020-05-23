import { pipe, SideEffect2 } from "../../functions.ts";
import { isNone, isSome, none, Option } from "../../option.ts";
import { join, map } from "../../readonlyArray.ts";
import { parseWith, pAsterisk, or, mapTo } from "../parserCombinators.ts";
import {
  entityTagToString,
  pETag,
  parseETag,
  parseETagOrThrow,
  EntityTag,
} from "./entityTag.ts";
import {
  httpDateTimeToString,
  parseHttpDateTime,
  HttpDateTime,
} from "./httpDateTime.ts";
import { httpList } from "./httpGrammar.ts";
import { HttpStandardHeader, getHeaderValue, HttpHeaders } from "./httpHeaders.ts";

export type HttpRequestPreconditions = {
  readonly ifMatch?: readonly EntityTag[] | "*";
  readonly ifModifiedSince?: HttpDateTime;
  readonly ifNoneMatch?: readonly EntityTag[] | "*";
  readonly ifUnmodifiedSince?: HttpDateTime;
  readonly ifRange?: EntityTag | HttpDateTime;
};

const writeEtagPreferenceHeader = (
  header: HttpStandardHeader,
  value: Option<readonly EntityTag[] | "*">,
  writeHeader: SideEffect2<string, string>,
) => {
  if (isSome(value)) {
    writeHeader(
      header,
      Array.isArray(value)
        ? pipe(value, map(entityTagToString), join(","))
        : "*",
    );
  }
};

const writeDateHeader = (
  header: HttpStandardHeader,
  value: Option<HttpDateTime>,
  writeHeader: SideEffect2<string, string>,
) => {
  if (isSome(value)) {
    writeHeader(header, httpDateTimeToString(value));
  }
};

export const writeHttpRequestPreconditionsHeaders = (
  {
    ifMatch,
    ifModifiedSince,
    ifNoneMatch,
    ifUnmodifiedSince,
    ifRange,
  }: HttpRequestPreconditions,
  writeHeader: SideEffect2<string, string>,
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
  return isSome(value) ? parseETagPreference(value) : none;
};

const parseOptionalDatePreference = (
  headers: HttpHeaders,
  header: HttpStandardHeader,
) => pipe(getHeaderValue(headers, header) ?? "", parseHttpDateTime);

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
    ? // FIXME: This is sketchy
      parseHttpDateTime(ifRangeHeader) ?? parseETag(ifRangeHeader)
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

const parseIfRange = (ifRange: string): Option<EntityTag | HttpDateTime> => {
  const etag = parseETag(ifRange);
  return isSome(etag) ? etag : parseHttpDateTime(ifRange);
};

export const createHttpRequestPreconditions = ({
  ifMatch,
  ifModifiedSince,
  ifNoneMatch,
  ifUnmodifiedSince,
  ifRange,
}: {
  ifMatch?: readonly (string | EntityTag)[] | "*";
  ifModifiedSince?: string | HttpDateTime | Date;
  ifNoneMatch?: readonly (string | EntityTag)[] | "*";
  ifUnmodifiedSince?: string | HttpDateTime | Date;
  ifRange?: string | EntityTag | HttpDateTime | Date;
}): HttpRequestPreconditions => {
  if (
    [
      ifMatch,
      ifModifiedSince,
      ifNoneMatch,
      ifUnmodifiedSince,
      ifRange,
    ].findIndex(isSome) < 0 ||
    (Array.isArray(ifMatch) && ifMatch.length === 0) ||
    (Array.isArray(ifNoneMatch) && ifNoneMatch.length === 0)
  ) {
    throw new Error();
  }

  return {
    ifMatch: Array.isArray(ifMatch)
      ? pipe(
          ifMatch,
          map(etag =>
            typeof etag === "string" ? parseETagOrThrow(etag) : etag,
          ),
        )
      : (ifMatch as "*"),
    ifModifiedSince:
      typeof ifModifiedSince === "string"
        ? parseHttpDateTime(ifModifiedSince)
        : ifModifiedSince instanceof Date
        ? ifModifiedSince.getTime()
        : ifModifiedSince,
    ifNoneMatch: Array.isArray(ifNoneMatch)
      ? pipe(
          ifNoneMatch,
          map(etag =>
            typeof etag === "string" ? parseETagOrThrow(etag) : etag,
          ),
        )
      : (ifNoneMatch as "*"),
    ifUnmodifiedSince:
      typeof ifUnmodifiedSince === "string"
        ? parseHttpDateTime(ifUnmodifiedSince)
        : ifUnmodifiedSince instanceof Date
        ? ifUnmodifiedSince.getTime()
        : ifUnmodifiedSince,
    ifRange:
      typeof ifRange === "string"
        ? parseIfRange(ifRange)
        : ifRange instanceof Date
        ? ifRange.getTime()
        : ifRange,
  };
};
