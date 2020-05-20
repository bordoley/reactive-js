import { SideEffect2 } from "../../../../core/mod/lib/functions.ts";
import { IOSourceLike, fromValue } from "../../../../core/mod/lib/io.ts";
import { isSome, isNone } from "../../../../core/mod/lib/option.ts";
import { writeHttpCacheControlHeader, CacheDirective } from "./cacheDirective.ts";
import {
  writeHttpContentInfoHeaders,
  HttpContentInfo,
} from "./httpContentInfo.ts";
import { writeHttpHeaders, HttpHeaders } from "./httpHeaders.ts";
import { writeHttpPreferenceHeaders, HttpPreferences } from "./httpPreferences.ts";

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
  contentInfo,
  ...msg
}: HttpMessage<string>): HttpMessage<Uint8Array> => {
  if (isNone(contentInfo)) {
    throw new Error("HttpMessage has not contentInfo");
  }

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
