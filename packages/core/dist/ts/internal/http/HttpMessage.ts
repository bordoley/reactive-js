import { HttpMessage, MediaType } from "./interfaces.ts";
import { writeHttpCacheControlHeader } from "./cacheDirective.ts";
import { writeHttpContentInfoHeaders } from "./httpContentInfo.ts";
import { isSome } from "../../option.ts";
import { writeHttpPreferenceHeaders } from "./httpPreferences.ts";
import { writeHttpHeaders } from "./httpHeaders.ts";
import { Operator } from "../../functions.ts";
import { FlowableLike, ofValue } from "../../flowable.ts";
import { parseMediaTypeOrThrow } from "./mediaType.ts";

export const writeHttpMessageHeaders = <T>(
  { cacheControl, contentInfo, headers, preferences }: HttpMessage<T>,
  writeHeader: (header: string, value: string) => void,
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

export const encodeHttpMessageWithCharset = (
  encode: (v: string, charset: string) => Uint8Array,
  contentType: string | MediaType,
): Operator<HttpMessage<string>, HttpMessage<Uint8Array>> => {
  const parsedContentType =
    typeof contentType === "string"
      ? parseMediaTypeOrThrow(contentType)
      : contentType;

  const charset = parsedContentType.params["charset"] ?? "utf-8";

  return msg => {
    const body = encode(msg.body, charset);

    return {
      ...msg,
      body,
      contentInfo: {
        contentType: parsedContentType,
        contentLength: body.length,
        contentEncodings: [],
      },
    };
  };
};

export const toFlowableHttpMessage = <TBody>({
  body,
  ...msg
}: HttpMessage<TBody>): HttpMessage<FlowableLike<TBody>> => ({
  ...msg,
  body: ofValue(body),
});
