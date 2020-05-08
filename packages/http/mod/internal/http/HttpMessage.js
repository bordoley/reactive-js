import { fromValue } from "../../../../core/lib/flowable.js";
import { isSome } from "../../../../core/lib/option.js";
import { writeHttpCacheControlHeader } from "./cacheDirective.js";
import { writeHttpContentInfoHeaders } from "./httpContentInfo.js";
import { writeHttpHeaders } from "./httpHeaders.js";
import { writeHttpPreferenceHeaders } from "./httpPreferences.js";
import { parseMediaTypeOrThrow } from "./mediaType.js";
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
export const encodeHttpMessageWithCharset = (encode, contentType) => {
    var _a;
    const parsedContentType = typeof contentType === "string"
        ? parseMediaTypeOrThrow(contentType)
        : contentType;
    const charset = (_a = parsedContentType.params["charset"]) !== null && _a !== void 0 ? _a : "utf-8";
    return msg => {
        const body = encode(msg.body, charset);
        return {
            ...msg,
            body,
            contentInfo: {
                contentType: parsedContentType,
                contentLength: body.length,
                contentEncodings: [],
            },
        };
    };
};
export const decodeHttpMessageWithCharset = (decoder) => ({ contentInfo, ...msg }) => {
    var _a, _b, _c;
    const params = (_b = (_a = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.contentType) === null || _a === void 0 ? void 0 : _a.params) !== null && _b !== void 0 ? _b : {};
    const charset = (_c = params["charset"]) !== null && _c !== void 0 ? _c : "utf-8";
    const body = decoder(msg.body, charset);
    return {
        ...msg,
        body,
    };
};
export const toFlowableHttpMessage = ({ body, ...msg }) => ({
    ...msg,
    body: fromValue(body),
});
