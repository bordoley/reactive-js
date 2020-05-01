import { HttpMessage, MediaType } from "./interfaces";
import { writeHttpCacheControlHeader } from "./cacheDirective";
import { writeHttpContentInfoHeaders } from "./httpContentInfo";
import { isSome } from "../../option";
import { writeHttpPreferenceHeaders } from "./httpPreferences";
import { writeHttpHeaders } from "./httpHeaders";
import { Operator } from "../../functions";
import { FlowableLike, ofValue } from "../../flowable";
import { parseMediaTypeOrThrow } from "./mediaType";

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
