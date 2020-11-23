'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
require('./disposable.js');
var readonlyArray = require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
require('./scheduler.js');
require('./observable.js');
require('./env.js');
require('./dispatcher.js');
require('./streamable.js');
var testing = require('./testing.js');
require('./flowable.js');
var http = require('./http.js');
require('./io.js');
require('./parserCombinators.js');

const createHttpRequestTests = testing.test("createHttpRequest", () => {
    const request = http.createHttpRequest({
        method: "GET" /* GET */,
        uri: "http://www.example.com",
        body: option.none,
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
    http.writeHttpRequestHeaders(request, (key, value) => {
        headers[key] = value;
    });
    testing.expectTrue(request.expectContinue);
});
const createHttpResponseTests = testing.test("createHttpRequest", () => {
    const response = http.createHttpResponse({
        statusCode: 200 /* OK */,
        body: option.none,
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
    http.writeHttpResponseHeaders(response, (key, value) => {
        headers[key] = value;
    });
});
const checkIfNotModifiedTests = functions.pipe([
    [
        "when a non-conditional GET is performed",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
        }),
        http.createHttpResponse({ statusCode: 200 /* OK */, body: option.none }),
        200 /* OK */,
    ],
    [
        "when ETags match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETags mismatch",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"bar"',
        }),
        200 /* OK */,
    ],
    [
        "when at least one matches",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"', '"bar"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when etag is missing",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
        }),
        200 /* OK */,
    ],
    [
        "when ETag is weak on exact match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['W/"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: 'W/"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is weak on strong match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['W/"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is strong on exact match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is strong on weak match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: 'W/"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when * is given",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: "*",
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when modified since the date",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 0,
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when unmodified since the date",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 1,
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            lastModified: 1,
        }),
        304 /* NotModified */,
    ],
    [
        "when Last-Modified is missing",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 1,
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
        }),
        200 /* OK */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match and both match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 1,
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
            lastModified: 1,
        }),
        304 /* NotModified */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match when only ETag matches",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match when only Last-Modified matches",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"bar"',
            lastModified: 0,
        }),
        200 /* OK */,
    ],
    [
        "when none match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"bar"',
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when requested with Cache-Control: no-cache",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            cacheControl: ["no-cache"],
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        200 /* OK */,
    ],
], readonlyArray.map(([name, req, resp, status]) => testing.test(name, functions.defer(resp, http.checkIfNotModified(req), x => x.statusCode, testing.expectEquals(status)))), tests => testing.describe("checkIfNotModified", ...tests));
const tests = testing.describe("http", checkIfNotModifiedTests, createHttpRequestTests, createHttpResponseTests);

exports.tests = tests;
