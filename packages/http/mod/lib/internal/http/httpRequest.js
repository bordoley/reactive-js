import { isNone, isSome, none } from "../../../../../core/mod/lib/option.js";
import { writeHttpMessageHeaders, encodeHttpMessageWithUtf8, toIOStreamableHttpMessage, decodeHttpMessageWithCharset, } from "./HttpMessage.js";
import { parseCacheControlFromHeaders, parseCacheDirectiveOrThrow, } from "./cacheDirective.js";
import { parseHttpContentInfoFromHeaders, contentIsCompressible, createHttpContentInfo, } from "./httpContentInfo.js";
import { getHeaderValue, filterHeaders, } from "./httpHeaders.js";
import { parseHttpPreferencesFromHeaders, createHttpPreferences, } from "./httpPreferences.js";
import { writeHttpRequestPreconditionsHeaders, parseHttpRequestPreconditionsFromHeaders, createHttpRequestPreconditions, } from "./httpRequestPreconditions.js";
import { createHttpResponse } from "./httpResponse.js";
export const createHttpRequest = ({ body, cacheControl, contentInfo, expectContinue = false, headers = {}, httpVersionMajor = 1, httpVersionMinor = 1, method, preconditions, preferences, uri, ...rest }) => ({
    ...rest,
    body,
    cacheControl: (cacheControl !== null && cacheControl !== void 0 ? cacheControl : []).map(cc => typeof cc === "string" ? parseCacheDirectiveOrThrow(cc) : cc),
    contentInfo: isSome(contentInfo)
        ? createHttpContentInfo(contentInfo)
        : parseHttpContentInfoFromHeaders(headers),
    expectContinue: expectContinue,
    headers: filterHeaders(headers),
    httpVersionMajor: httpVersionMajor,
    httpVersionMinor: httpVersionMinor,
    method,
    preconditions: isSome(preconditions)
        ? createHttpRequestPreconditions(preconditions)
        : parseHttpRequestPreconditionsFromHeaders(headers),
    preferences: isSome(preferences)
        ? createHttpPreferences(preferences)
        : parseHttpPreferencesFromHeaders(headers),
    uri: typeof uri === "string" ? new URL(uri) : uri,
});
export const createRedirectHttpRequest = (request, response) => {
    const { contentInfo, method } = request;
    const { location, statusCode } = response;
    const redirectToGet = statusCode === 303 ||
        ((statusCode === 301 ||
            302 === 302) &&
            method === "POST");
    return {
        ...request,
        content: redirectToGet ? none : contentInfo,
        method: redirectToGet ? "GET" : method,
        uri: location,
    };
};
const parseURIFromHeaders = (protocol, path, httpVersionMajor, headers) => {
    const forwardedProtocol = getHeaderValue(headers, "X-Forwarded-Proto");
    const uriProtocol = isSome(forwardedProtocol)
        ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
        : protocol;
    const forwardedHost = getHeaderValue(headers, "X-Forwarded-Host");
    const http2Authority = headers[":authority"];
    const http1Host = getHeaderValue(headers, "Host");
    const unfilteredHost = isSome(forwardedHost)
        ? forwardedHost
        : isSome(http2Authority) && httpVersionMajor >= 2
            ? http2Authority
            : isSome(http1Host)
                ? http1Host
                : "";
    const host = unfilteredHost.split(/\s*,\s*/, 1)[0];
    return new URL(`${uriProtocol}://${host}${path !== null && path !== void 0 ? path : ""}`);
};
export const parseHttpRequestFromHeaders = ({ method, path, headers, httpVersionMajor, httpVersionMinor, isTransportSecure, body, }) => {
    const cacheControl = parseCacheControlFromHeaders(headers);
    const contentInfo = parseHttpContentInfoFromHeaders(headers);
    const rawExpectHeader = getHeaderValue(headers, "Expect");
    const expectContinue = rawExpectHeader === "100-continue";
    const preconditions = parseHttpRequestPreconditionsFromHeaders(headers);
    const preferences = parseHttpPreferencesFromHeaders(headers);
    const protocol = isTransportSecure ? "https" : "http";
    const uri = parseURIFromHeaders(protocol, path, httpVersionMajor, headers);
    return {
        body,
        cacheControl,
        contentInfo,
        expectContinue,
        headers,
        httpVersionMajor,
        httpVersionMinor,
        isTransportSecure,
        method,
        preconditions,
        preferences,
        uri,
    };
};
export const writeHttpRequestHeaders = (request, writeHeader) => {
    const { expectContinue, preconditions } = request;
    if (expectContinue) {
        writeHeader("Expect", "100-continue");
    }
    if (isSome(preconditions)) {
        writeHttpRequestPreconditionsHeaders(preconditions, writeHeader);
    }
    writeHttpMessageHeaders(request, writeHeader);
};
export const disallowProtocolAndHostForwarding = () => request => {
    const { httpVersionMajor, headers: oldHeaders, isTransportSecure, uri: oldUri, } = request;
    const { "x-forwarded-proto": xForwardedProto, "x-forwarded-host": xForwardedHost, ...headers } = oldHeaders;
    const protocol = isTransportSecure ? "https" : "http";
    if (isNone(xForwardedProto) && isNone(xForwardedHost)) {
        return request;
    }
    else {
        const path = oldUri.pathname;
        const uri = parseURIFromHeaders(protocol, path, httpVersionMajor, headers);
        return {
            ...request,
            uri,
            headers,
        };
    }
};
export const httpRequestToUntypedHeaders = (request) => {
    const headers = {};
    writeHttpRequestHeaders(request, (header, value) => (headers[header] = value));
    return headers;
};
export const encodeHttpRequestWithUtf8 = encodeHttpMessageWithUtf8;
export const decodeHttpRequestWithCharset = decodeHttpMessageWithCharset;
export const toIOStreamableHttpRequest = (req) => toIOStreamableHttpMessage(req);
export const decodeHttpRequestContent = (decoderProvider) => req => {
    const { body, contentInfo, ...rest } = req;
    if (isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
        const newBody = contentInfo.contentEncodings
            .map(encoding => {
            const decoder = decoderProvider[encoding];
            if (isNone(decoder)) {
                throw createHttpResponse({
                    statusCode: 415,
                    body: none,
                });
            }
            return decoder;
        })
            .reduceRight((acc, decoder) => decoder(acc), body);
        return {
            ...rest,
            contentInfo: {
                contentType: contentInfo.contentType,
                contentEncodings: [],
                contentLength: -1,
            },
            body: newBody,
        };
    }
    else {
        return req;
    }
};
export const encodeHttpClientRequestContent = (encoderProvider, db = {}) => {
    const supportedEncodings = Object.keys(encoderProvider);
    const httpRequestIsCompressible = ({ contentInfo, }) => isSome(contentInfo) && contentIsCompressible(contentInfo, db);
    return request => {
        var _a;
        const { body, contentInfo } = request;
        if (isNone(contentInfo)) {
            return request;
        }
        const contentEncoding = ((_a = request === null || request === void 0 ? void 0 : request.acceptedEncodings) !== null && _a !== void 0 ? _a : []).find(encoding => supportedEncodings.includes(encoding));
        if (isNone(contentEncoding)) {
            return request;
        }
        const encode = isSome(contentEncoding) && httpRequestIsCompressible(request)
            ? encoderProvider[contentEncoding]
            : none;
        if (isNone(encode)) {
            return request;
        }
        return {
            ...request,
            body: encode(body),
            contentInfo: {
                contentType: contentInfo.contentType,
                contentEncodings: [contentEncoding],
                contentLength: -1,
            },
        };
    };
};
