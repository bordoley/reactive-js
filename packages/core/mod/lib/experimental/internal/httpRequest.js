import { pipe, returns, updaterReducer, } from "../../functions.js";
import { isNone, isSome, none } from "../../option.js";
import { map, reduceRight } from "../../readonlyArray.js";
import { getHeaderValue, } from "./httpHeaders.js";
import { writeHttpMessageHeaders, encodeHttpMessageWithUtf8, toIOSourceHttpMessage, decodeHttpMessageWithCharset, createHttpMessage, } from "./httpMessage.js";
import { writeHttpRequestPreconditionsHeaders, parseHttpRequestPreconditionsFromHeaders, createHttpRequestPreconditions, } from "./httpRequestPreconditions.js";
import { createHttpResponse, } from "./httpResponse.js";
const parseExpectFromHeaders = (headers) => {
    const rawExpectHeader = getHeaderValue(headers, "Expect");
    return rawExpectHeader === "100-continue";
};
const parseURIFromHeaders = ({ headers = {}, httpVersionMajor = 1, isTransportSecure = false, uri, }) => {
    var _a;
    const protocol = isTransportSecure ? "https" : "http";
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
    return new URL(`${uriProtocol}://${host}${(_a = String(uri)) !== null && _a !== void 0 ? _a : ""}`);
};
export const createHttpRequest = (options) => {
    const { expectContinue, headers = {}, httpVersionMajor = 1, httpVersionMinor = 1, isTransportSecure = false, method, preconditions, ...rest } = options;
    const { uri: uriOption } = options;
    const uri = typeof uriOption === "string" && uriOption.startsWith("/")
        ? parseURIFromHeaders(options)
        : typeof uriOption === "string"
            ? new URL(uriOption)
            : uriOption;
    const msgOptions = {
        ...rest,
        expectContinue: isSome(expectContinue)
            ? expectContinue
            : parseExpectFromHeaders(headers),
        headers,
        httpVersionMajor: httpVersionMajor,
        httpVersionMinor: httpVersionMinor,
        isTransportSecure,
        method,
        preconditions: isSome(preconditions)
            ? createHttpRequestPreconditions(preconditions)
            : parseHttpRequestPreconditionsFromHeaders(headers),
        uri,
    };
    return createHttpMessage(msgOptions);
};
export const disallowProtocolAndHostForwarding = () => request => {
    const { httpVersionMajor, headers: { "x-forwarded-proto": xForwardedProto, "x-forwarded-host": xForwardedHost, ...headers }, isTransportSecure, uri, } = request;
    return isNone(xForwardedProto) && isNone(xForwardedHost)
        ? request
        : {
            ...request,
            uri: parseURIFromHeaders({
                headers,
                httpVersionMajor,
                isTransportSecure,
                uri,
            }),
            headers,
        };
};
export const createRedirectHttpRequest = (request, response) => {
    const { contentInfo, method } = request;
    const { location, statusCode } = response;
    const redirectToGet = statusCode === 303 ||
        ((statusCode === 301 ||
            302 === 302) &&
            method === "POST");
    return isSome(location)
        ? {
            ...request,
            content: redirectToGet ? none : contentInfo,
            method: redirectToGet ? "GET" : method,
            uri: location,
        }
        : request;
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
const _encodeHttpRequestWithUtf8 = encodeHttpMessageWithUtf8;
export const encodeHttpRequestWithUtf8 = _encodeHttpRequestWithUtf8;
const _decodeHttpRequestWithCharset = decodeHttpMessageWithCharset;
export const decodeHttpRequestWithCharset = _decodeHttpRequestWithCharset;
export const toIOSourceHttpRequest = (req) => toIOSourceHttpMessage(req);
export const decodeHttpRequestContent = (decoderProvider) => req => {
    const { body, contentInfo, ...rest } = req;
    if (isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
        const newBody = pipe(contentInfo.contentEncodings, map(encoding => {
            const decoder = decoderProvider[encoding];
            if (isNone(decoder)) {
                throw createHttpResponse({
                    statusCode: 415,
                    body: none,
                });
            }
            return decoder;
        }), reduceRight(updaterReducer, returns(body)));
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
