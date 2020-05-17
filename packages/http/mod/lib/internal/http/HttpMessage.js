import { fromValue } from "../../../../../core/mod/lib/io.js";
import { isSome, isNone } from "../../../../../core/mod/lib/option.js";
import { writeHttpCacheControlHeader } from "./cacheDirective.js";
import { writeHttpContentInfoHeaders } from "./httpContentInfo.js";
import { writeHttpHeaders } from "./httpHeaders.js";
import { writeHttpPreferenceHeaders } from "./httpPreferences.js";
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
