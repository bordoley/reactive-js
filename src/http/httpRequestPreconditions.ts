import { SideEffect2, pipe, raise } from "../functions";
import {
  EntityTag,
  HttpDateTime,
  HttpHeaders,
  HttpRequestPreconditions,
  HttpStandardHeader,
  HttpStandardHeaders,
} from "../http";
import { Option, isNone, isSome, none } from "../option";
import { join, map } from "../readonlyArray";
import {
  entityTagToString,
  pETag,
  parseETag,
  parseETagOrThrow,
} from "./entityTag";
import { httpDateTimeToString, parseHttpDateTime } from "./httpDateTime";
import { httpList } from "./httpGrammar";
import { getHeaderValue } from "./httpHeaders";
import { mapTo, or, pAsterisk, parseWith } from "./parserCombinators";

const writeEtagPreferenceHeader = (
  header: HttpStandardHeader,
  value: Option<readonly EntityTag[] | "*">,
  writeHeader: SideEffect2<string, string>,
) => {
  if (isSome(value)) {
    writeHeader(
      header,
      value !== "*" ? pipe(value, map(entityTagToString), join(",")) : "*",
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
  writeEtagPreferenceHeader(HttpStandardHeaders.IfMatch, ifMatch, writeHeader);
  writeEtagPreferenceHeader(
    HttpStandardHeaders.IfNoneMatch,
    ifNoneMatch,
    writeHeader,
  );
  writeDateHeader(
    HttpStandardHeaders.IfModifiedSince,
    ifModifiedSince,
    writeHeader,
  );
  writeDateHeader(
    HttpStandardHeaders.IfUnmodifiedSince,
    ifUnmodifiedSince,
    writeHeader,
  );

  if (isSome(ifRange)) {
    writeHeader(
      HttpStandardHeaders.IfRange,
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
    HttpStandardHeaders.IfMatch,
  );
  const ifNoneMatch = parseOptionalETagPreference(
    headers,
    HttpStandardHeaders.IfNoneMatch,
  );
  const ifModifiedSince = parseOptionalDatePreference(
    headers,
    HttpStandardHeaders.IfModifiedSince,
  );
  const ifUnmodifiedSince = parseOptionalDatePreference(
    headers,
    HttpStandardHeaders.IfUnmodifiedSince,
  );

  const ifRangeHeader = getHeaderValue(headers, HttpStandardHeaders.IfRange);
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
    raise();
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
