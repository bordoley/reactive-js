import { FlowableLike, fromValue } from "../../../../core/lib/flowable.ts";
import { Operator, Selector2, SideEffect2 } from "../../../../core/lib/functions.ts";
import { isSome } from "../../../../core/lib/option.ts";
import { writeHttpCacheControlHeader } from "./cacheDirective.ts";
import { writeHttpContentInfoHeaders } from "./httpContentInfo.ts";
import { writeHttpHeaders } from "./httpHeaders.ts";
import { writeHttpPreferenceHeaders } from "./httpPreferences.ts";
import { HttpMessage, MediaType } from "./interfaces.ts";
import { parseMediaTypeOrThrow } from "./mediaType.ts";

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

export const encodeHttpMessageWithCharset = (
  encode: Selector2<string, string, Uint8Array>,
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

export const decodeHttpMessageWithCharset = (
  decode: Selector2<Uint8Array, string, string>,
): Operator<HttpMessage<Uint8Array>, HttpMessage<string>> => ({
  contentInfo,
  ...msg
}) => {
  const params = contentInfo?.contentType?.params ?? {};
  const charset = params["charset"] ?? "utf-8";

  const body = decode(msg.body, charset);

  return {
    ...msg,
    body,
  };
};

export const toFlowableHttpMessage = <TBody>({
  body,
  ...msg
}: HttpMessage<TBody>): HttpMessage<FlowableLike<TBody>> => ({
  ...msg,
  body: fromValue(body),
});
