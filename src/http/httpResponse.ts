import {
  Function1,
  SideEffect2,
  Updater,
  pipe,
  returns,
  updaterReducer,
} from "../functions";
import {
  HttpHeaders,
  HttpRequest,
  HttpResponse,
  HttpResponseOptions,
  HttpStandardHeaders,
  URILike,
} from "../http";
import { IOSourceLike, IOSourceOperator, empty } from "../io";
import { isNone, isSome, none } from "../option";
import { everySatisfy, join, map, reduceRight } from "../readonlyArray";
import { ReadonlyObjectMap } from "../readonlyObjectMap";
import {
  entityTagToString,
  parseETagFromHeaders,
  parseETagOrThrow,
} from "./entityTag";
import { contentIsCompressible } from "./httpContentInfo";
import {
  httpDateTimeToString,
  parseHttpDateTime,
  parseHttpDateTimeFromHeaders,
} from "./httpDateTime";
import { getHeaderValue } from "./httpHeaders";
import {
  createHttpMessage,
  decodeHttpMessageWithCharset,
  encodeHttpMessageWithUtf8,
  toIOSourceHttpMessage,
  writeHttpMessageHeaders,
} from "./httpMessage";

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
  const locationValue = getHeaderValue(headers, HttpStandardHeaders.Location);
  return isSome(locationValue) ? new URL(locationValue) : none;
};

export const HttpStatusCodes = {
  Continue : 100,
  SwitchingProtocols : 101,
  Processing : 102,
  OK : 200,
  Created : 201,
  Accepted : 202,
  NonAuthoritativeInformation : 203,
  NoContent : 204,
  ResetContent : 205,
  PartialContent : 206,
  MultiStatus : 207,
  AlreadyReported : 208,
  IMUsed : 226,
  MultipleChoices : 300,
  MovedPermanently : 301,
  Found : 302,
  SeeOther : 303,
  NotModified : 304,
  UseProxy : 305,
  TemporaryRedirect : 307,
  PermanentRedirect : 308,
  BadRequest : 400,
  Unauthorized : 401,
  Forbidden : 403,
  NotFound : 404,
  MethodNotAllowed : 405,
  NotAcceptable : 406,
  ProxyAuthenticationRequired : 407,
  RequestTimeout : 408,
  Conflict : 409,
  Gone : 410,
  LengthRequired : 411,
  PreconditionFailed : 412,
  RequestEntityTooLarge : 413,
  RequestURITooLong : 414,
  UnsupportedMediaType : 415,
  RequestedRangeNotSatisfiable : 416,
  ExpectationFailed : 417,
  UnprocessableEntity : 422,
  Locked : 423,
  FailedDependency : 424,
  UpgradeRequired : 426,
  PreconditionRequired : 428,
  TooManyRequests : 429,
  RequestHeaderFieldsTooLarge : 431,
  UnavailableForLegalReasons : 451,
  InternalServerError : 500,
  NotImplemented : 501,
  BadGateway : 502,
  ServiceUnavailable : 503,
  GatewayTimeout : 504,
  HTTPVersionNotSupported : 505,
  VariantAlsoNegotiates : 506,
  InsufficientStorage : 507,
  LoopDetected : 508,
  NotExtended : 510,
  NetworkAuthenticationRequired : 511,
} as const;

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
        : parseHttpDateTimeFromHeaders(headers, HttpStandardHeaders.Expires),
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
            HttpStandardHeaders.LastModified,
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
    writeHeader(HttpStandardHeaders.ETag, entityTagToString(etag));
  }

  if (isSome(expires)) {
    writeHeader(HttpStandardHeaders.Expires, httpDateTimeToString(expires));
  }

  if (isSome(lastModified)) {
    writeHeader(
      HttpStandardHeaders.LastModified,
      httpDateTimeToString(lastModified),
    );
  }

  if (isSome(location)) {
    writeHeader(HttpStandardHeaders.Location, location.toString());
  }

  if (vary.length > 0) {
    writeHeader(HttpStandardHeaders.Vary, pipe(vary, join(",")));
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
    method === "GET" || method === "HEAD";

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
        statusCode: HttpStatusCodes.NotModified,
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

export const decodeHttpResponseContent = (
  decoderProvider: ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>>,
): Function1<
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
        statusCode: HttpStatusCodes.UnsupportedMediaType,
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
      vary: [...vary, HttpStandardHeaders.AcceptEncoding],
    };
  };
};

export const createHttpErrorResponse = (e: unknown): HttpResponse<unknown> => {
  const statusCode =
    e instanceof URIError
      ? HttpStatusCodes.BadRequest
      : HttpStatusCodes.InternalServerError;

  return createHttpResponse({
    statusCode,
    body: e,
  });
};

export const createRedirectHttpRequest = <
  THttpRequest extends HttpRequest<TReq>,
  TReq
>(
  request: THttpRequest,
  response: HttpResponse<unknown>,
): THttpRequest => {
  const { contentInfo, method } = request;
  const { location, statusCode } = response;

  const redirectToGet =
    statusCode === HttpStatusCodes.SeeOther ||
    ((statusCode === HttpStatusCodes.MovedPermanently ||
      HttpStatusCodes.Found === 302) &&
      method === "POST");

  return isSome(location)
    ? {
        ...request,
        content: redirectToGet ? none : contentInfo,
        method: redirectToGet ? "GET" : method,
        uri: location as URILike,
      }
    : request;
};

export const decodeHttpRequestContent = (
  decoderProvider: ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>>,
): Function1<
  HttpRequest<IOSourceLike<Uint8Array>>,
  HttpRequest<IOSourceLike<Uint8Array>>
> => req => {
  const { body, contentInfo, ...rest } = req;

  if (isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
    const newBody = pipe(
      contentInfo.contentEncodings,
      map(encoding => {
        const decoder = decoderProvider[encoding];
        if (isNone(decoder)) {
          throw createHttpResponse({
            statusCode: HttpStatusCodes.UnsupportedMediaType,
            body: none,
          });
        }
        return decoder;
      }),
      reduceRight<Updater<IOSourceLike<Uint8Array>>, IOSourceLike<Uint8Array>>(
        updaterReducer,
        returns(body),
      ),
    );

    return {
      ...rest,
      contentInfo: {
        contentType: contentInfo.contentType,
        contentEncodings: [],
        contentLength: -1,
      },
      body: newBody,
    };
  } else {
    return req;
  }
};
