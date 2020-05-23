import { pipe, returns, updaterReducer, } from "../../functions.js";
import { empty, } from "../../io.js";
import { isNone, isSome, none } from "../../option.js";
import { everySatisfy, map, reduceRight, join, } from "../../readonlyArray.js";
import { entityTagToString, parseETagOrThrow, parseETagFromHeaders, } from "./entityTag.js";
import { contentIsCompressible } from "./httpContentInfo.js";
import { parseHttpDateTime, httpDateTimeToString, parseHttpDateTimeFromHeaders, } from "./httpDateTime.js";
import { getHeaderValue } from "./httpHeaders.js";
import { writeHttpMessageHeaders, encodeHttpMessageWithUtf8, toIOSourceHttpMessage, decodeHttpMessageWithCharset, createHttpMessage, } from "./httpMessage.js";
const parseLocationFromHeaders = (headers) => {
    const locationValue = getHeaderValue(headers, "Location");
    return isSome(locationValue) ? new URL(locationValue) : none;
};
export const createHttpResponse = ({ etag, expires, headers = {}, lastModified, location, statusCode, vary, ...rest }) => {
    const options = {
        ...rest,
        etag: typeof etag === "string"
            ? parseETagOrThrow(etag)
            : isSome(etag)
                ? etag
                : parseETagFromHeaders(headers),
        expires: typeof expires === "string"
            ? parseHttpDateTime(expires)
            : expires instanceof Date
                ? expires.getTime()
                : isSome(expires)
                    ? expires
                    : parseHttpDateTimeFromHeaders(headers, "Expires"),
        headers,
        lastModified: typeof lastModified === "string"
            ? parseHttpDateTime(lastModified)
            : lastModified instanceof Date
                ? lastModified.getTime()
                : isSome(lastModified)
                    ? lastModified
                    : parseHttpDateTimeFromHeaders(headers, "Last-Modified"),
        location: typeof location === "string"
            ? new URL(location)
            : isSome(location)
                ? location
                : parseLocationFromHeaders(headers),
        statusCode,
        vary: vary !== null && vary !== void 0 ? vary : [],
    };
    return createHttpMessage(options);
};
export const writeHttpResponseHeaders = (response, writeHeader) => {
    const { etag, expires, lastModified, location, vary } = response;
    if (isSome(etag)) {
        writeHeader("ETag", entityTagToString(etag));
    }
    if (isSome(expires)) {
        writeHeader("Expires", httpDateTimeToString(expires));
    }
    if (isSome(lastModified)) {
        writeHeader("Last-Modified", httpDateTimeToString(lastModified));
    }
    if (isSome(location)) {
        writeHeader("Location", location.toString());
    }
    if (vary.length > 0) {
        writeHeader("Vary", pipe(vary, join(",")));
    }
    writeHttpMessageHeaders(response, writeHeader);
};
export const checkIfNotModified = ({ cacheControl, method, preconditions, }) => response => {
    var _a, _b;
    const { etag, lastModified } = response;
    const { statusCode, contentInfo: _, ...responseWithoutContent } = response;
    const methodSupportsConditionalResponse = method === "GET" || method === "HEAD";
    const statusCodeSupportsConditionalResponse = statusCode >= 200 && statusCode < 300;
    const isNoCacheRequest = cacheControl.findIndex(({ directive }) => directive === "no-cache") >= 0;
    const etagMatch = isSome(etag) &&
        ((preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifNoneMatch) === "*" ||
            ((_a = preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifNoneMatch) !== null && _a !== void 0 ? _a : []).findIndex(({ tag }) => tag === etag.tag) >= 0);
    const notModifiedSince = (lastModified !== null && lastModified !== void 0 ? lastModified : Number.MAX_SAFE_INTEGER) <=
        ((_b = preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifModifiedSince) !== null && _b !== void 0 ? _b : Number.MIN_SAFE_INTEGER);
    const match = isSome(etag) &&
        isSome(preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifNoneMatch) &&
        isSome(lastModified) &&
        isSome(preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifModifiedSince)
        ? notModifiedSince && etagMatch
        : isSome(etag) && isSome(preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifNoneMatch)
            ? etagMatch
            : notModifiedSince;
    return methodSupportsConditionalResponse &&
        statusCodeSupportsConditionalResponse &&
        !isNoCacheRequest &&
        match
        ? {
            ...responseWithoutContent,
            statusCode: 304,
        }
        : response;
};
const _encodeHttpResponseWithUtf8 = encodeHttpMessageWithUtf8;
export const encodeHttpResponseWithUtf8 = _encodeHttpResponseWithUtf8;
const _decodeHttpResponseWithCharset = decodeHttpMessageWithCharset;
export const decodeHttpResponseWithCharset = _decodeHttpResponseWithCharset;
export const toIOSourceHttpResponse = (resp) => toIOSourceHttpMessage(resp);
export const decodeHttpResponseContent = (decoderProvider) => resp => {
    const { body, contentInfo, ...rest } = resp;
    if (isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
        const decoders = pipe(contentInfo.contentEncodings, map(encoding => decoderProvider[encoding]));
        const supportsDecodings = pipe(decoders, everySatisfy(isSome));
        if (supportsDecodings) {
            return {
                ...rest,
                contentInfo: {
                    contentType: contentInfo.contentType,
                    contentEncodings: [],
                    contentLength: -1,
                },
                body: pipe(decoders, reduceRight(updaterReducer, returns(body))),
            };
        }
        else {
            return createHttpResponse({
                statusCode: 415,
                body: empty(),
            });
        }
    }
    else {
        return resp;
    }
};
export const encodeHttpResponseContent = (encoderProvider, db = {}) => {
    const supportedEncodings = Object.keys(encoderProvider);
    const httpResponseIsCompressible = (response) => {
        const noTransformResponse = response.cacheControl.findIndex(({ directive }) => directive === "no-transform") >= 0;
        const { contentInfo } = response;
        return (!noTransformResponse &&
            isSome(contentInfo) &&
            contentIsCompressible(contentInfo, db));
    };
    return request => response => {
        const { body, contentInfo, vary } = response;
        if (isNone(contentInfo)) {
            return response;
        }
        const { preferences } = request;
        const shouldEncode = httpResponseIsCompressible(response);
        const acceptedEncodings = shouldEncode && isSome(preferences) ? preferences.acceptedEncodings : [];
        const contentEncoding = acceptedEncodings.find(encoding => supportedEncodings.includes(encoding));
        if (isNone(contentEncoding)) {
            return response;
        }
        const encode = isSome(contentEncoding)
            ? encoderProvider[contentEncoding]
            : none;
        if (isNone(encode)) {
            return response;
        }
        return {
            ...response,
            body: encode(body),
            contentInfo: {
                contentType: contentInfo.contentType,
                contentEncodings: [contentEncoding],
                contentLength: -1,
            },
            vary: [...vary, "Accept-Encoding"],
        };
    };
};
export const createHttpErrorResponse = (e) => {
    const statusCode = e instanceof URIError
        ? 400
        : 500;
    return createHttpResponse({
        statusCode,
        body: e,
    });
};
