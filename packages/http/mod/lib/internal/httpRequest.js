import { pipe, returns, updaterReducer, } from "../../../../core/mod/lib/functions.js";
import { isNone, isSome, none } from "../../../../core/mod/lib/option.js";
import { map, reduceRight } from "../../../../core/mod/lib/readonlyArray.js";
import { getHeaderValue } from "./httpHeaders.js";
import { writeHttpMessageHeaders, encodeHttpMessageWithUtf8, toIOSourceHttpMessage, decodeHttpMessageWithCharset, createHttpMessage, } from "./httpMessage.js";
import { writeHttpRequestPreconditionsHeaders, parseHttpRequestPreconditionsFromHeaders, createHttpRequestPreconditions, } from "./httpRequestPreconditions.js";
import { createHttpResponse, } from "./httpResponse.js";
const parseExpectFromHeaders = (headers) => {
    const rawExpectHeader = getHeaderValue(headers, "Expect");
    return rawExpectHeader === "100-continue";
};
export const createHttpRequest = ({ expectContinue, headers = {}, httpVersionMajor = 1, httpVersionMinor = 1, method, preconditions, uri, ...rest }) => {
    const options = {
        ...rest,
        expectContinue: isSome(expectContinue)
            ? expectContinue
            : parseExpectFromHeaders(headers),
        headers,
        httpVersionMajor: httpVersionMajor,
        httpVersionMinor: httpVersionMinor,
        method,
        preconditions: isSome(preconditions)
            ? createHttpRequestPreconditions(preconditions)
            : parseHttpRequestPreconditionsFromHeaders(headers),
        uri: typeof uri === "string" ? new URL(uri) : uri,
    };
    return createHttpMessage(options);
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
