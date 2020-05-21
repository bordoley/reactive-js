import { pipe, returns, } from "../../../../core/mod/lib/functions.js";
import { isNone, isSome, none } from "../../../../core/mod/lib/option.js";
import { map, reduceRight } from "../../../../core/mod/lib/readonlyArray.js";
import { parseCacheDirectiveOrThrow, parseCacheControlFromHeaders, } from "./cacheDirective.js";
import { parseHttpContentInfoFromHeaders, createHttpContentInfo, } from "./httpContentInfo.js";
import { filterHeaders, getHeaderValue, } from "./httpHeaders.js";
import { writeHttpMessageHeaders, encodeHttpMessageWithUtf8, toIOSourceHttpMessage, decodeHttpMessageWithCharset, } from "./httpMessage.js";
import { parseHttpPreferencesFromHeaders, createHttpPreferences, } from "./httpPreferences.js";
import { writeHttpRequestPreconditionsHeaders, parseHttpRequestPreconditionsFromHeaders, createHttpRequestPreconditions, } from "./httpRequestPreconditions.js";
import { createHttpResponse, } from "./httpResponse.js";
const parseExpectFromHeaders = (headers) => {
    const rawExpectHeader = getHeaderValue(headers, "Expect");
    return rawExpectHeader === "100-continue";
};
export const createHttpRequest = ({ body, cacheControl, contentInfo, expectContinue, headers = {}, httpVersionMajor = 1, httpVersionMinor = 1, method, preconditions, preferences, uri, ...rest }) => ({
    ...rest,
    body,
    cacheControl: isSome(cacheControl)
        ? pipe(cacheControl, map(cc => typeof cc === "string" ? parseCacheDirectiveOrThrow(cc) : cc))
        : parseCacheControlFromHeaders(headers),
    contentInfo: isSome(contentInfo)
        ? createHttpContentInfo(contentInfo)
        : parseHttpContentInfoFromHeaders(headers),
    expectContinue: isSome(expectContinue)
        ? expectContinue
        : parseExpectFromHeaders(headers),
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
export const httpRequestToUntypedHeaders = (request) => {
    const headers = {};
    writeHttpRequestHeaders(request, (header, value) => (headers[header] = value));
    return headers;
};
export const encodeHttpRequestWithUtf8 = encodeHttpMessageWithUtf8;
export const decodeHttpRequestWithCharset = decodeHttpMessageWithCharset;
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
        }), reduceRight((acc, decoder) => decoder(acc), returns(body)));
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
