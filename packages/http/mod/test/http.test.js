import { pipe, defer } from "@reactive-js/core/lib/functions.js";
import { test, describe, expectToThrow, expectEquals, } from "@reactive-js/core/lib/internal/testing.js";
import { none } from "@reactive-js/core/lib/option.js";
import { map } from "@reactive-js/core/lib/readonlyArray.js";
import { createHttpRequest, createHttpResponse, checkIfNotModified, } from "../lib/http.js";
import { parseMediaTypeOrThrow } from "../lib/internal/http/mediaType.js";
const mediaTypeTests = describe("mediaType", test("parseMediaType with params", () => {
    const { type, subtype, params } = parseMediaTypeOrThrow("application/json; charset=UTF-8");
    pipe(type, expectEquals("application"));
    pipe(subtype, expectEquals("json"));
    pipe(params["charset"], expectEquals("UTF-8"));
}), test("parseMediaType without params", () => {
    const { type, subtype } = parseMediaTypeOrThrow("application/json");
    pipe(type, expectEquals("application"));
    pipe(subtype, expectEquals("json"));
}), test("parseMediaType with invalid params", defer(defer("application/json; =", parseMediaTypeOrThrow), expectToThrow)), test("parseMediaType with empty params", defer(defer("application/json; charset=", parseMediaTypeOrThrow), expectToThrow)), test("parseMediaRange", () => {
    const { type, subtype, params } = parseMediaTypeOrThrow("*/*; q=0.1; charset=UTF-8");
    pipe(type, expectEquals("*"));
    pipe(subtype, expectEquals("*"));
    pipe(params["q"], expectEquals("0.1"));
}));
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
export const tests = describe("http", mediaTypeTests, checkIfNotModifiedTests);
