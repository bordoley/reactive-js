import {
  FlowableLike,
  FlowableFunction,
  empty,
} from "@reactive-js/core/lib/flowable";
import { Function, SideEffect2 } from "@reactive-js/core/lib/functions";
import { isNone, isSome, none } from "@reactive-js/core/lib/option";
import {
  writeHttpMessageHeaders,
  encodeHttpMessageWithUtf8,
  toFlowableHttpMessage,
  decodeHttpMessageWithCharset,
} from "./HttpMessage";
import {
  parseCacheControlFromHeaders,
  parseCacheDirectiveOrThrow,
} from "./cacheDirective";
import { entityTagToString, parseETag, parseETagOrThrow } from "./entityTag";
import {
  parseHttpContentInfoFromHeaders,
  contentIsCompressible,
  createHttpContentInfo,
} from "./httpContentInfo";
import { parseHttpDateTime, httpDateTimeToString } from "./httpDateTime";
import {
  getHeaderValue,
  HttpStandardHeader,
  filterHeaders,
} from "./httpHeaders";
import {
  parseHttpPreferencesFromHeaders,
  createHttpPreferences,
} from "./httpPreferences";
import {
  HttpStatusCode,
  HttpHeaders,
  URILike,
  HttpResponse,
  HttpRequest,
  HttpMethod,
  EntityTag,
  CacheDirective,
  HttpContentEncoding,
  MediaRange,
  MediaType,
} from "./interfaces";

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

export const createHttpResponse = <T>({
  body,
  cacheControl,
  contentInfo,
  etag,
  expires,
  headers = {},
  lastModified,
  location,
  preferences,
  statusCode,
  vary,
  ...rest
}: {
  body: T;
  cacheControl?: readonly (string | CacheDirective)[];
  contentInfo?: {
    contentEncodings?: HttpContentEncoding[];
    contentLength?: number;
    contentType: MediaType | string;
  };
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
  statusCode: HttpStatusCode;
  vary?: readonly string[];
}): HttpResponse<T> => ({
  ...rest,
  body,
  cacheControl: (cacheControl ?? []).map(cc =>
    typeof cc === "string" ? parseCacheDirectiveOrThrow(cc) : cc,
  ),
  contentInfo: isSome(contentInfo)
    ? createHttpContentInfo(contentInfo)
    : parseHttpContentInfoFromHeaders(headers),
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
    : parseHttpPreferencesFromHeaders(headers),
  statusCode,
  vary: vary ?? [],
});

export const parseHttpResponseFromHeaders = <T>(
  statusCode: number,
  headers: HttpHeaders,
  body: T,
): HttpResponse<T> => {
  const cacheControl = parseCacheControlFromHeaders(headers);

  const contentInfo = parseHttpContentInfoFromHeaders(headers);

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
    body,
    cacheControl,
    contentInfo,
    etag,
    expires,
    lastModified,
    headers,
    location,
    preferences,
    statusCode,
    vary,
  };
};

export const writeHttpResponseHeaders = <T>(
  response: HttpResponse<T>,
  writeHeader: SideEffect2<string, string>,
) => {
  const { etag, expires, lastModified, location, vary } = response;

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

  if (vary.length > 0) {
    writeHeader(HttpStandardHeader.Vary, vary.join(","));
  }

  writeHttpMessageHeaders(response, writeHeader);
};

export const checkIfNotModified = <T>({
  cacheControl,
  method,
  preconditions,
}: HttpRequest<unknown>): Function<
  HttpResponse<T>,
  HttpResponse<T>
> => response => {
  const { etag, lastModified } = response;
  const { statusCode, contentInfo: _, ...responseWithoutContent } = response;

  const methodSupportsConditionalResponse =
    method === HttpMethod.GET || method === HttpMethod.HEAD;

  const statusCodeSupportsConditionalResponse =
    statusCode >= 200 && statusCode < 300;

  const isNoCacheRequest =
    cacheControl.findIndex(({ directive }) => directive === "no-cache") >= 0;

  const etagMatch =
    isSome(etag) &&
    (preconditions?.ifNoneMatch === "*" ||
      (preconditions?.ifNoneMatch ?? []).findIndex(
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

export const encodeHttpResponseWithUtf8: Function<
  HttpResponse<string>,
  HttpResponse<Uint8Array>
> = (encodeHttpMessageWithUtf8 as unknown) as Function<
  HttpResponse<string>,
  HttpResponse<Uint8Array>
>;

export const decodeHttpResponseWithCharset: Function<
  HttpResponse<Uint8Array>,
  HttpResponse<string>
> = (decodeHttpMessageWithCharset as unknown) as Function<
  HttpResponse<Uint8Array>,
  HttpResponse<string>
>;

export const toFlowableHttpResponse = <TBody>(
  resp: HttpResponse<TBody>,
): HttpResponse<FlowableLike<TBody>> =>
  toFlowableHttpMessage(resp) as HttpResponse<FlowableLike<TBody>>;

export const decodeHttpResponseContent = (decoderProvider: {
  [key: string]: FlowableFunction<Uint8Array, Uint8Array>;
}): Function<
  HttpResponse<FlowableLike<Uint8Array>>,
  HttpResponse<FlowableLike<Uint8Array>>
> => resp => {
  const { body, contentInfo, ...rest } = resp;

  if (isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
    const decoders = contentInfo.contentEncodings.map(
      encoding => decoderProvider[encoding],
    );
    const supportsDecodings = decoders.every(isSome);

    if (supportsDecodings) {
      return {
        ...rest,
        contentInfo: {
          contentType: contentInfo.contentType,
          contentEncodings: [],
          contentLength: -1,
        },
        body: decoders.reduceRight(
          (acc, decoder) => (decoder as any)(acc),
          body,
        ),
      };
    } else {
      return createHttpResponse({
        statusCode: HttpStatusCode.UnsupportedMediaType,
        body: empty<Uint8Array>(),
      });
    }
  } else {
    return resp;
  }
};

export const encodeHttpResponseContent = (
  encoderProvider: {
    [key: string]: FlowableFunction<Uint8Array, Uint8Array>;
  },
  db: {
    [key: string]: {
      compressible?: boolean;
    };
  } = {},
) => {
  const supportedEncodings = Object.keys(encoderProvider);

  const httpResponseIsCompressible = <T>(
    response: HttpResponse<T>,
  ): boolean => {
    // Don't compress for Cache-Control: no-transform
    // https://tools.ietf.org/html/rfc7234#section-5.2.2.4
    const noTransformResponse =
      response.cacheControl.findIndex(
        ({ directive }) => directive === "no-transform",
      ) >= 0;

    const { contentInfo } = response;
    return (
      !noTransformResponse &&
      isSome(contentInfo) &&
      contentIsCompressible(contentInfo, db)
    );
  };

  return (
    request: HttpRequest<unknown>,
  ): Function<
    HttpResponse<FlowableLike<Uint8Array>>,
    HttpResponse<FlowableLike<Uint8Array>>
  > => response => {
    const { body, contentInfo, vary } = response;

    if (isNone(contentInfo)) {
      return response;
    }

    const { preferences } = request;
    const shouldEncode = httpResponseIsCompressible(response);
    const acceptedEncodings =
      shouldEncode && isSome(preferences) ? preferences.acceptedEncodings : [];

    const contentEncoding = acceptedEncodings.find(encoding =>
      supportedEncodings.includes(encoding),
    );

    if (isNone(contentEncoding)) {
      return response;
    }

    const encode = isSome(contentEncoding)
      ? encoderProvider[contentEncoding]
      : none;

    if (isNone(encode)) {
      return response;
    }

    return {
      ...response,
      body: encode(body),
      contentInfo: {
        contentType: contentInfo.contentType,
        contentEncodings: [contentEncoding],
        contentLength: -1,
      },
      vary: [...vary, HttpStandardHeader.AcceptEncoding],
    };
  };
};
