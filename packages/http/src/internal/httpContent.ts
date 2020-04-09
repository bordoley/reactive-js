import { HttpContentLike } from "./interfaces";

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
    writeHeader("Content-Encoding", contentEncodings.join(", "));
  }
};
