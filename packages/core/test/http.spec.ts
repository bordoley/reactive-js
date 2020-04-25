import {
  parseMediaTypeOrThrow,
  HttpRequest,
  HttpResponse,
  createHttpRequest,
  HttpMethod,
  createHttpResponse,
  HttpStatusCode,
  checkIfNotModified,
} from "../src/http";

import { none } from "../src/option";

describe("mediaType", () => {
  test("parseMediaType with params", () => {
    const result = parseMediaTypeOrThrow("application/json; charset=UTF-8");
    expect(result.type).toEqual("application");
    expect(result.subtype).toEqual("json");
    expect(result.params["charset"]).toEqual("UTF-8");
  });

  test("parseMediaType without params", () => {
    const result = parseMediaTypeOrThrow("application/json");
    expect(result.type).toEqual("application");
    expect(result.subtype).toEqual("json");
  });

  test("parseMediaType with invalid params", () => {
    expect(() => parseMediaTypeOrThrow("application/json; =")).toThrow();
  });

  test("parseMediaType with empty params", () => {
    expect(() => parseMediaTypeOrThrow("application/json; charset=")).toThrow();
  });

  test("parseMediaRange", () => {
    const result = parseMediaTypeOrThrow("*/*; q=0.1; charset=UTF-8");
    expect(result.type).toEqual("*");
    expect(result.subtype).toEqual("*");
    expect(result.params["q"]).toEqual("0.1");
  });
});

describe("checkIfNotModified", () => {
  ([
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
  ] as [string, HttpRequest<any>, HttpResponse<any>, number][]).forEach(
    ([name, req, resp, status]) =>
      test(name, () => {
        expect(checkIfNotModified(req)(resp).statusCode).toEqual(status);
      }),
  );
});
