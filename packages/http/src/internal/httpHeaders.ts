import { HttpHeadersLike } from "./interfaces";

const bannedHeaders = [
  "accept-charset",
  "accept-encoding",
  "accept-language",
  "accept",
  "content-encoding",
  "content-length",
  "content-type",
  "etag",
  "expect",
  "expires",
  "if-match",
  "if-none-match",
  "if-modified-since",
  "if-unmodified-since",
  "if-range",
  "last-modified",
  "transfer-encoding",
  "vary",
];

/** @ignore */
export const writeHttpHeaders = (
  headers: HttpHeadersLike,
  writeHeader: (header: string, value: string) => void,
) => {
  const headerPairs = Object.entries(headers).filter(
    ([key]) => !bannedHeaders.includes(key.toLowerCase()),
  );

  for (const [header, value] of headerPairs) {
    writeHeader(header, value);
  }
};
