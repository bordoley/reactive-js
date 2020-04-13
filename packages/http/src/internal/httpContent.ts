import { httpContentEncodings } from "./httpContentEncodings";
import { getHeaderValue, HttpStandardHeader } from "./httpHeaders";
import {
  HttpContentLike,
  HttpHeadersLike,
  HttpContentEncoding,
} from "./interfaces";
import { parseMediaType, mediaTypeToString } from "./mediaType";

/** @ignore */
export const parseHttpContentFromHeaders = <T>(
  headers: HttpHeadersLike,
  body: T,
): HttpContentLike<T> | undefined => {
  const contentEncodingString =
    getHeaderValue(headers, HttpStandardHeader.ContentEncoding) || "";
  const contentEncodings = contentEncodingString
    .split(",")
    .map(x => x.trim())
    .filter(x =>
      httpContentEncodings.includes(x as HttpContentEncoding),
    ) as readonly HttpContentEncoding[];

  const contentLengthHeader =
    getHeaderValue(headers, HttpStandardHeader.ContentLength) || "0";
  const contentLength = ~~contentLengthHeader;

  const contentType = parseMediaType(
    getHeaderValue(headers, HttpStandardHeader.ContentType) || "",
  );

  return contentType === undefined
    ? undefined
    : {
        body,
        contentEncodings,
        contentLength,
        contentType,
      };
};

/** @ignore */
export const writeHttpContentHeaders = <T>(
  content: HttpContentLike<T>,
  writeHeader: (header: string, value: string) => void,
) => {
  const { contentLength, contentType, contentEncodings } = content;
  if (contentLength > 0) {
    writeHeader(HttpStandardHeader.ContentLength, contentLength.toString(10));
  }

  writeHeader(HttpStandardHeader.ContentType, mediaTypeToString(contentType));

  if (contentEncodings.length > 0) {
    writeHeader(HttpStandardHeader.ContentEncoding, contentEncodings.join(","));
  }
};
