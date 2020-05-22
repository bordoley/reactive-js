import { pipe, defer } from "@reactive-js/core/lib/functions";
import {
  test,
  describe,
  expectToThrow,
  expectEquals,
  expectTrue,
} from "@reactive-js/core/lib/experimental/testing";
import { none } from "@reactive-js/core/lib/option";
import { map } from "@reactive-js/core/lib/readonlyArray";
import {
  createHttpRequest,
  HttpMethod,
  HttpRequest,
  createHttpResponse,
  HttpStatusCode,
  HttpResponse,
  checkIfNotModified,
  HttpStandardHeader,
  writeHttpRequestHeaders,
  writeHttpResponseHeaders,
} from "../lib/http";
import { parseMediaTypeOrThrow } from "../lib/internal/mediaType";

const createHttpRequestTests = test("createHttpRequest", () => {
  const request = createHttpRequest({
    method: HttpMethod.GET,
    uri: "http://www.example.com",
    body: none,
    headers: {
      [HttpStandardHeader.Accept]:
        "text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5",
      [HttpStandardHeader.AcceptCharset]: "iso-8859-5, unicode-1-1;q=0.8",
      [HttpStandardHeader.AcceptEncoding]: "gzip;q=1.0, identity; q=0.5, *;q=0",
      [HttpStandardHeader.AcceptLanguage]: "da, en-gb;q=0.8, en;q=0.7",
      [HttpStandardHeader.AcceptRanges]: "bytes",
      [HttpStandardHeader.Age]: "2147483648",
      [HttpStandardHeader.Allow]: "GET, HEAD, PUT",
      [HttpStandardHeader.CacheControl]: "max-age=3, no-transform",
      [HttpStandardHeader.Connection]: "close",
      [HttpStandardHeader.ContentEncoding]: "gzip",
      [HttpStandardHeader.ContentLanguage]: "mi, en",
      [HttpStandardHeader.ContentLength]: "123",
      [HttpStandardHeader.ContentLocation]: "http://www.example.com",
      [HttpStandardHeader.ContentMD5]: "asdjbklsjdfs",
      [HttpStandardHeader.ContentRange]: "bytes 0-499/1234",
      [HttpStandardHeader.ContentType]: "application/json; charset=UTF-8",
      [HttpStandardHeader.Date]: "Tue, 15 Nov 1994 08:12:31 GMT",
      [HttpStandardHeader.ETag]: 'W/"foo"',
      [HttpStandardHeader.Expect]: "100-continue",
      [HttpStandardHeader.Expires]: "Thu, 01 Dec 1994 16:00:00 GMT",
      [HttpStandardHeader.From]: "webmaster@w3.org",
      [HttpStandardHeader.Host]: "www.w3.org",
      [HttpStandardHeader.IfMatch]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
      [HttpStandardHeader.IfModifiedSince]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeader.IfNoneMatch]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
      [HttpStandardHeader.IfRange]: '"xyzzy"',
      [HttpStandardHeader.IfUnmodifiedSince]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeader.LastModified]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeader.Location]: "http://www.example.com/path",
      [HttpStandardHeader.MaxForwards]: "10",
      [HttpStandardHeader.Pragma]: "no-cache",
      [HttpStandardHeader.Range]: "bytes=0-499",
      [HttpStandardHeader.Referer]:
        "http://www.w3.org/hypertext/DataSources/Overview.html",
      [HttpStandardHeader.RetryAfter]: "120",
      [HttpStandardHeader.Server]: "CERN/3.0 libwww/2.17",
      [HttpStandardHeader.Upgrade]: "HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11",
      [HttpStandardHeader.UserAgent]: "CERN-LineMode/2.15 libwww/2.17b3",
      [HttpStandardHeader.Vary]: "Content-Encoding",
    },
  });

  console.log(request);

  const headers: { [key: string]: string } = {};
  writeHttpRequestHeaders(request, (key, value) => {
    headers[key] = value;
  });
  expectTrue(request.expectContinue);
});

const createHttpResponseTests = test("createHttpRequest", () => {
  const response = createHttpResponse({
    statusCode: HttpStatusCode.OK,
    body: none,
    headers: {
      [HttpStandardHeader.Accept]:
        "text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5",
      [HttpStandardHeader.AcceptCharset]: "iso-8859-5, unicode-1-1;q=0.8",
      [HttpStandardHeader.AcceptEncoding]: "gzip;q=1.0, identity; q=0.5, *;q=0",
      [HttpStandardHeader.AcceptLanguage]: "da, en-gb;q=0.8, en;q=0.7",
      [HttpStandardHeader.AcceptRanges]: "bytes",
      [HttpStandardHeader.Age]: "2147483648",
      [HttpStandardHeader.Allow]: "GET, HEAD, PUT",
      [HttpStandardHeader.CacheControl]: "max-age=3, no-transform",
      [HttpStandardHeader.Connection]: "close",
      [HttpStandardHeader.ContentEncoding]: "gzip",
      [HttpStandardHeader.ContentLanguage]: "mi, en",
      [HttpStandardHeader.ContentLength]: "123",
      [HttpStandardHeader.ContentLocation]: "http://www.example.com",
      [HttpStandardHeader.ContentMD5]: "asdjbklsjdfs",
      [HttpStandardHeader.ContentRange]: "bytes 0-499/1234",
      [HttpStandardHeader.ContentType]: "application/json; charset=UTF-8",
      [HttpStandardHeader.Date]: "Tue, 15 Nov 1994 08:12:31 GMT",
      [HttpStandardHeader.ETag]: 'W/"foo"',
      [HttpStandardHeader.Expect]: "100-continue",
      [HttpStandardHeader.Expires]: "Thu, 01 Dec 1994 16:00:00 GMT",
      [HttpStandardHeader.From]: "webmaster@w3.org",
      [HttpStandardHeader.Host]: "www.w3.org",
      [HttpStandardHeader.IfMatch]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
      [HttpStandardHeader.IfModifiedSince]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeader.IfNoneMatch]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
      [HttpStandardHeader.IfRange]: '"xyzzy"',
      [HttpStandardHeader.IfUnmodifiedSince]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeader.LastModified]: "Sat, 29 Oct 1994 19:43:31 GMT",
      [HttpStandardHeader.Location]: "http://www.example.com/path",
      [HttpStandardHeader.MaxForwards]: "10",
      [HttpStandardHeader.Pragma]: "no-cache",
      [HttpStandardHeader.Range]: "bytes=0-499",
      [HttpStandardHeader.Referer]:
        "http://www.w3.org/hypertext/DataSources/Overview.html",
      [HttpStandardHeader.RetryAfter]: "120",
      [HttpStandardHeader.Server]: "CERN/3.0 libwww/2.17",
      [HttpStandardHeader.Upgrade]: "HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11",
      [HttpStandardHeader.UserAgent]: "CERN-LineMode/2.15 libwww/2.17b3",
      [HttpStandardHeader.Vary]: "Content-Encoding",
    },
  });

  console.log(response);

  const headers: { [key: string]: string } = {};
  writeHttpResponseHeaders(response, (key, value) => {
    headers[key] = value;
  });
});

const mediaTypeTests = describe(
  "mediaType",
  test("parseMediaType with params", () => {
    const { type, subtype, params } = parseMediaTypeOrThrow(
      "application/json; charset=UTF-8",
    );
    pipe(type, expectEquals("application"));
    pipe(subtype, expectEquals("json"));
    pipe(params["charset"], expectEquals("UTF-8"));
  }),

  test("parseMediaType without params", () => {
    const { type, subtype } = parseMediaTypeOrThrow("application/json");
    pipe(type, expectEquals("application"));
    pipe(subtype, expectEquals("json"));
  }),

  test(
    "parseMediaType with invalid params",
    defer(defer("application/json; =", parseMediaTypeOrThrow), expectToThrow),
  ),

  test(
    "parseMediaType with empty params",
    defer(
      defer("application/json; charset=", parseMediaTypeOrThrow),
      expectToThrow,
    ),
  ),

  test("parseMediaRange", () => {
    const { type, subtype, params } = parseMediaTypeOrThrow(
      "*/*; q=0.1; charset=UTF-8",
    );
    pipe(type, expectEquals("*"));
    pipe(subtype, expectEquals("*"));
    pipe(params["q"], expectEquals("0.1"));
  }),
);

const checkIfNotModifiedTests = pipe(
  [
    [
      "when a non-conditional GET is performed",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
      }),
      createHttpResponse({ statusCode: HttpStatusCode.OK, body: none }),
      HttpStatusCode.OK,
    ],
    [
      "when ETags match",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when ETags mismatch",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"bar"',
      }),
      HttpStatusCode.OK,
    ],
    [
      "when at least one matches",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"', '"bar"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when etag is missing",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
      }),
      HttpStatusCode.OK,
    ],
    [
      "when ETag is weak on exact match",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['W/"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: 'W/"foo"',
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when ETag is weak on strong match",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['W/"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when ETag is strong on exact match",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when ETag is strong on weak match",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: 'W/"foo"',
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when * is given",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifNoneMatch: "*",
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when modified since the date",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 0,
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        lastModified: 1,
      }),
      HttpStatusCode.OK,
    ],
    [
      "when unmodified since the date",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 1,
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        lastModified: 1,
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when Last-Modified is missing",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 1,
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
      }),
      HttpStatusCode.OK,
    ],

    [
      "when requested with If-Modified-Since and If-None-Match and both match",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 1,
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"foo"',
        lastModified: 1,
      }),
      HttpStatusCode.NotModified,
    ],

    [
      "when requested with If-Modified-Since and If-None-Match when only ETag matches",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 0,
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"foo"',
        lastModified: 1,
      }),
      HttpStatusCode.OK,
    ],

    [
      "when requested with If-Modified-Since and If-None-Match when only Last-Modified matches",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 0,
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"bar"',
        lastModified: 0,
      }),
      HttpStatusCode.OK,
    ],
    [
      "when none match",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        preconditions: {
          ifModifiedSince: 0,
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"bar"',
        lastModified: 1,
      }),
      HttpStatusCode.OK,
    ],
    [
      "when requested with Cache-Control: no-cache",
      createHttpRequest({
        method: HttpMethod.GET,
        uri: "http://www.example.com",
        body: none,
        cacheControl: ["no-cache"],
        preconditions: {
          ifNoneMatch: ['"foo"'],
        },
      }),
      createHttpResponse({
        statusCode: HttpStatusCode.OK,
        body: none,
        etag: '"foo"',
      }),
      HttpStatusCode.OK,
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
  mediaTypeTests,
  checkIfNotModifiedTests,
  createHttpRequestTests,
  createHttpResponseTests,
);
