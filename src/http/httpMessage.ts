import { SideEffect2, pipe, raise } from "../functions";
import { HttpContentInfo, HttpMessage, HttpMessageOptions } from "../http";
import { IOSourceLike, fromValue } from "../io";
import { isNone, isSome } from "../option";
import { map } from "../readonlyArray";
import {
  parseCacheControlFromHeaders,
  parseCacheDirectiveOrThrow,
  writeHttpCacheControlHeader,
} from "./cacheDirective";
import {
  createHttpContentInfo,
  parseHttpContentInfoFromHeaders,
  writeHttpContentInfoHeaders,
} from "./httpContentInfo";
import { filterHeaders, writeHttpHeaders } from "./httpHeaders";
import {
  createHttpPreferences,
  parseHttpPreferencesFromHeaders,
  writeHttpPreferenceHeaders,
} from "./httpPreferences";

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
