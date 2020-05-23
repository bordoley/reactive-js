import { pipe } from "../../../functions.js";
import { fromValue } from "../../../io.js";
import { isSome, isNone } from "../../../option.js";
import { map } from "../../../readonlyArray.js";
import { writeHttpCacheControlHeader, parseCacheDirectiveOrThrow, parseCacheControlFromHeaders, } from "./cacheDirective.js";
import { writeHttpContentInfoHeaders, createHttpContentInfo, parseHttpContentInfoFromHeaders, } from "./httpContentInfo.js";
import { writeHttpHeaders, filterHeaders } from "./httpHeaders.js";
import { writeHttpPreferenceHeaders, createHttpPreferences, parseHttpPreferencesFromHeaders, } from "./httpPreferences.js";
export const createHttpMessage = ({ body, cacheControl, contentInfo, headers = {}, preferences, ...rest }) => ({
    ...rest,
    body,
    cacheControl: isSome(cacheControl)
        ? pipe(cacheControl, map(cc => typeof cc === "string" ? parseCacheDirectiveOrThrow(cc) : cc))
        : parseCacheControlFromHeaders(headers),
    contentInfo: isSome(contentInfo)
        ? createHttpContentInfo(contentInfo)
        : parseHttpContentInfoFromHeaders(headers),
    headers: filterHeaders(headers !== null && headers !== void 0 ? headers : {}),
    preferences: isSome(preferences)
        ? createHttpPreferences(preferences)
        : parseHttpPreferencesFromHeaders(headers),
});
export const writeHttpMessageHeaders = ({ cacheControl, contentInfo, headers, preferences }, writeHeader) => {
    writeHttpCacheControlHeader(cacheControl, writeHeader);
    if (isSome(contentInfo)) {
        writeHttpContentInfoHeaders(contentInfo, writeHeader);
    }
    if (isSome(preferences)) {
        writeHttpPreferenceHeaders(preferences, writeHeader);
    }
    writeHttpHeaders(headers, writeHeader);
};
export const encodeHttpMessageWithUtf8 = ({ contentInfo, ...msg }) => {
    if (isNone(contentInfo)) {
        throw new Error("HttpMessage has not contentInfo");
    }
    const { contentType } = contentInfo;
    const textEncoder = new TextEncoder();
    return {
        ...msg,
        body: textEncoder.encode(msg.body),
        contentInfo: {
            ...contentInfo,
            contentType: {
                ...contentType,
                params: {
                    ...contentType.params,
                    charset: "utf-8",
                },
            },
        },
    };
};
export const decodeHttpMessageWithCharset = ({ contentInfo, ...msg }) => {
    if (isNone(contentInfo)) {
        return {
            ...msg,
            body: "",
        };
    }
    else {
        const { charset = "utf-8" } = contentInfo.contentType.params;
        const textDecoder = new TextDecoder(charset);
        const body = textDecoder.decode(msg.body);
        return {
            ...msg,
            body,
        };
    }
};
export const toIOSourceHttpMessage = ({ body, ...msg }) => ({
    ...msg,
    body: fromValue()(body),
});
