import { SideEffect2, pipe } from "../functions";
import { HttpExtensionHeader, HttpHeaders, HttpStandardHeader } from "../http";
import { Option } from "../option";
import { map } from "../readonlyArray";

const bannedHeaders = pipe(
  [
    HttpStandardHeader.Accept,
    HttpStandardHeader.AcceptCharset,
    HttpStandardHeader.AcceptEncoding,
    HttpStandardHeader.AcceptLanguage,
    HttpStandardHeader.CacheControl,
    HttpStandardHeader.ContentEncoding,
    HttpStandardHeader.ContentLength,
    HttpStandardHeader.ContentType,
    HttpStandardHeader.ETag,
    HttpStandardHeader.Expect,
    HttpStandardHeader.Expires,
    HttpStandardHeader.IfMatch,
    HttpStandardHeader.IfNoneMatch,
    HttpStandardHeader.IfModifiedSince,
    HttpStandardHeader.IfUnmodifiedSince,
    HttpStandardHeader.IfRange,
    HttpStandardHeader.LastModified,
    HttpStandardHeader.TransferEncoding,
    HttpStandardHeader.Vary,
  ],
  map(s => s.toLowerCase()),
);

export function getHeaderValue(
  headers: HttpHeaders,
  key: HttpStandardHeader,
): Option<string>;

export function getHeaderValue(
  headers: HttpHeaders,
  key: HttpExtensionHeader,
): Option<string>;

export function getHeaderValue(
  headers: HttpHeaders,
  key: string,
): Option<string> {
  return headers[key] ?? headers[key.toLowerCase()];
}

export const writeHttpHeaders = (
  headers: HttpHeaders,
  writeHeader: SideEffect2<string, string>,
) => {
  for (const header in headers) {
    if (
      headers.hasOwnProperty(header) &&
      !bannedHeaders.includes(header.toLowerCase())
    ) {
      writeHeader(header, headers[header]);
    }
  }
};

export const filterHeaders = (headers: HttpHeaders): HttpHeaders => {
  const result: { [key: string]: string } = {};
  const writeHeader = (k: string, v: string) => {
    result[k] = v;
  };
  writeHttpHeaders(headers, writeHeader);
  return result;
};
