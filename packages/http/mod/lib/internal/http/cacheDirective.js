import { pipe } from "../../../../../core/mod/lib/functions.js";
import { optional, pEquals, parseWith, parseWithOrThrow, } from "../../../../../core/mod/lib/internal/parserCombinators.js";
import { isSome } from "../../../../../core/mod/lib/option.js";
import { pToken, pTokenOrQuotedString, toTokenOrQuotedString, httpList, } from "./httpGrammar.js";
import { getHeaderValue } from "./httpHeaders.js";
const pOptionalEquals = optional(pEquals);
const pCacheDirective = (charStream) => {
    const directive = pToken(charStream);
    const hasValue = isSome(pOptionalEquals(charStream));
    const value = hasValue ? pTokenOrQuotedString(charStream) : "";
    return { directive, value };
};
export const parseCacheDirective = parseWith(pCacheDirective);
export const parseCacheDirectiveOrThrow = parseWithOrThrow(pCacheDirective);
export const cacheDirectiveToString = ({ directive, value, }) => value.length > 0
    ? `${directive}=${toTokenOrQuotedString(value)}`
    : `${directive}`;
const parseCacheDirectiveList = pipe(pCacheDirective, httpList, parseWith);
export const parseCacheControlFromHeaders = (headers) => {
    var _a;
    const cacheControl = getHeaderValue(headers, "Cache-Control");
    return isSome(cacheControl)
        ? (_a = parseCacheDirectiveList(cacheControl)) !== null && _a !== void 0 ? _a : [] : [];
};
export const writeHttpCacheControlHeader = (cacheControl, writeHeader) => {
    if (cacheControl.length > 0) {
        writeHeader("Cache-Control", cacheControl.map(cacheDirectiveToString).join(","));
    }
};
