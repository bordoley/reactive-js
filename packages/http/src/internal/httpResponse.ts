import { isSome, none } from "@reactive-js/option";
import { Operator } from "@reactive-js/pipe";
import {
  HttpStatusCode,
  HttpHeaders,
  URILike,
  HttpResponse,
  HttpRequest,
  HttpMethod,
  HttpContentResponse,
  EntityTag,
  CacheDirective,
  HttpContentEncoding,
  MediaRange,
} from "./interfaces";
import {
  writeHttpContentHeaders,
  parseHttpContentFromHeaders,
  contentIsCompressible,
} from "./httpContent";
import { parseHttpDateTime, httpDateTimeToString } from "./httpDateTime";
import { entityTagToString, parseETag, parseETagOrThrow } from "./entityTag";
import {
  writeHttpHeaders,
  getHeaderValue,
  HttpStandardHeader,
  filterHeaders,
} from "./httpHeaders";
import {
  parseHttpPreferencesFromHeaders,
  writeHttpPreferenceHeaders,
  createHttpPreferences,
} from "./httpPreferences";
import {
  parseCacheControlFromHeaders,
  writeHttpCacheControlHeader,
  parseCacheDirectiveOrThrow,
} from "./cacheDirective";

declare class URL implements URILike {
  readonly hash: string;
  readonly host: string;
  readonly hostname: string;
  readonly href: string;
  readonly origin: string;
  readonly pathname: string;
  readonly port: string;
  readonly protocol: string;
  readonly search: string;
  constructor(uri: string);

  toString(): string;
}

export const createHttpResponse = <T>(
  statusCode: HttpStatusCode,
  {
    cacheControl,
    content,
    etag,
    expires,
    headers,
    lastModified,
    location,
    preferences,
    vary,
    ...rest
  }: {
    cacheControl?: readonly (string | CacheDirective)[];
    content?: T;
    etag?: string | EntityTag;
    expires?: number;
    headers?: HttpHeaders;
    lastModified?: number | string | Date;
    location?: string | URILike;
    preferences?: {
      acceptedCharsets?: readonly string[];
      acceptedEncodings?: readonly HttpContentEncoding[];
      acceptedLanguages?: readonly string[];
      acceptedMediaRanges?: readonly (string | MediaRange)[];
    };
    vary?: readonly string[];
  } = {},
): HttpResponse<T> => ({
  ...rest,
  cacheControl: (cacheControl ?? []).map(cc =>
    typeof cc === "string" ? parseCacheDirectiveOrThrow(cc) : cc,
  ),
  content,
  etag: typeof etag === "string" ? parseETagOrThrow(etag) : etag,
  expires,
  headers: filterHeaders(headers ?? {}),
  lastModified:
    typeof lastModified === "string"
      ? parseHttpDateTime(lastModified)
      : lastModified instanceof Date
      ? lastModified.getTime()
      : lastModified,
  location: typeof location === "string" ? new URL(location) : location,
  preferences: isSome(preferences)
    ? createHttpPreferences(preferences)
    : undefined,
  statusCode,
  vary: vary ?? [],
});

export const parseHttpResponseFromHeaders = <T>(
  statusCode: number,
  headers: HttpHeaders,
  body: T,
): HttpContentResponse<T> => {
  const cacheControl = parseCacheControlFromHeaders(headers);

  const content = parseHttpContentFromHeaders(headers, body);

  const etag = parseETag(
    getHeaderValue(headers, HttpStandardHeader.ETag) ?? "",
  );

  const expires = parseHttpDateTime(
    getHeaderValue(headers, HttpStandardHeader.Expires) ?? "",
  );

  const lastModified = parseHttpDateTime(
    getHeaderValue(headers, HttpStandardHeader.LastModified) ?? "",
  );

  const locationHeader = headers.location;
  const location = isSome(locationHeader) ? new URL(locationHeader) : none;

  const preferences = parseHttpPreferencesFromHeaders(headers);

  // We're not going to use this so just return empty string.
  const vary: readonly string[] = [];

  return {
    cacheControl,
    etag,
    expires,
    lastModified,
    content,
    headers,
    location,
    preferences,
    statusCode,
    vary,
  };
};

const writeCoreHttpResponseHeaders = <T>(
  {
    cacheControl,
    etag,
    expires,
    headers,
    lastModified,
    location,
    preferences,
    vary,
  }: HttpResponse<T>,
  writeHeader: (header: string, value: string) => void,
) => {
  writeHttpCacheControlHeader(cacheControl, writeHeader);

  if (isSome(etag)) {
    writeHeader(HttpStandardHeader.ETag, entityTagToString(etag));
  }

  if (isSome(expires)) {
    writeHeader(HttpStandardHeader.Expires, httpDateTimeToString(expires));
  }

  if (isSome(lastModified)) {
    writeHeader(
      HttpStandardHeader.LastModified,
      httpDateTimeToString(lastModified),
    );
  }

  if (isSome(location)) {
    writeHeader(HttpStandardHeader.Location, location.toString());
  }

  if (isSome(preferences)) {
    writeHttpPreferenceHeaders(preferences, writeHeader);
  }

  if (vary.length > 0) {
    writeHeader(HttpStandardHeader.Vary, vary.join(","));
  }

  writeHttpHeaders(headers, writeHeader);
};

export const writeHttpResponseHeaders = <T>(
  response: HttpContentResponse<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  const { content } = response;

  writeCoreHttpResponseHeaders(response, writeHeader);

  if (isSome(content)) {
    writeHttpContentHeaders(content, writeHeader);
  }
};

export const checkIfNotModified = <T>({
  cacheControl,
  method,
  preconditions,
}: HttpRequest<unknown>): Operator<
  HttpResponse<T>,
  HttpResponse<T>
> => response => {
  const { etag, lastModified } = response;
  const { statusCode, content: _, ...responseWithoutContent } = response;

  const methodSupportsConditionalResponse =
    method === HttpMethod.GET || method === HttpMethod.HEAD;

  const statusCodeSupportsConditionalResponse =
    statusCode >= 200 && statusCode < 300;

  const isNoCacheRequest =
    cacheControl.findIndex(({ directive }) => directive === "no-cache") >= 0;

  const etagMatch =
    isSome(etag) &&
    (preconditions?.ifNoneMatch === "*" ||
      (preconditions?.ifNoneMatch || []).findIndex(
        ({ tag }) => tag === etag.tag,
      ) >= 0);

  const notModifiedSince =
    (lastModified ?? Number.MAX_SAFE_INTEGER) <=
    (preconditions?.ifModifiedSince ?? Number.MIN_SAFE_INTEGER);

  const match =
    isSome(etag) &&
    isSome(preconditions?.ifNoneMatch) &&
    isSome(lastModified) &&
    isSome(preconditions?.ifModifiedSince)
      ? notModifiedSince && etagMatch
      : isSome(etag) && isSome(preconditions?.ifNoneMatch)
      ? etagMatch
      : notModifiedSince;

  return methodSupportsConditionalResponse &&
    statusCodeSupportsConditionalResponse &&
    !isNoCacheRequest &&
    match
    ? {
        ...responseWithoutContent,
        statusCode: HttpStatusCode.NotModified,
      }
    : response;
};

export const httpContentResponseIsCompressible = <T>(
  response: HttpContentResponse<T>,
  db: {
    [key: string]: {
      compressible?: boolean;
    },
  },
): boolean => {
  // Don't compress for Cache-Control: no-transform
  // https://tools.ietf.org/html/rfc7234#section-5.2.2.4
  const noTransformResponse = response.cacheControl.findIndex(({directive}) => directive === "no-transform") >= 0;

  const { content } = response;
  return !noTransformResponse && isSome(content) &&
    contentIsCompressible(content, db);
};