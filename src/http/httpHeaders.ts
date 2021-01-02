import { SideEffect2, pipe } from "../functions";
import { HttpExtensionHeader, HttpHeaders, HttpStandardHeader } from "../http";
import { Option } from "../option";
import { map } from "../readonlyArray";

export const HttpStandardHeaders = {
  Accept : "Accept",
  AcceptCharset : "Accept-Charset",
  AcceptEncoding : "Accept-Encoding",
  AcceptLanguage : "Accept-Language",
  AcceptRanges : "Accept-Ranges",
  Age : "Age",
  Allow : "Allow",
  Authorization : "Authorization",
  CacheControl : "Cache-Control",
  Connection : "Connection",
  ContentEncoding : "Content-Encoding",
  ContentLanguage : "Content-Language",
  ContentLength : "Content-Length",
  ContentLocation : "Content-Location",
  ContentMD5 : "Content-MD5",
  ContentRange : "Content-Range",
  ContentType : "Content-Type",
  Cookie : "Cookie",
  Date : "Date",
  ETag : "ETag",
  Expect : "Expect",
  Expires : "Expires",
  From : "From",
  Host : "Host",
  IfMatch : "If-Match",
  IfModifiedSince : "If-Modified-Since",
  IfNoneMatch : "If-None-Match",
  IfRange : "If-Range",
  IfUnmodifiedSince : "If-Unmodified-Since",
  LastModified : "Last-Modified",
  Location : "Location",
  MaxForwards : "Max-Forwards",
  Pragma : "Pragma",
  ProxyAuthenticate : "Proxy-Authenticate",
  ProxyAuthorization : "Proxy-Authorization",
  Range : "Range",
  Referer : "Referer",
  RetryAfter : "Retry-After",
  Server : "Server",
  SetCookie : "Set-Cookie",
  TE : "TE",
  Trailer : "Trailer",
  TransferEncoding : "Transfer-Encoding",
  Upgrade : "Upgrade",
  UserAgent : "User-Agent",
  Vary : "Vary",
  Via : "Via",
  Warning : "Warning",
  WWWAuthenticate : "WWW-Authenticate",
} as const;

export const HttpExtensionHeaders = {
  XForwardedProto : "X-Forwarded-Proto",
  XForwardedHost : "X-Forwarded-Host",
  XHttpMethod : "X-HTTP-Method",
  XHttpMethodOverride : "X-HTTP-Method-Override",
  XMethodOverride : "X-Method-Override",
};

const bannedHeaders = pipe(
  [
    HttpStandardHeaders.Accept,
    HttpStandardHeaders.AcceptCharset,
    HttpStandardHeaders.AcceptEncoding,
    HttpStandardHeaders.AcceptLanguage,
    HttpStandardHeaders.CacheControl,
    HttpStandardHeaders.ContentEncoding,
    HttpStandardHeaders.ContentLength,
    HttpStandardHeaders.ContentType,
    HttpStandardHeaders.ETag,
    HttpStandardHeaders.Expect,
    HttpStandardHeaders.Expires,
    HttpStandardHeaders.IfMatch,
    HttpStandardHeaders.IfNoneMatch,
    HttpStandardHeaders.IfModifiedSince,
    HttpStandardHeaders.IfUnmodifiedSince,
    HttpStandardHeaders.IfRange,
    HttpStandardHeaders.LastModified,
    HttpStandardHeaders.TransferEncoding,
    HttpStandardHeaders.Vary,
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
