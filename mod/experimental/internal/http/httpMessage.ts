import { SideEffect2, pipe, raise } from "../../../functions.ts";
import { IOSourceLike, fromValue } from "../../../io.ts";
import { isSome, isNone } from "../../../option.ts";
import { map } from "../../../readonlyArray.ts";
import {
  writeHttpCacheControlHeader,
  CacheDirective,
  parseCacheDirectiveOrThrow,
  parseCacheControlFromHeaders,
} from "./cacheDirective.ts";
import {
  writeHttpContentInfoHeaders,
  HttpContentInfo,
  HttpContentEncoding,
  createHttpContentInfo,
  parseHttpContentInfoFromHeaders,
} from "./httpContentInfo.ts";
import { writeHttpHeaders, HttpHeaders, filterHeaders } from "./httpHeaders.ts";
import {
  writeHttpPreferenceHeaders,
  HttpPreferences,
  MediaRange,
  createHttpPreferences,
  parseHttpPreferencesFromHeaders,
} from "./httpPreferences.ts";
import { MediaType } from "./mediaType.ts";

// A Proxy readonly interface for the what-wg URL api.
export interface URILike {
  readonly hash: string;
  readonly host: string;
  readonly hostname: string;
  readonly href: string;
  readonly origin: string;
  readonly pathname: string;
  readonly port: string;
  readonly protocol: string;
  readonly search: string;

  toString(): string;
}

export type HttpMessage<T> = {
  readonly body: T;
  readonly cacheControl: readonly CacheDirective[];
  readonly contentInfo?: HttpContentInfo;
  readonly headers: HttpHeaders;
  readonly preferences?: HttpPreferences;
};

export type HttpMessageOptions<T> = {
  body: T;
  cacheControl?: readonly (string | CacheDirective)[];
  contentInfo?: {
    readonly contentEncodings?: readonly HttpContentEncoding[];
    readonly contentLength?: number;
    readonly contentType: MediaType | string;
  };
  headers?: HttpHeaders;
  preferences?: {
    readonly acceptedCharsets?: readonly string[];
    readonly acceptedEncodings?: readonly HttpContentEncoding[];
    readonly acceptedLanguages?: readonly string[];
    readonly acceptedMediaRanges?: readonly (string | MediaRange)[];
  };
};

export const createHttpMessage = <T>({
  body,
  cacheControl,
  contentInfo,
  headers = {},
  preferences,
  ...rest
}: HttpMessageOptions<T>): HttpMessage<T> => ({
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
  headers: filterHeaders(headers ?? {}),
  preferences: isSome(preferences)
    ? createHttpPreferences(preferences)
    : parseHttpPreferencesFromHeaders(headers),
});

export const writeHttpMessageHeaders = <T>(
  { cacheControl, contentInfo, headers, preferences }: HttpMessage<T>,
  writeHeader: SideEffect2<string, string>,
): void => {
  writeHttpCacheControlHeader(cacheControl, writeHeader);

  if (isSome(contentInfo)) {
    writeHttpContentInfoHeaders(contentInfo, writeHeader);
  }

  if (isSome(preferences)) {
    writeHttpPreferenceHeaders(preferences, writeHeader);
  }

  writeHttpHeaders(headers, writeHeader);
};

export const encodeHttpMessageWithUtf8 = ({
  contentInfo: contentInfoOption,
  ...msg
}: HttpMessage<string>): HttpMessage<Uint8Array> => {
  const contentInfo = isNone(contentInfoOption)
    ? raise<HttpContentInfo>("HttpMessage has no contentInfo")
    : contentInfoOption;

  const { contentType } = contentInfo;
  const textEncoder = new TextEncoder();

  return {
    ...msg,
    body: textEncoder.encode(msg.body),
    contentInfo: {
      ...contentInfo,
      contentType: {
        ...contentType,
        params: {
          ...contentType.params,
          charset: "utf-8",
        },
      },
    },
  };
};

export const decodeHttpMessageWithCharset = ({
  contentInfo,
  ...msg
}: HttpMessage<Uint8Array>): HttpMessage<string> => {
  if (isNone(contentInfo)) {
    return {
      ...msg,
      body: "",
    };
  } else {
    const { charset = "utf-8" } = contentInfo.contentType.params;
    const textDecoder = new TextDecoder(charset);
    const body = textDecoder.decode(msg.body);

    return {
      ...msg,
      body,
    };
  }
};

export const toIOSourceHttpMessage = <TBody>({
  body,
  ...msg
}: HttpMessage<TBody>): HttpMessage<IOSourceLike<TBody>> => ({
  ...msg,
  body: fromValue()(body),
});
