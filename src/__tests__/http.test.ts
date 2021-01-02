import { defer, pipe } from "../functions";
import {
  HttpRequest,
  HttpResponse,
  HttpStandardHeaders,
  HttpStatusCodes,
  checkIfNotModified,
  createHttpRequest,
  createHttpResponse,
  writeHttpRequestHeaders,
  writeHttpResponseHeaders,
} from "../http";
import { none } from "../option";
import { map } from "../readonlyArray";
import { describe, expectEquals, expectTrue, test } from "../testing";

const createHttpRequestTests = test("createHttpRequest", () => {
  const request = createHttpRequest({
    method: "GET",
    uri: "http://www.example.com",
    body: none,
    headers: {
      [HttpStandardHeaders.Accept]:
        "text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5",
      [HttpStandardHeaders.AcceptCharset]: "iso-8859-5, unicode-1-1;q=0.8",
      [HttpStandardHeaders.AcceptEncoding]:
        "gzip;q=1.0, identity; q=0.5, *;q=0",
      [HttpStandardHeaders.AcceptLanguage]: "da, en-gb;q=0.8, en;q=0.7",
      [HttpStandardHeaders.AcceptRanges]: "bytes",
      [HttpStandardHeaders.Age]: "2147483648",
      [HttpStandardHeaders.Allow]: "GET, HEAD, PUT",
      [HttpStandardHeaders.CacheControl]: "max-age=3, no-transform",
      [HttpStandardHeaders.Connection]: "close",
      [HttpStandardHeaders.ContentEncoding]: "gzip",
      [HttpStandardHeaders.ContentLanguage]: "mi, en",
      [HttpStandardHeaders.ContentLength]: "123",
      [HttpStandardHeaders.ContentLocation]: "http://www.example.com",
      [HttpStandardHeaders.ContentMD5]: "asdjbklsjdfs",
      [HttpStandardHeaders.ContentRange]: "bytes 0-499/1234",
      [HttpStandardHeaders.ContentType]: "application/json; charset=UTF-8",
      [HttpStandardHeaders.Date]: "Tue, 15 Nov 1994 08:12:31 GMT",
      [HttpStandardHeaders.ETag]: 'W/"foo"',
      [HttpStandardHeaders.Expect]: "100-continue",
      [HttpStandardHeaders.Expires]: "Thu, 01 Dec 1994 16:00:00 GMT",
      [HttpStandardHeaders.From]: "webmaster@w3.org",
      [HttpStandardHeaders.Host]: "www.w3.org",
      [HttpStandardHeaders.IfMatch]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
      [HttpStandardHeaders.IfModifiedSince]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeaders.IfNoneMatch]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
      [HttpStandardHeaders.IfRange]: '"xyzzy"',
      [HttpStandardHeaders.IfUnmodifiedSince]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeaders.LastModified]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeaders.Location]: "http://www.example.com/path",
      [HttpStandardHeaders.MaxForwards]: "10",
      [HttpStandardHeaders.Pragma]: "no-cache",
      [HttpStandardHeaders.Range]: "bytes=0-499",
      [HttpStandardHeaders.Referer]:
        "http://www.w3.org/hypertext/DataSources/Overview.html",
      [HttpStandardHeaders.RetryAfter]: "120",
      [HttpStandardHeaders.Server]: "CERN/3.0 libwww/2.17",
      [HttpStandardHeaders.Upgrade]: "HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11",
      [HttpStandardHeaders.UserAgent]: "CERN-LineMode/2.15 libwww/2.17b3",
      [HttpStandardHeaders.Vary]: "Content-Encoding",
    },
  });

  const headers: { [key: string]: string } = {};
  writeHttpRequestHeaders(request, (key, value) => {
    headers[key] = value;
  });
  expectTrue(request.expectContinue);
});

const createHttpResponseTests = test("createHttpRequest", () => {
  const response = createHttpResponse({
    statusCode: HttpStatusCodes.OK,
    body: none,
    headers: {
      [HttpStandardHeaders.Accept]:
        "text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5",
      [HttpStandardHeaders.AcceptCharset]: "iso-8859-5, unicode-1-1;q=0.8",
      [HttpStandardHeaders.AcceptEncoding]:
        "gzip;q=1.0, identity; q=0.5, *;q=0",
      [HttpStandardHeaders.AcceptLanguage]: "da, en-gb;q=0.8, en;q=0.7",
      [HttpStandardHeaders.AcceptRanges]: "bytes",
      [HttpStandardHeaders.Age]: "2147483648",
      [HttpStandardHeaders.Allow]: "GET, HEAD, PUT",
      [HttpStandardHeaders.CacheControl]: "max-age=3, no-transform",
      [HttpStandardHeaders.Connection]: "close",
      [HttpStandardHeaders.ContentEncoding]: "gzip",
      [HttpStandardHeaders.ContentLanguage]: "mi, en",
      [HttpStandardHeaders.ContentLength]: "123",
      [HttpStandardHeaders.ContentLocation]: "http://www.example.com",
      [HttpStandardHeaders.ContentMD5]: "asdjbklsjdfs",
      [HttpStandardHeaders.ContentRange]: "bytes 0-499/1234",
      [HttpStandardHeaders.ContentType]: "application/json; charset=UTF-8",
      [HttpStandardHeaders.Date]: "Tue, 15 Nov 1994 08:12:31 GMT",
      [HttpStandardHeaders.ETag]: 'W/"foo"',
      [HttpStandardHeaders.Expect]: "100-continue",
      [HttpStandardHeaders.Expires]: "Thu, 01 Dec 1994 16:00:00 GMT",
      [HttpStandardHeaders.From]: "webmaster@w3.org",
      [HttpStandardHeaders.Host]: "www.w3.org",
      [HttpStandardHeaders.IfMatch]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
      [HttpStandardHeaders.IfModifiedSince]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeaders.IfNoneMatch]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
      [HttpStandardHeaders.IfRange]: '"xyzzy"',
      [HttpStandardHeaders.IfUnmodifiedSince]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeaders.LastModified]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeaders.Location]: "http://www.example.com/path",
      [HttpStandardHeaders.MaxForwards]: "10",
      [HttpStandardHeaders.Pragma]: "no-cache",
      [HttpStandardHeaders.Range]: "bytes=0-499",
      [HttpStandardHeaders.Referer]:
        "http://www.w3.org/hypertext/DataSources/Overview.html",
      [HttpStandardHeaders.RetryAfter]: "120",
      [HttpStandardHeaders.Server]: "CERN/3.0 libwww/2.17",
      [HttpStandardHeaders.Upgrade]: "HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11",
      [HttpStandardHeaders.UserAgent]: "CERN-LineMode/2.15 libwww/2.17b3",
      [HttpStandardHeaders.Vary]: "Content-Encoding",
    },
  });

  const headers: { [key: string]: string } = {};
  writeHttpResponseHeaders(response, (key, value) => {
    headers[key] = value;
  });
});

const checkIfNotModifiedTests = pipe(
  [
    [
      "when a non-conditional GET is performed",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
      }),
      createHttpResponse({ statusCode: HttpStatusCodes.OK, body: none }),
      HttpStatusCodes.OK,
    ],
    [
      "when ETags match",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCodes.NotModified,
    ],
    [
      "when ETags mismatch",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"bar"',
      }),
      HttpStatusCodes.OK,
    ],
    [
      "when at least one matches",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"', '"bar"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCodes.NotModified,
    ],
    [
      "when etag is missing",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
      }),
      HttpStatusCodes.OK,
    ],
    [
      "when ETag is weak on exact match",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['W/"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: 'W/"foo"',
      }),
      HttpStatusCodes.NotModified,
    ],
    [
      "when ETag is weak on strong match",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['W/"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCodes.NotModified,
    ],
    [
      "when ETag is strong on exact match",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCodes.NotModified,
    ],
    [
      "when ETag is strong on weak match",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: 'W/"foo"',
      }),
      HttpStatusCodes.NotModified,
    ],
    [
      "when * is given",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: "*",
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCodes.NotModified,
    ],
    [
      "when modified since the date",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 0,
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        lastModified: 1,
      }),
      HttpStatusCodes.OK,
    ],
    [
      "when unmodified since the date",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 1,
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        lastModified: 1,
      }),
      HttpStatusCodes.NotModified,
    ],
    [
      "when Last-Modified is missing",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 1,
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
      }),
      HttpStatusCodes.OK,
    ],

    [
      "when requested with If-Modified-Since and If-None-Match and both match",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 1,
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"foo"',
        lastModified: 1,
      }),
      HttpStatusCodes.NotModified,
    ],

    [
      "when requested with If-Modified-Since and If-None-Match when only ETag matches",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 0,
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"foo"',
        lastModified: 1,
      }),
      HttpStatusCodes.OK,
    ],

    [
      "when requested with If-Modified-Since and If-None-Match when only Last-Modified matches",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 0,
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"bar"',
        lastModified: 0,
      }),
      HttpStatusCodes.OK,
    ],
    [
      "when none match",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 0,
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"bar"',
        lastModified: 1,
      }),
      HttpStatusCodes.OK,
    ],
    [
      "when requested with Cache-Control: no-cache",
      createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        cacheControl: ["no-cache"],
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCodes.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCodes.OK,
    ],
  ] as [string, HttpRequest<any>, HttpResponse<any>, number][],
  map(([name, req, resp, status]) =>
    test(
      name,
      defer(
        resp,
        checkIfNotModified(req),
        x => x.statusCode,
        expectEquals(status),
      ),
    ),
  ),
  tests => describe("checkIfNotModified", ...tests),
);

export const tests = describe(
  "http",
  checkIfNotModifiedTests,
  createHttpRequestTests,
  createHttpResponseTests,
);
