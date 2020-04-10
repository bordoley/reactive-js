import { httpContentEncodings } from "./httpContentEncodings";
import {
  HttpContentLike,
  HttpHeadersLike,
  HttpContentEncoding,
} from "./interfaces";
import { getHeaderValue, HttpStandardHeader } from "./httpHeaders";

/** @ignore */
export const parseHttpContentFromHeaders = <T>(
  headers: HttpHeadersLike,
  body: T,
): HttpContentLike<T> | undefined => {
  const contentEncodingString = getHeaderValue(
    headers,
    HttpStandardHeader.ContentEncoding,
    "",
  );
  const contentEncodings = contentEncodingString
    .split(",")
    .map(x => x.trim())
    .filter(x =>
      httpContentEncodings.includes(x as HttpContentEncoding),
    ) as readonly HttpContentEncoding[];

  const contentLengthHeader = getHeaderValue(
    headers,
    HttpStandardHeader.ContentLength,
    "0",
  );
  const contentLength = ~~contentLengthHeader;

  const contentType = getHeaderValue(
    headers,
    HttpStandardHeader.ContentType,
    "",
  );
  const isUndefined = contentType === "" || contentLength === 0;

  return isUndefined
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

  if (contentType.length > 0) {
    writeHeader(HttpStandardHeader.ContentType, contentType);
  }

  if (contentEncodings.length > 0) {
    writeHeader(HttpStandardHeader.ContentEncoding, contentEncodings.join(","));
  }
};
