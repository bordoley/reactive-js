import { createHttpRequest, createHttpResponse, checkIfNotModified, writeHttpRequestHeaders, writeHttpResponseHeaders, } from "../../lib/experimental/http.js";
import { test, describe, expectEquals, expectTrue, } from "../../lib/experimental/testing.js";
import { pipe, defer } from "../../lib/functions.js";
import { none } from "../../lib/option.js";
import { map } from "../../lib/readonlyArray.js";
const createHttpRequestTests = test("createHttpRequest", () => {
    const request = createHttpRequest({
        method: "GET",
        uri: "http://www.example.com",
        body: none,
        headers: {
            ["Accept"]: "text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5",
            ["Accept-Charset"]: "iso-8859-5, unicode-1-1;q=0.8",
            ["Accept-Encoding"]: "gzip;q=1.0, identity; q=0.5, *;q=0",
            ["Accept-Language"]: "da, en-gb;q=0.8, en;q=0.7",
            ["Accept-Ranges"]: "bytes",
            ["Age"]: "2147483648",
            ["Allow"]: "GET, HEAD, PUT",
            ["Cache-Control"]: "max-age=3, no-transform",
            ["Connection"]: "close",
            ["Content-Encoding"]: "gzip",
            ["Content-Language"]: "mi, en",
            ["Content-Length"]: "123",
            ["Content-Location"]: "http://www.example.com",
            ["Content-MD5"]: "asdjbklsjdfs",
            ["Content-Range"]: "bytes 0-499/1234",
            ["Content-Type"]: "application/json; charset=UTF-8",
            ["Date"]: "Tue, 15 Nov 1994 08:12:31 GMT",
            ["ETag"]: 'W/"foo"',
            ["Expect"]: "100-continue",
            ["Expires"]: "Thu, 01 Dec 1994 16:00:00 GMT",
            ["From"]: "webmaster@w3.org",
            ["Host"]: "www.w3.org",
            ["If-Match"]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Modified-Since"]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["If-None-Match"]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Range"]: '"xyzzy"',
            ["If-Unmodified-Since"]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Last-Modified"]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Location"]: "http://www.example.com/path",
            ["Max-Forwards"]: "10",
            ["Pragma"]: "no-cache",
            ["Range"]: "bytes=0-499",
            ["Referer"]: "http://www.w3.org/hypertext/DataSources/Overview.html",
            ["Retry-After"]: "120",
            ["Server"]: "CERN/3.0 libwww/2.17",
            ["Upgrade"]: "HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11",
            ["User-Agent"]: "CERN-LineMode/2.15 libwww/2.17b3",
            ["Vary"]: "Content-Encoding",
        },
    });
    console.log(request);
    const headers = {};
    writeHttpRequestHeaders(request, (key, value) => {
        headers[key] = value;
    });
    expectTrue(request.expectContinue);
});
const createHttpResponseTests = test("createHttpRequest", () => {
    const response = createHttpResponse({
        statusCode: 200,
        body: none,
        headers: {
            ["Accept"]: "text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5",
            ["Accept-Charset"]: "iso-8859-5, unicode-1-1;q=0.8",
            ["Accept-Encoding"]: "gzip;q=1.0, identity; q=0.5, *;q=0",
            ["Accept-Language"]: "da, en-gb;q=0.8, en;q=0.7",
            ["Accept-Ranges"]: "bytes",
            ["Age"]: "2147483648",
            ["Allow"]: "GET, HEAD, PUT",
            ["Cache-Control"]: "max-age=3, no-transform",
            ["Connection"]: "close",
            ["Content-Encoding"]: "gzip",
            ["Content-Language"]: "mi, en",
            ["Content-Length"]: "123",
            ["Content-Location"]: "http://www.example.com",
            ["Content-MD5"]: "asdjbklsjdfs",
            ["Content-Range"]: "bytes 0-499/1234",
            ["Content-Type"]: "application/json; charset=UTF-8",
            ["Date"]: "Tue, 15 Nov 1994 08:12:31 GMT",
            ["ETag"]: 'W/"foo"',
            ["Expect"]: "100-continue",
            ["Expires"]: "Thu, 01 Dec 1994 16:00:00 GMT",
            ["From"]: "webmaster@w3.org",
            ["Host"]: "www.w3.org",
            ["If-Match"]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Modified-Since"]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["If-None-Match"]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Range"]: '"xyzzy"',
            ["If-Unmodified-Since"]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Last-Modified"]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Location"]: "http://www.example.com/path",
            ["Max-Forwards"]: "10",
            ["Pragma"]: "no-cache",
            ["Range"]: "bytes=0-499",
            ["Referer"]: "http://www.w3.org/hypertext/DataSources/Overview.html",
            ["Retry-After"]: "120",
            ["Server"]: "CERN/3.0 libwww/2.17",
            ["Upgrade"]: "HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11",
            ["User-Agent"]: "CERN-LineMode/2.15 libwww/2.17b3",
            ["Vary"]: "Content-Encoding",
        },
    });
    console.log(response);
    const headers = {};
    writeHttpResponseHeaders(response, (key, value) => {
        headers[key] = value;
    });
});
const checkIfNotModifiedTests = pipe([
    [
        "when a non-conditional GET is performed",
        createHttpRequest({
            method: "GET",
            uri: "http://www.example.com",
            body: none,
        }),
        createHttpResponse({ statusCode: 200, body: none }),
        200,
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
            statusCode: 200,
            body: none,
            etag: '"foo"',
        }),
        304,
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
            statusCode: 200,
            body: none,
            etag: '"bar"',
        }),
        200,
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
            statusCode: 200,
            body: none,
            etag: '"foo"',
        }),
        304,
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
            statusCode: 200,
            body: none,
        }),
        200,
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
            statusCode: 200,
            body: none,
            etag: 'W/"foo"',
        }),
        304,
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
            statusCode: 200,
            body: none,
            etag: '"foo"',
        }),
        304,
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
            statusCode: 200,
            body: none,
            etag: '"foo"',
        }),
        304,
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
            statusCode: 200,
            body: none,
            etag: 'W/"foo"',
        }),
        304,
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
            statusCode: 200,
            body: none,
            etag: '"foo"',
        }),
        304,
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
            statusCode: 200,
            body: none,
            lastModified: 1,
        }),
        200,
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
            statusCode: 200,
            body: none,
            lastModified: 1,
        }),
        304,
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
            statusCode: 200,
            body: none,
        }),
        200,
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
            statusCode: 200,
            body: none,
            etag: '"foo"',
            lastModified: 1,
        }),
        304,
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
            statusCode: 200,
            body: none,
            etag: '"foo"',
            lastModified: 1,
        }),
        200,
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
            statusCode: 200,
            body: none,
            etag: '"bar"',
            lastModified: 0,
        }),
        200,
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
            statusCode: 200,
            body: none,
            etag: '"bar"',
            lastModified: 1,
        }),
        200,
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
            statusCode: 200,
            body: none,
            etag: '"foo"',
        }),
        200,
    ],
], map(([name, req, resp, status]) => test(name, defer(resp, checkIfNotModified(req), x => x.statusCode, expectEquals(status)))), tests => describe("checkIfNotModified", ...tests));
export const tests = describe("http", checkIfNotModifiedTests, createHttpRequestTests, createHttpResponseTests);
