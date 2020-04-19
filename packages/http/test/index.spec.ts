import {
  parseMediaTypeOrThrow,
  HttpRequest,
  HttpResponse,
  createHttpRequest,
  HttpMethod,
  createHttpResponse,
  HttpStatusCode,
  checkIfNotModified,
  parseETagOrThrow,
  noCache,
} from "../src";

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
      createHttpRequest(HttpMethod.GET, "http://www.example.com"),
      createHttpResponse(HttpStatusCode.OK),
      HttpStatusCode.OK,
    ],
    [
      "when ETags match",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifNoneMatch: [parseETagOrThrow('"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"foo"'),
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when ETags mismatch",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifNoneMatch: [parseETagOrThrow('"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"bar"'),
      }),
      HttpStatusCode.OK,
    ],
    [
      "when at least one matches",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifNoneMatch: [parseETagOrThrow('"foo"'), parseETagOrThrow('"bar"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"foo"'),
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when etag is missing",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifNoneMatch: [parseETagOrThrow('"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK),
      HttpStatusCode.OK,
    ],
    [
      "when ETag is weak on exact match",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifNoneMatch: [parseETagOrThrow('W/"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('W/"foo"'),
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when ETag is weak on strong match",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifNoneMatch: [parseETagOrThrow('W/"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"foo"'),
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when ETag is strong on exact match",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifNoneMatch: [parseETagOrThrow('"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"foo"'),
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when ETag is strong on weak match",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifNoneMatch: [parseETagOrThrow('"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('W/"foo"'),
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when * is given",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifNoneMatch: "*",
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"foo"'),
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when modified since the date",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifModifiedSince: 0,
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        lastModified: 1,
      }),
      HttpStatusCode.OK,
    ],
    [
      "when unmodified since the date",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifModifiedSince: 1,
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        lastModified: 1,
      }),
      HttpStatusCode.NotModified,
    ],
    [
      "when Last-Modified is missing",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifModifiedSince: 1,
        },
      }),
      createHttpResponse(HttpStatusCode.OK),
      HttpStatusCode.OK,
    ],

    [
      "when requested with If-Modified-Since and If-None-Match and both match",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifModifiedSince: 1,
          ifNoneMatch: [parseETagOrThrow('"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"foo"'),
        lastModified: 1,
      }),
      HttpStatusCode.NotModified,
    ],

    [
      "when requested with If-Modified-Since and If-None-Match when only ETag matches",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifModifiedSince: 0,
          ifNoneMatch: [parseETagOrThrow('"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"foo"'),
        lastModified: 1,
      }),
      HttpStatusCode.OK,
    ],

    [
      "when requested with If-Modified-Since and If-None-Match when only Last-Modified matches",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifModifiedSince: 0,
          ifNoneMatch: [parseETagOrThrow('"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"bar"'),
        lastModified: 0,
      }),
      HttpStatusCode.OK,
    ],
    [
      "when none match",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        preconditions: {
          ifModifiedSince: 0,
          ifNoneMatch: [parseETagOrThrow('"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"bar"'),
        lastModified: 1,
      }),
      HttpStatusCode.OK,
    ],
    [
      "when requested with Cache-Control: no-cache",
      createHttpRequest(HttpMethod.GET, "http://www.example.com", {
        cacheControl: [noCache()],
        preconditions: {
          ifNoneMatch: [parseETagOrThrow('"foo"')],
        },
      }),
      createHttpResponse(HttpStatusCode.OK, {
        etag: parseETagOrThrow('"foo"'),
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
