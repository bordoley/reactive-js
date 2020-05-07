import { pipe } from "../../../../core/lib/functions.js";
import { isSome, none } from "../../../../core/lib/option.js";
import { concat, map, parseWith } from "../parserCombinators.js";
import { pToken, pParams, httpList } from "./httpGrammar.js";
import { getHeaderValue } from "./httpHeaders.js";
import { pMediaType, parseMediaTypeOrThrow } from "./mediaType.js";
const weightedParamComparator = (a, b) => {
    var _a, _b;
    const qA = ((_a = Number.parseFloat(a["q"])) !== null && _a !== void 0 ? _a : 1) * 1000;
    const qB = ((_b = Number.parseFloat(b["q"])) !== null && _b !== void 0 ? _b : 1) * 1000;
    return qA - qB;
};
const mediaRangeCompare = (a, b) => weightedParamComparator(a.params, b.params);
const mediaTypeToMediaRange = ({ type, subtype }) => ({
    type,
    subtype,
});
const parseAccept = pipe(pMediaType, httpList, map(mediaTypes => {
    mediaTypes.sort(mediaRangeCompare);
    return mediaTypes.map(mediaTypeToMediaRange);
}), parseWith);
const weightedTokenComparator = ([, a], [, b]) => weightedParamComparator(a, b);
const weightedTokenToToken = ([token]) => token;
const parseWeightedToken = pipe(concat(pToken, pParams), httpList, map(values => {
    values.sort(weightedTokenComparator);
    return values.map(weightedTokenToToken);
}), parseWith);
const parseWeightedTokenHeader = (headers, header) => {
    var _a;
    const rawValue = getHeaderValue(headers, header);
    return isSome(rawValue) ? (_a = parseWeightedToken(rawValue)) !== null && _a !== void 0 ? _a : [] : [];
};
export const parseHttpPreferencesFromHeaders = (headers) => {
    var _a;
    const acceptedCharsets = parseWeightedTokenHeader(headers, "Accept-Charset");
    const acceptedEncodings = parseWeightedTokenHeader(headers, "Accept-Encoding");
    const acceptedLanguages = parseWeightedTokenHeader(headers, "Accept-Language");
    const rawAccept = getHeaderValue(headers, "Accept");
    const acceptedMediaRanges = isSome(rawAccept)
        ? (_a = parseAccept(rawAccept)) !== null && _a !== void 0 ? _a : [] : [];
    const isUndefined = acceptedCharsets.length === 0 &&
        acceptedEncodings.length === 0 &&
        acceptedLanguages.length === 0 &&
        acceptedMediaRanges.length === 0;
    return isUndefined
        ? none
        : {
            acceptedCharsets,
            acceptedEncodings,
            acceptedLanguages,
            acceptedMediaRanges,
        };
};
export const createHttpPreferences = ({ acceptedCharsets = [], acceptedEncodings = [], acceptedLanguages = [], acceptedMediaRanges = [], }) => {
    if ([
        acceptedCharsets,
        acceptedEncodings,
        acceptedLanguages,
        acceptedMediaRanges,
    ].findIndex(x => x.length > 0) < 0) {
        throw new Error();
    }
    return {
        acceptedCharsets,
        acceptedEncodings,
        acceptedLanguages,
        acceptedMediaRanges: acceptedMediaRanges.map(mr => typeof mr === "string" ? parseMediaTypeOrThrow(mr) : mr),
    };
};
const writeWeightedTokenHeader = (header, values, writeHeader) => {
    const length = values.length;
    if (length > 0) {
        const increment = 1000 / length;
        let result = "";
        for (let i = 0; i < length; i++) {
            result += values[i];
            if (i > 0) {
                const q = (i * increment) / 1000;
                result += `; q=${q.toFixed(1)}`;
            }
            if (i < length - 1) {
                result += ", ";
            }
        }
        writeHeader(header, result);
    }
};
export const writeHttpPreferenceHeaders = (preferences, writeHeader) => {
    const { acceptedCharsets, acceptedEncodings, acceptedLanguages, acceptedMediaRanges, } = preferences;
    writeWeightedTokenHeader("Accept-Charset", acceptedCharsets, writeHeader);
    writeWeightedTokenHeader("Accept-Encoding", acceptedEncodings, writeHeader);
    writeWeightedTokenHeader("Accept-Language", acceptedLanguages, writeHeader);
    const tokenizedMediaRanges = acceptedMediaRanges.map(({ type, subtype }) => `${type}/${subtype}`);
    writeWeightedTokenHeader("Accept", tokenizedMediaRanges, writeHeader);
};
