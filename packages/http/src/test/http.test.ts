import { pipe, defer } from "@reactive-js/core/lib/functions";
import {
  test,
  describe,
  expectToThrow,
  expectEquals,
} from "@reactive-js/core/lib/internal/testing";
import { none } from "@reactive-js/core/lib/option";
import { map } from "@reactive-js/core/lib/readonlyArray";
import {
  HttpRequest,
  HttpResponse,
  createHttpRequest,
  HttpMethod,
  createHttpResponse,
  HttpStatusCode,
  checkIfNotModified,
} from "../lib/http";
import { parseMediaTypeOrThrow } from "../lib/internal/http/mediaType";

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

export const tests = describe("http", mediaTypeTests, checkIfNotModifiedTests);
