import { HttpHeadersLike, HttpResponseLike, HttpRequestLike } from "@reactive-js/http";
import { HttpContentBodyLike } from "./httpContentBody";

const writeContentHeaders = (
  content: HttpContentBodyLike,
  writeHeader: (header: string, value: string) => void
) => {
  const { contentLength, contentType, contentEncodings } = content;
  if (contentLength > 0) {
    writeHeader("content-length", contentLength.toString(10));
  }

  if (contentType.length > 0) {
    writeHeader("content-type", contentType);
  }

  if (contentEncodings.length > 0) {
    writeHeader("content-encoding", contentEncodings.join(", "));
  }
};

const bannedHeaders = [
  "accept-encoding",
  "content-encoding",
  "content-length",
  "content-type",
  "expect",
  "vary",
];

const writeHeaders = (
  headers: HttpHeadersLike, 
  writeHeader: (header: string, value: string) => void
) => {
  const headerPairs = Object.entries(headers).filter(
    ([key]) => !bannedHeaders.includes(key.toLowerCase()),
  );

  for (const [header, value] of headerPairs) {
    writeHeader(header, String(value));
  }
};

/** @ignore */
export const writeRequestHeaders = (
  { acceptedEncodings, content, expectContinue, headers }: HttpRequestLike<HttpContentBodyLike>, 
  writeHeader: (header: string, value: string) => void,
): void => {
  if (acceptedEncodings.length > 0) {
    writeHeader("accept-encoding", acceptedEncodings.join(","));
  }

  if (expectContinue) {
    writeHeader("expect", "100-continue");
  }

  if (content !== undefined) {
    writeContentHeaders(content, writeHeader);
  }

  writeHeaders(headers, writeHeader);
}

/** @ignore */
export const writeResponseHeaders = (
  { content, headers, vary }: HttpResponseLike<HttpContentBodyLike>, 
  writeHeader: (header: string, value: string) => void
): void => {
  if (content !== undefined) {
    writeContentHeaders(content, writeHeader);
  }
  if (vary.length > 0) {
    writeHeader("vary", vary.join(","));
  }

  writeHeaders(headers, writeHeader);
};