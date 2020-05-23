import {
  Function1,
  SideEffect2,
  pipe,
  returns,
  updaterReducer,
  Updater,
} from "../../../functions.ts";
import { IOSourceLike, IOSourceOperator, empty } from "../../../io.ts";
import { isNone, isSome, none } from "../../../option.ts";
import { everySatisfy, map, reduceRight, join } from "../../../readonlyArray.ts";
import {
  entityTagToString,
  parseETagOrThrow,
  EntityTag,
  parseETagFromHeaders,
} from "./entityTag.ts";
import { contentIsCompressible } from "./httpContentInfo.ts";
import {
  parseHttpDateTime,
  httpDateTimeToString,
  HttpDateTime,
  parseHttpDateTimeFromHeaders,
} from "./httpDateTime.ts";
import { getHeaderValue, HttpStandardHeader, HttpHeaders } from "./httpHeaders.ts";
import {
  writeHttpMessageHeaders,
  encodeHttpMessageWithUtf8,
  toIOSourceHttpMessage,
  decodeHttpMessageWithCharset,
  HttpMessage,
  URILike,
  HttpMessageOptions,
  createHttpMessage,
} from "./httpMessage.ts";
import { HttpRequest, HttpMethod } from "./httpRequest.ts";
import { ReadonlyObjectMap } from "../../../readonlyObjectMap.ts";

export const enum HttpStatusCode {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  RequestEntityTooLarge = 413,
  RequestURITooLong = 414,
  UnsupportedMediaType = 415,
  RequestedRangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
}

export type HttpResponse<T> = HttpMessage<T> & {
  // age:Option<TimeSpan>
  // allowed:Set<Method>
  // authenticate:Set<Challenge>

  // date:Option<DateTime>
  readonly etag?: EntityTag;
  readonly expires?: HttpDateTime;
  readonly lastModified?: HttpDateTime;
  // proxyAuthenticate:Set<Challenge>
  // retryAfter:Option<DateTime>
  // server:Option<Server>
  // warning:Warning list

  readonly location?: URILike;
  readonly statusCode: HttpStatusCode;
  readonly vary: readonly string[];
};

export type HttpResponseOptions<T> = HttpMessageOptions<T> & {
  etag?: string | EntityTag;
  expires?: number | string | Date;
  headers?: HttpHeaders;
  lastModified?: number | string | Date;
  location?: string | URILike;
  statusCode: HttpStatusCode;
  vary?: readonly string[];
};

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

const parseLocationFromHeaders = (headers: HttpHeaders) => {
  const locationValue = getHeaderValue(headers, HttpStandardHeader.Location);
  return isSome(locationValue) ? new URL(locationValue) : none;
};

export const createHttpResponse = <T>({
  etag,
  expires,
  headers = {},
  lastModified,
  location,
  statusCode,
  vary,
  ...rest
}: HttpResponseOptions<T>): HttpResponse<T> => {
  const options = {
    ...rest,
    etag:
      typeof etag === "string"
        ? parseETagOrThrow(etag)
        : isSome(etag)
        ? etag
        : parseETagFromHeaders(headers),
    expires:
      typeof expires === "string"
        ? parseHttpDateTime(expires)
        : expires instanceof Date
        ? expires.getTime()
        : isSome(expires)
        ? expires
        : parseHttpDateTimeFromHeaders(headers, HttpStandardHeader.Expires),
    headers,
    lastModified:
      typeof lastModified === "string"
        ? parseHttpDateTime(lastModified)
        : lastModified instanceof Date
        ? lastModified.getTime()
        : isSome(lastModified)
        ? lastModified
        : parseHttpDateTimeFromHeaders(
            headers,
            HttpStandardHeader.LastModified,
          ),
    location:
      typeof location === "string"
        ? new URL(location)
        : isSome(location)
        ? location
        : parseLocationFromHeaders(headers),
    statusCode,
    vary: vary ?? [],
  };

  return createHttpMessage(options) as HttpResponse<T>;
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
    writeHeader(HttpStandardHeader.Vary, pipe(vary, join(",")));
  }

  writeHttpMessageHeaders(response, writeHeader);
};

export const checkIfNotModified = <T>({
  cacheControl,
  method,
  preconditions,
}: HttpRequest<unknown>): Function1<
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

const _encodeHttpResponseWithUtf8 = (encodeHttpMessageWithUtf8 as unknown) as Function1<
  HttpResponse<string>,
  HttpResponse<Uint8Array>
>;
export const encodeHttpResponseWithUtf8: Function1<
  HttpResponse<string>,
  HttpResponse<Uint8Array>
> = _encodeHttpResponseWithUtf8;

const _decodeHttpResponseWithCharset = (decodeHttpMessageWithCharset as unknown) as Function1<
  HttpResponse<Uint8Array>,
  HttpResponse<string>
>;
export const decodeHttpResponseWithCharset: Function1<
  HttpResponse<Uint8Array>,
  HttpResponse<string>
> = _decodeHttpResponseWithCharset;

export const toIOSourceHttpResponse = <TBody>(
  resp: HttpResponse<TBody>,
): HttpResponse<IOSourceLike<TBody>> =>
  toIOSourceHttpMessage(resp) as HttpResponse<IOSourceLike<TBody>>;

export const decodeHttpResponseContent = (decoderProvider: ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>>): Function1<
  HttpResponse<IOSourceLike<Uint8Array>>,
  HttpResponse<IOSourceLike<Uint8Array>>
> => resp => {
  const { body, contentInfo, ...rest } = resp;

  if (isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
    const decoders = pipe(
      contentInfo.contentEncodings,
      map(encoding => decoderProvider[encoding]),
    );
    const supportsDecodings = pipe(decoders, everySatisfy(isSome));

    if (supportsDecodings) {
      return {
        ...rest,
        contentInfo: {
          contentType: contentInfo.contentType,
          contentEncodings: [],
          contentLength: -1,
        },
        body: pipe(decoders, reduceRight(updaterReducer, returns(body))),
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
  encoderProvider: ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>>,
  db: ReadonlyObjectMap<{
      compressible?: boolean;
  }> = {},
): Function1<
  HttpRequest<unknown>,
  Updater<HttpResponse<IOSourceLike<Uint8Array>>>
> => {
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

  return request => response => {
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

export const createHttpErrorResponse = (e: unknown): HttpResponse<unknown> => {
  const statusCode =
    e instanceof URIError
      ? HttpStatusCode.BadRequest
      : HttpStatusCode.InternalServerError;

  return createHttpResponse({
    statusCode,
    body: e,
  });
};
