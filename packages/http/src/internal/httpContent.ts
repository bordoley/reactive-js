import { httpContentEncodings } from "./httpContentEncodings";
import {
  HttpContentLike,
  HttpHeadersLike,
  HttpContentEncoding,
} from "./interfaces";

/** @ignore */
export const parseHttpContentFromHeaders = <T>(
  headers: HttpHeadersLike,
  body: T,
): HttpContentLike<T> | undefined => {
  const contentEncodingString = headers["content-encoding"] || "";
  const contentEncodings = contentEncodingString
    .split(",")
    .map(x => x.trim())
    .filter(x =>
      httpContentEncodings.includes(x as HttpContentEncoding),
    ) as readonly HttpContentEncoding[];

  const contentLengthHeader = headers["content-length"] || "0";
  const contentLength = ~~contentLengthHeader;

  const contentType = headers["content-type"] || "";
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
    writeHeader("Content-Length", contentLength.toString(10));
  }

  if (contentType.length > 0) {
    writeHeader("Content-Type", contentType);
  }

  if (contentEncodings.length > 0) {
    writeHeader("Content-Encoding", contentEncodings.join(","));
  }
};
