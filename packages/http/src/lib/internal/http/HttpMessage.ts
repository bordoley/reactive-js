import { FlowableLike, fromValue } from "@reactive-js/core/lib/flowable";
import { SideEffect2 } from "@reactive-js/core/lib/functions";
import { isSome, isNone } from "@reactive-js/core/lib/option";
import { writeHttpCacheControlHeader } from "./cacheDirective";
import { writeHttpContentInfoHeaders } from "./httpContentInfo";
import { writeHttpHeaders } from "./httpHeaders";
import { writeHttpPreferenceHeaders } from "./httpPreferences";
import { HttpMessage } from "./interfaces";

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

export const toFlowableHttpMessage = <TBody>({
  body,
  ...msg
}: HttpMessage<TBody>): HttpMessage<FlowableLike<TBody>> => ({
  ...msg,
  body: fromValue(body),
});
