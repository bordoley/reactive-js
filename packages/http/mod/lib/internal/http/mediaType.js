import { pForwardSlash, parseWith, parseWithOrThrow, } from "../../../../../core/mod/lib/internal/parserCombinators.js";
import { pParams, pToken, toTokenOrQuotedString } from "./httpGrammar.js";
export const pMediaType = charStream => {
    const type = pToken(charStream);
    pForwardSlash(charStream);
    const subtype = pToken(charStream);
    const params = pParams(charStream);
    return {
        type,
        subtype,
        params,
    };
};
export const parseMediaType = parseWith(pMediaType);
export const parseMediaTypeOrThrow = parseWithOrThrow(pMediaType);
export const mediaTypeToString = ({ type, subtype, params, }) => {
    const stringParams = Object.entries(params)
        .map(([k, v]) => `${k}=${toTokenOrQuotedString(v)}`)
        .join("; ");
    return `${type}/${subtype}${stringParams.length > 0 ? ";" + stringParams : ""}`;
};
const compressionBlacklist = [
    "text/event-stream",
];
const textSubtypes = ["html", "json", "text", "xml"];
export const mediaTypeIsCompressible = ({ type, subtype }, db) => {
    var _a, _b;
    const mediaType = mediaTypeToString({ type, subtype, params: {} });
    const blackListed = compressionBlacklist.includes(mediaType);
    const compressible = (_b = (_a = db[mediaType]) === null || _a === void 0 ? void 0 : _a.compressible) !== null && _b !== void 0 ? _b : false;
    const typeIsText = type === "text";
    const subtypeIsText = textSubtypes.filter(x => subtype.endsWith(x)).length > 0;
    return !blackListed && (compressible || typeIsText || subtypeIsText);
};
