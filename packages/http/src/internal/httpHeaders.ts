import { HttpHeaders } from "./interfaces";

export const enum HttpStandardHeader {
  Accept = "Accept",
  AcceptCharset = "Accept-Charset",
  AcceptEncoding = "Accept-Encoding",
  AcceptLanguage = "Accept-Language",
  AcceptRange = "Accept-Ranges",
  Age = "Age",
  Allow = "Allow",
  Authorization = "Authorization",
  CacheControl = "Cache-Control",
  Connection = "Connection",
  ContentEncoding = "Content-Encoding",
  ContentLanguage = "Content-Language",
  ContentLength = "Content-Length",
  ContentLocation = "Content-Location",
  ContentMD5 = "Content-MD5",
  ContentRange = "Content-Range",
  ContentType = "Content-Type",
  Cookie = "Cookie",
  Date = "Date",
  ETag = "ETag",
  Expect = "Expect",
  Expires = "Expires",
  From = "From",
  Host = "Host",
  IfMatch = "If-Match",
  IfModifiedSince = "If-Modified-Since",
  IfNoneMatch = "If-None-Match",
  IfRange = "If-Range",
  IfUnmodifiedSince = "If-Unmodified-Since",
  LastModified = "Last-Modified",
  Location = "Location",
  MaxForwards = "Max-Forwards",
  Pragma = "Pragma",
  ProxyAuthenticate = "Proxy-Authenticate",
  ProxyAuthorization = "Proxy-Authorization",
  Range = "Range",
  Referer = "Referer",
  RetryAfter = "Retry-After",
  Server = "Server",
  SetCookie = "Set-Cookie",
  TE = "TE",
  railer = "Trailer",
  TransferEncoding = "Transfer-Encoding",
  Upgrade = "Upgrade",
  UserAgent = "User-Agent",
  Vary = "Vary",
  Via = "Via",
  Warning = "Warning",
  WWWAuthenticate = "WWW-Authenticate",
}

export const enum HttpExtensiondHeader {
  XForwardedProto = "X-Forwarded-Proto",
  XForwardedHost = "X-Forwarded-Host",
  XHttpMethod = "X-HTTP-Method",
  XHttpMethodOverride = "X-HTTP-Method-Override",
  XMethodOverride = "X-Method-Override",
}

const bannedHeaders = [
  HttpStandardHeader.Accept,
  HttpStandardHeader.AcceptCharset,
  HttpStandardHeader.AcceptEncoding,
  HttpStandardHeader.AcceptLanguage,
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
].map(s => s.toLowerCase());

export function getHeaderValue(
  headers: HttpHeaders,
  key: HttpStandardHeader,
): string | undefined;

export function getHeaderValue(
  headers: HttpHeaders,
  key: HttpExtensiondHeader,
): string | undefined;

export function getHeaderValue(
  headers: HttpHeaders,
  key: string,
): string | undefined {
  return headers[key.toLowerCase()];
}

/** @ignore */
export function writeHttpHeaders(
  headers: HttpHeaders,
  writeHeader: (header: string, value: string) => void,
) {
  const headerPairs = Object.entries(headers).filter(
    ([key]) => !bannedHeaders.includes(key.toLowerCase()),
  );

  for (const [header, value] of headerPairs) {
    writeHeader(header, value);
  }
}
