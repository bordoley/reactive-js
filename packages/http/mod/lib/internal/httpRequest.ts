import {
  Function1,
  SideEffect2,
  pipe,
  returns,
} from "../../../../core/mod/lib/functions.ts";
import { IOSourceLike, IOSourceOperator } from "../../../../core/mod/lib/io.ts";
import { isNone, isSome, none } from "../../../../core/mod/lib/option.ts";
import { map, reduceRight } from "../../../../core/mod/lib/readonlyArray.ts";
import {
  parseCacheDirectiveOrThrow,
  CacheDirective,
  parseCacheControlFromHeaders,
} from "./cacheDirective.ts";
import { EntityTag } from "./entityTag.ts";
import {
  parseHttpContentInfoFromHeaders,
  createHttpContentInfo,
  HttpContentEncoding,
} from "./httpContentInfo.ts";
import { HttpDateTime } from "./httpDateTime.ts";
import {
  HttpStandardHeader,
  filterHeaders,
  HttpHeaders,
  getHeaderValue,
} from "./httpHeaders.ts";
import {
  writeHttpMessageHeaders,
  encodeHttpMessageWithUtf8,
  toIOSourceHttpMessage,
  decodeHttpMessageWithCharset,
  HttpMessage,
  URILike,
} from "./httpMessage.ts";

import {
  parseHttpPreferencesFromHeaders,
  createHttpPreferences,
  MediaRange,
} from "./httpPreferences.ts";
import {
  writeHttpRequestPreconditionsHeaders,
  parseHttpRequestPreconditionsFromHeaders,
  createHttpRequestPreconditions,
  HttpRequestPreconditions,
} from "./httpRequestPreconditions.ts";
import {
  createHttpResponse,
  HttpResponse,
  HttpStatusCode,
} from "./httpResponse.ts";
import { MediaType } from "./mediaType.ts";

export const enum HttpMethod {
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type HttpRequest<T> = HttpMessage<T> & {
  // readonly authorization?: Credentials;

  readonly expectContinue: boolean;
  readonly method: HttpMethod;
  // readonly pragma: readonly CacheDirective[];
  readonly preconditions?: HttpRequestPreconditions;

  // readonly proxyAuthorization?: Credentials
  // readonly referer?: URILike;
  readonly uri: URILike;
  // readonly userAgent?: UserAgent;
  // referer
  readonly httpVersionMajor: number;
  readonly httpVersionMinor: number;
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
const parseExpectFromHeaders = (headers: HttpHeaders): boolean => {
  const rawExpectHeader = getHeaderValue(headers, HttpStandardHeader.Expect);
  return rawExpectHeader === "100-continue";
};

export const createHttpRequest = <T>({
  body,
  cacheControl,
  contentInfo,
  expectContinue,
  headers = {},
  httpVersionMajor = 1,
  httpVersionMinor = 1,
  method,
  preconditions,
  preferences,
  uri,
  ...rest
}: {
  body: T;
  cacheControl?: readonly (string | CacheDirective)[];
  contentInfo?: {
    contentEncodings?: readonly HttpContentEncoding[];
    contentLength?: number;
    contentType: MediaType | string;
  };
  expectContinue?: boolean;
  headers?: HttpHeaders;
  httpVersionMajor?: number;
  httpVersionMinor?: number;
  method: HttpMethod;
  preconditions?: {
    ifMatch?: readonly (string | EntityTag)[] | "*";
    ifModifiedSince?: string | HttpDateTime | Date;
    ifNoneMatch?: readonly (string | EntityTag)[] | "*";
    ifUnmodifiedSince?: string | HttpDateTime | Date;
    ifRange?: string | EntityTag | HttpDateTime | Date;
  };
  preferences?: {
    acceptedCharsets?: readonly string[];
    acceptedEncodings?: readonly HttpContentEncoding[];
    acceptedLanguages?: readonly string[];
    acceptedMediaRanges?: readonly (string | MediaRange)[];
  };
  uri: string | URILike;
}): HttpRequest<T> => ({
  ...rest,
  body,
  cacheControl: isSome(cacheControl)
    ? pipe(
        cacheControl,
        map(cc =>
          typeof cc === "string" ? parseCacheDirectiveOrThrow(cc) : cc,
        ),
      )
    : parseCacheControlFromHeaders(headers),
  contentInfo: isSome(contentInfo)
    ? createHttpContentInfo(contentInfo)
    : parseHttpContentInfoFromHeaders(headers),
  expectContinue: isSome(expectContinue)
    ? expectContinue
    : parseExpectFromHeaders(headers),
  headers: filterHeaders(headers),
  httpVersionMajor: httpVersionMajor,
  httpVersionMinor: httpVersionMinor,
  method,
  preconditions: isSome(preconditions)
    ? createHttpRequestPreconditions(preconditions)
    : parseHttpRequestPreconditionsFromHeaders(headers),
  preferences: isSome(preferences)
    ? createHttpPreferences(preferences)
    : parseHttpPreferencesFromHeaders(headers),
  uri: typeof uri === "string" ? new URL(uri) : uri,
});

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
    statusCode === HttpStatusCode.SeeOther ||
    ((statusCode === HttpStatusCode.MovedPermanently ||
      HttpStatusCode.Found === 302) &&
      method === HttpMethod.POST);

  return {
    ...request,
    content: redirectToGet ? none : contentInfo,
    method: redirectToGet ? HttpMethod.GET : method,

    // This function is only called if location is undefined.
    uri: location as URILike,
  };
};

export const writeHttpRequestHeaders = <T>(
  request: HttpRequest<T>,
  writeHeader: SideEffect2<string, string>,
): void => {
  const { expectContinue, preconditions } = request;

  if (expectContinue) {
    writeHeader(HttpStandardHeader.Expect, "100-continue");
  }

  if (isSome(preconditions)) {
    writeHttpRequestPreconditionsHeaders(preconditions, writeHeader);
  }

  writeHttpMessageHeaders(request, writeHeader);
};

export const httpRequestToUntypedHeaders = (
  request: HttpRequest<unknown>,
): { [key: string]: string } => {
  const headers: { [key: string]: string } = {};
  writeHttpRequestHeaders(
    request,
    (header: string, value: string) => (headers[header] = value),
  );
  return headers;
};

export const encodeHttpRequestWithUtf8: Function1<
  HttpRequest<string>,
  HttpRequest<Uint8Array>
> = (encodeHttpMessageWithUtf8 as unknown) as Function1<
  HttpRequest<string>,
  HttpRequest<Uint8Array>
>;

export const decodeHttpRequestWithCharset: Function1<
  HttpRequest<Uint8Array>,
  HttpRequest<string>
> = (decodeHttpMessageWithCharset as unknown) as Function1<
  HttpRequest<Uint8Array>,
  HttpRequest<string>
>;

export const toIOSourceHttpRequest = <TBody>(
  req: HttpRequest<TBody>,
): HttpRequest<IOSourceLike<TBody>> =>
  toIOSourceHttpMessage(req) as HttpRequest<IOSourceLike<TBody>>;

export const decodeHttpRequestContent = (decoderProvider: {
  [key: string]: IOSourceOperator<Uint8Array, Uint8Array>;
}): Function1<
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
            statusCode: HttpStatusCode.UnsupportedMediaType,
            body: none,
          });
        }
        return decoder;
      }),
      reduceRight(
        (acc: IOSourceLike<Uint8Array>, decoder) => decoder(acc),
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
