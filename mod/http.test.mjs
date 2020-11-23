import { pipe, defer } from './functions.mjs';
import { none } from './option.mjs';
import { map } from './readonlyArray.mjs';
import { test, expectTrue, expectEquals, describe } from './testing.mjs';
import { createHttpRequest, writeHttpRequestHeaders, createHttpResponse, writeHttpResponseHeaders, checkIfNotModified } from './http.mjs';

const createHttpRequestTests = test("createHttpRequest", () => {
    const request = createHttpRequest({
        method: "GET" /* GET */,
        uri: "http://www.example.com",
        body: none,
        headers: {
            ["Accept" /* Accept */]: "text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5",
            ["Accept-Charset" /* AcceptCharset */]: "iso-8859-5, unicode-1-1;q=0.8",
            ["Accept-Encoding" /* AcceptEncoding */]: "gzip;q=1.0, identity; q=0.5, *;q=0",
            ["Accept-Language" /* AcceptLanguage */]: "da, en-gb;q=0.8, en;q=0.7",
            ["Accept-Ranges" /* AcceptRanges */]: "bytes",
            ["Age" /* Age */]: "2147483648",
            ["Allow" /* Allow */]: "GET, HEAD, PUT",
            ["Cache-Control" /* CacheControl */]: "max-age=3, no-transform",
            ["Connection" /* Connection */]: "close",
            ["Content-Encoding" /* ContentEncoding */]: "gzip",
            ["Content-Language" /* ContentLanguage */]: "mi, en",
            ["Content-Length" /* ContentLength */]: "123",
            ["Content-Location" /* ContentLocation */]: "http://www.example.com",
            ["Content-MD5" /* ContentMD5 */]: "asdjbklsjdfs",
            ["Content-Range" /* ContentRange */]: "bytes 0-499/1234",
            ["Content-Type" /* ContentType */]: "application/json; charset=UTF-8",
            ["Date" /* Date */]: "Tue, 15 Nov 1994 08:12:31 GMT",
            ["ETag" /* ETag */]: 'W/"foo"',
            ["Expect" /* Expect */]: "100-continue",
            ["Expires" /* Expires */]: "Thu, 01 Dec 1994 16:00:00 GMT",
            ["From" /* From */]: "webmaster@w3.org",
            ["Host" /* Host */]: "www.w3.org",
            ["If-Match" /* IfMatch */]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Modified-Since" /* IfModifiedSince */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["If-None-Match" /* IfNoneMatch */]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Range" /* IfRange */]: '"xyzzy"',
            ["If-Unmodified-Since" /* IfUnmodifiedSince */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Last-Modified" /* LastModified */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Location" /* Location */]: "http://www.example.com/path",
            ["Max-Forwards" /* MaxForwards */]: "10",
            ["Pragma" /* Pragma */]: "no-cache",
            ["Range" /* Range */]: "bytes=0-499",
            ["Referer" /* Referer */]: "http://www.w3.org/hypertext/DataSources/Overview.html",
            ["Retry-After" /* RetryAfter */]: "120",
            ["Server" /* Server */]: "CERN/3.0 libwww/2.17",
            ["Upgrade" /* Upgrade */]: "HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11",
            ["User-Agent" /* UserAgent */]: "CERN-LineMode/2.15 libwww/2.17b3",
            ["Vary" /* Vary */]: "Content-Encoding",
        },
    });
    const headers = {};
    writeHttpRequestHeaders(request, (key, value) => {
        headers[key] = value;
    });
    expectTrue(request.expectContinue);
});
const createHttpResponseTests = test("createHttpRequest", () => {
    const response = createHttpResponse({
        statusCode: 200 /* OK */,
        body: none,
        headers: {
            ["Accept" /* Accept */]: "text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5",
            ["Accept-Charset" /* AcceptCharset */]: "iso-8859-5, unicode-1-1;q=0.8",
            ["Accept-Encoding" /* AcceptEncoding */]: "gzip;q=1.0, identity; q=0.5, *;q=0",
            ["Accept-Language" /* AcceptLanguage */]: "da, en-gb;q=0.8, en;q=0.7",
            ["Accept-Ranges" /* AcceptRanges */]: "bytes",
            ["Age" /* Age */]: "2147483648",
            ["Allow" /* Allow */]: "GET, HEAD, PUT",
            ["Cache-Control" /* CacheControl */]: "max-age=3, no-transform",
            ["Connection" /* Connection */]: "close",
            ["Content-Encoding" /* ContentEncoding */]: "gzip",
            ["Content-Language" /* ContentLanguage */]: "mi, en",
            ["Content-Length" /* ContentLength */]: "123",
            ["Content-Location" /* ContentLocation */]: "http://www.example.com",
            ["Content-MD5" /* ContentMD5 */]: "asdjbklsjdfs",
            ["Content-Range" /* ContentRange */]: "bytes 0-499/1234",
            ["Content-Type" /* ContentType */]: "application/json; charset=UTF-8",
            ["Date" /* Date */]: "Tue, 15 Nov 1994 08:12:31 GMT",
            ["ETag" /* ETag */]: 'W/"foo"',
            ["Expect" /* Expect */]: "100-continue",
            ["Expires" /* Expires */]: "Thu, 01 Dec 1994 16:00:00 GMT",
            ["From" /* From */]: "webmaster@w3.org",
            ["Host" /* Host */]: "www.w3.org",
            ["If-Match" /* IfMatch */]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Modified-Since" /* IfModifiedSince */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["If-None-Match" /* IfNoneMatch */]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Range" /* IfRange */]: '"xyzzy"',
            ["If-Unmodified-Since" /* IfUnmodifiedSince */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Last-Modified" /* LastModified */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Location" /* Location */]: "http://www.example.com/path",
            ["Max-Forwards" /* MaxForwards */]: "10",
            ["Pragma" /* Pragma */]: "no-cache",
            ["Range" /* Range */]: "bytes=0-499",
            ["Referer" /* Referer */]: "http://www.w3.org/hypertext/DataSources/Overview.html",
            ["Retry-After" /* RetryAfter */]: "120",
            ["Server" /* Server */]: "CERN/3.0 libwww/2.17",
            ["Upgrade" /* Upgrade */]: "HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11",
            ["User-Agent" /* UserAgent */]: "CERN-LineMode/2.15 libwww/2.17b3",
            ["Vary" /* Vary */]: "Content-Encoding",
        },
    });
    const headers = {};
    writeHttpResponseHeaders(response, (key, value) => {
        headers[key] = value;
    });
});
const checkIfNotModifiedTests = pipe([
    [
        "when a non-conditional GET is performed",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
        }),
        createHttpResponse({ statusCode: 200 /* OK */, body: none }),
        200 /* OK */,
    ],
    [
        "when ETags match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETags mismatch",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"bar"',
        }),
        200 /* OK */,
    ],
    [
        "when at least one matches",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"', '"bar"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when etag is missing",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
        }),
        200 /* OK */,
    ],
    [
        "when ETag is weak on exact match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['W/"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: 'W/"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is weak on strong match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['W/"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is strong on exact match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is strong on weak match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: 'W/"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when * is given",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: "*",
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when modified since the date",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 0,
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when unmodified since the date",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 1,
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            lastModified: 1,
        }),
        304 /* NotModified */,
    ],
    [
        "when Last-Modified is missing",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 1,
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
        }),
        200 /* OK */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match and both match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 1,
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
            lastModified: 1,
        }),
        304 /* NotModified */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match when only ETag matches",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match when only Last-Modified matches",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"bar"',
            lastModified: 0,
        }),
        200 /* OK */,
    ],
    [
        "when none match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"bar"',
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when requested with Cache-Control: no-cache",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            cacheControl: ["no-cache"],
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        200 /* OK */,
    ],
], map(([name, req, resp, status]) => test(name, defer(resp, checkIfNotModified(req), x => x.statusCode, expectEquals(status)))), tests => describe("checkIfNotModified", ...tests));
const tests = describe("http", checkIfNotModifiedTests, createHttpRequestTests, createHttpResponseTests);

export { tests };
