import { pipe } from "../../../../core/lib/functions.js";
import { isNone, isSome, none } from "../../../../core/lib/option.js";
import { parseWith, pAsterisk, or, mapTo } from "../parserCombinators.js";
import { entityTagToString, pETag, parseETag, parseETagOrThrow, } from "./entityTag.js";
import { httpDateTimeToString, parseHttpDateTime } from "./httpDateTime.js";
import { httpList } from "./httpGrammar.js";
import { getHeaderValue } from "./httpHeaders.js";
const writeEtagPreferenceHeader = (header, value, writeHeader) => {
    if (isSome(value)) {
        writeHeader(header, Array.isArray(value) ? value.map(entityTagToString).join(",") : "*");
    }
};
const writeDateHeader = (header, value, writeHeader) => {
    if (isSome(value)) {
        writeHeader(header, httpDateTimeToString(value));
    }
};
export const writeHttpRequestPreconditionsHeaders = ({ ifMatch, ifModifiedSince, ifNoneMatch, ifUnmodifiedSince, ifRange, }, writeHeader) => {
    writeEtagPreferenceHeader("If-Match", ifMatch, writeHeader);
    writeEtagPreferenceHeader("If-None-Match", ifNoneMatch, writeHeader);
    writeDateHeader("If-Modified-Since", ifModifiedSince, writeHeader);
    writeDateHeader("If-Unmodified-Since", ifUnmodifiedSince, writeHeader);
    if (isSome(ifRange)) {
        writeHeader("If-Range", typeof ifRange === "number"
            ? httpDateTimeToString(ifRange)
            : entityTagToString(ifRange));
    }
};
const parseETagPreference = pipe(pETag, httpList, or(pipe(pAsterisk, mapTo("*"))), parseWith);
const parseOptionalETagPreference = (headers, header) => {
    const value = getHeaderValue(headers, header);
    return isSome(value) ? parseETagPreference(value) : none;
};
const parseOptionalDatePreference = (headers, header) => { var _a; return pipe((_a = getHeaderValue(headers, header)) !== null && _a !== void 0 ? _a : "", parseHttpDateTime); };
export const parseHttpRequestPreconditionsFromHeaders = (headers) => {
    var _a;
    const ifMatch = parseOptionalETagPreference(headers, "If-Match");
    const ifNoneMatch = parseOptionalETagPreference(headers, "If-None-Match");
    const ifModifiedSince = parseOptionalDatePreference(headers, "If-Modified-Since");
    const ifUnmodifiedSince = parseOptionalDatePreference(headers, "If-Unmodified-Since");
    const ifRangeHeader = getHeaderValue(headers, "If-Range");
    const ifRange = isSome(ifRangeHeader)
        ? (_a = parseHttpDateTime(ifRangeHeader)) !== null && _a !== void 0 ? _a : parseETag(ifRangeHeader) : none;
    const isUndefined = isNone(ifMatch) &&
        isNone(ifNoneMatch) &&
        isNone(ifModifiedSince) &&
        isNone(ifUnmodifiedSince) &&
        isNone(ifRangeHeader);
    return isUndefined
        ? none
        : {
            ifMatch,
            ifModifiedSince,
            ifNoneMatch,
            ifUnmodifiedSince,
            ifRange,
        };
};
const parseIfRange = (ifRange) => {
    const etag = parseETag(ifRange);
    return isSome(etag) ? etag : parseHttpDateTime(ifRange);
};
export const createHttpRequestPreconditions = ({ ifMatch, ifModifiedSince, ifNoneMatch, ifUnmodifiedSince, ifRange, }) => {
    if ([
        ifMatch,
        ifModifiedSince,
        ifNoneMatch,
        ifUnmodifiedSince,
        ifRange,
    ].findIndex(isSome) < 0 ||
        (Array.isArray(ifMatch) && ifMatch.length === 0) ||
        (Array.isArray(ifNoneMatch) && ifNoneMatch.length === 0)) {
        throw new Error();
    }
    return {
        ifMatch: Array.isArray(ifMatch)
            ? ifMatch.map(etag => typeof etag === "string" ? parseETagOrThrow(etag) : etag)
            : ifMatch,
        ifModifiedSince: typeof ifModifiedSince === "string"
            ? parseHttpDateTime(ifModifiedSince)
            : ifModifiedSince instanceof Date
                ? ifModifiedSince.getTime()
                : ifModifiedSince,
        ifNoneMatch: Array.isArray(ifNoneMatch)
            ? ifNoneMatch.map(etag => typeof etag === "string" ? parseETagOrThrow(etag) : etag)
            : ifNoneMatch,
        ifUnmodifiedSince: typeof ifUnmodifiedSince === "string"
            ? parseHttpDateTime(ifUnmodifiedSince)
            : ifUnmodifiedSince instanceof Date
                ? ifUnmodifiedSince.getTime()
                : ifUnmodifiedSince,
        ifRange: typeof ifRange === "string"
            ? parseIfRange(ifRange)
            : ifRange instanceof Date
                ? ifRange.getTime()
                : ifRange,
    };
};
