/// <reference types="./http.d.ts" />
import { none, orCompute as orCompute$1, isSome, isNone } from './option.mjs';
import { pipe, compose, returns, isEqualTo, raise, updaterReducer } from './functions.mjs';
import { __DEV__ } from './env.mjs';
import { map as map$1, join, fromObject, keep, length, everySatisfy, reduceRight } from './readonlyArray.mjs';
import { fromValue, empty } from './io.mjs';

const bannedHeaders = pipe([
    HttpStandardHeader.Accept,
    HttpStandardHeader.AcceptCharset,
    HttpStandardHeader.AcceptEncoding,
    HttpStandardHeader.AcceptLanguage,
    HttpStandardHeader.CacheControl,
    HttpStandardHeader.ContentEncoding,
    HttpStandardHeader.ContentLength,
    HttpStandardHeader.ContentType,
    HttpStandardHeader.ETag,
    HttpStandardHeader.Expect,
    HttpStandardHeader.Expires,
    HttpStandardHeader.IfMatch,
    HttpStandardHeader.IfNoneMatch,
    HttpStandardHeader.IfModifiedSince,
    HttpStandardHeader.IfUnmodifiedSince,
    HttpStandardHeader.IfRange,
    HttpStandardHeader.LastModified,
    HttpStandardHeader.TransferEncoding,
    HttpStandardHeader.Vary,
], map$1(s => s.toLowerCase()));
function getHeaderValue(headers, key) {
    var _a;
    return (_a = headers[key]) !== null && _a !== void 0 ? _a : headers[key.toLowerCase()];
}
const writeHttpHeaders = (headers, writeHeader) => {
    for (const header in headers) {
        if (headers.hasOwnProperty(header) &&
            !bannedHeaders.includes(header.toLowerCase())) {
            writeHeader(header, headers[header]);
        }
    }
};
const filterHeaders = (headers) => {
    const result = {};
    const writeHeader = (k, v) => {
        result[k] = v;
    };
    writeHttpHeaders(headers, writeHeader);
    return result;
};

class CharStreamImpl {
    constructor(src) {
        this.src = src;
        this.index = -1;
        this.current = -1;
        this.hasCurrent = false;
    }
    move() {
        this.hasCurrent = false;
        this.current = -1;
        this.index++;
        const index = this.index;
        const src = this.src;
        if (this.index < src.length) {
            this.hasCurrent = true;
            this.current = src.charCodeAt(index);
        }
        return this.hasCurrent;
    }
}
class ParserError {
    constructor(index) {
        this.index = index;
        this.error = new Error();
    }
    get stack() {
        return this.error.stack;
    }
}
const throwParseErrorDev = (charStream) => {
    const error = new ParserError(charStream.index);
    throw error;
};
const parseErrorSymbol = Symbol("@reactive-js/core/lib/parserCombinator/parseError");
const throwParseErrorProd = (_) => {
    throw parseErrorSymbol;
};
const _throwParseError = __DEV__ ? throwParseErrorDev : throwParseErrorProd;
const throwParseError = _throwParseError;
const isParseErrorDev = (e) => e instanceof ParserError;
const isParseErrorProd = (e) => e === parseErrorSymbol;
const _isParseError = __DEV__ ? isParseErrorDev : isParseErrorProd;
const isParseError = _isParseError;
const createCharStream = (input) => new CharStreamImpl(input);
function concat(...parsers) {
    return charStream => {
        const result = [];
        for (const parse of parsers) {
            const next = parse(charStream);
            result.push(next);
        }
        return result;
    };
}
const concatWith = (other) => parser => concat(parser, other);
const followedBy = (other) => parser => charStream => {
    const result = parser(charStream);
    other(charStream);
    return result;
};
const map = (mapper) => parser => compose(parser, mapper);
const mapTo = (v) => map(returns(v));
const parseWithOrThrow = (parser) => {
    const parse = pipe(parser, followedBy(pEof));
    return input => {
        const charStream = createCharStream(input);
        return parse(charStream);
    };
};
const parseWith = (parse) => {
    const doParse = parseWithOrThrow(parse);
    return input => {
        try {
            return doParse(input);
        }
        catch (e) {
            if (isParseError(e)) {
                return none;
            }
            throw e;
        }
    };
};
const or = (otherParse) => parse => charStream => {
    const index = charStream.index;
    try {
        return parse(charStream);
    }
    catch (e) {
        if (isParseError(e)) {
            charStream.index = index;
            return otherParse(charStream);
        }
        else {
            throw e;
        }
    }
};
const many = (options = {}) => parse => charStream => {
    const { min = 0, max = Number.MAX_SAFE_INTEGER } = options;
    const retval = [];
    let count = 0;
    let index = -1;
    try {
        while (count < max) {
            index = charStream.index;
            const next = parse(charStream);
            count++;
            retval.push(next);
        }
    }
    catch (e) {
        if (isParseError(e)) {
            charStream.index = index;
        }
        else {
            throw e;
        }
    }
    return count < min ? throwParseError(charStream) : retval;
};
const manyIgnore = (options = {}) => parse => charStream => {
    const { min = 0, max = Number.MAX_SAFE_INTEGER } = options;
    let count = 0;
    let index = -1;
    try {
        while (count < max) {
            index = charStream.index;
            parse(charStream);
            count++;
        }
    }
    catch (e) {
        if (isParseError(e)) {
            charStream.index = index;
        }
        else {
            throw e;
        }
    }
    return count < min ? throwParseError(charStream) : none;
};
const optional = (parse) => charStream => {
    const index = charStream.index;
    try {
        return parse(charStream);
    }
    catch (e) {
        if (isParseError(e)) {
            charStream.index = index;
            return none;
        }
        else {
            throw e;
        }
    }
};
const orCompute = (compute) => compose(optional, map(orCompute$1(compute)));
const sepBy1 = (separator) => parser => {
    const parseTailValue = (charStream) => {
        separator(charStream);
        return parser(charStream);
    };
    const parseTail = many()(parseTailValue);
    return charStream => {
        const first = parser(charStream);
        const tail = parseTail(charStream);
        // Perf hack to avoid allocations
        tail.unshift(first);
        return tail;
    };
};
const sepBy = (separator) => compose(sepBy1(separator), orCompute(returns([])));
const string = (str) => charStream => {
    charStream.move();
    const match = charStream.src.startsWith(str, charStream.index);
    if (match) {
        charStream.index += str.length - 1;
        return str;
    }
    else {
        return throwParseError(charStream);
    }
};
const satisfy = (f) => charStream => {
    if (charStream.move()) {
        const current = charStream.current;
        if (f(current)) {
            return current;
        }
    }
    return throwParseError(charStream);
};
const manySatisfy = (options = {}) => parser => {
    const parse = manyIgnore(options)(parser);
    return charStream => {
        const start = charStream.index + 1;
        parse(charStream);
        return charStream.src.substring(start, charStream.index + 1);
    };
};
const char = (c) => pipe(c.charCodeAt(0), isEqualTo, satisfy);
const pEof = (charStream) => charStream.move() ? throwParseError(charStream) : none;
const pSemicolon = char(";");
const pComma = char(",");
const pSpace = char(" ");
const pColon = char(":");
const pPeriod = char(".");
const pEquals = char("=");
const pForwardSlash = char("/");
const pDash = char("-");
const pOpenParen = char("(");
const pCloseParen = char(")");
const pDquote = char('"');
const pAsterisk = char("*");

var ASCII$1;
(function (ASCII) {
    ASCII[ASCII["HTAB"] = 9] = "HTAB";
    ASCII[ASCII["SPACE"] = 32] = "SPACE";
    ASCII[ASCII["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
    ASCII[ASCII["DQOUTE"] = 34] = "DQOUTE";
    ASCII[ASCII["HASH"] = 35] = "HASH";
    ASCII[ASCII["DOLLAR_SIGN"] = 36] = "DOLLAR_SIGN";
    ASCII[ASCII["PERCENT_SIGN"] = 37] = "PERCENT_SIGN";
    ASCII[ASCII["AMPERSAND"] = 38] = "AMPERSAND";
    ASCII[ASCII["APOSTROPHE"] = 39] = "APOSTROPHE";
    ASCII[ASCII["ASTERISK"] = 42] = "ASTERISK";
    ASCII[ASCII["PLUS_SIGN"] = 43] = "PLUS_SIGN";
    ASCII[ASCII["MINUS_SIGN"] = 45] = "MINUS_SIGN";
    ASCII[ASCII["PERIOD"] = 46] = "PERIOD";
    ASCII[ASCII["BACKSLASH"] = 92] = "BACKSLASH";
    ASCII[ASCII["CARET"] = 94] = "CARET";
    ASCII[ASCII["UNDERSCORE"] = 95] = "UNDERSCORE";
    ASCII[ASCII["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
    ASCII[ASCII["PIPE"] = 124] = "PIPE";
    ASCII[ASCII["TILDE"] = 126] = "TILDE";
    ASCII[ASCII["_a"] = 97] = "_a";
    ASCII[ASCII["_z"] = 122] = "_z";
    ASCII[ASCII["_A"] = 65] = "_A";
    ASCII[ASCII["_Z"] = 90] = "_Z";
    ASCII[ASCII["_0"] = 48] = "_0";
    ASCII[ASCII["_9"] = 57] = "_9";
})(ASCII$1 || (ASCII$1 = {}));
const pTChar = satisfy(c => c === ASCII$1.EXCLAMATION_MARK ||
    c === ASCII$1.HASH ||
    c === ASCII$1.DOLLAR_SIGN ||
    c === ASCII$1.PERCENT_SIGN ||
    c === ASCII$1.AMPERSAND ||
    c === ASCII$1.APOSTROPHE ||
    c === ASCII$1.ASTERISK ||
    c === ASCII$1.PLUS_SIGN ||
    c === ASCII$1.MINUS_SIGN ||
    c === ASCII$1.PERIOD ||
    c === ASCII$1.CARET ||
    c === ASCII$1.UNDERSCORE ||
    c === ASCII$1.GRAVE_ACCENT ||
    c === ASCII$1.PIPE ||
    c === ASCII$1.TILDE ||
    (c >= ASCII$1._0 && c <= ASCII$1._9) ||
    (c >= ASCII$1._a && c <= ASCII$1._z) ||
    (c >= ASCII$1._A && c <= ASCII$1._Z));
const pWS = satisfy(c => c === ASCII$1.SPACE || c === ASCII$1.HTAB);
const pOWS = manyIgnore()(pWS);
const pQuotedString = charStream => {
    let builder = none;
    charStream.move();
    const initialIndex = charStream.index;
    if (charStream.current !== ASCII$1.DQOUTE) {
        throwParseError(charStream);
    }
    while (charStream.move()) {
        const c = charStream.current;
        const isQDText = c === ASCII$1.HTAB ||
            c === ASCII$1.SPACE ||
            c === ASCII$1.EXCLAMATION_MARK ||
            (c >= 0x23 && c <= 0x5b) ||
            (c >= 0x5d && c <= 0x7e) ||
            (c >= 0x80 && c <= 0xff); // obs-text
        if (c === ASCII$1.DQOUTE) {
            break;
        }
        else if (isQDText) {
            const refinableBuilder = builder;
            if (isSome(refinableBuilder)) {
                refinableBuilder.push(c);
            }
        }
        else if (c === ASCII$1.BACKSLASH && charStream.move()) {
            if (isNone(builder)) {
                builder = [];
            }
            const c = charStream.current;
            const isQuotedPairChar = c === ASCII$1.HTAB ||
                c === ASCII$1.SPACE ||
                (c >= 0x21 && c <= 0x7e) || // VCHAR
                (c >= 0x80 && c <= 0xff); // obs-text
            if (!isQuotedPairChar) {
                throwParseError(charStream);
            }
            builder.push(c);
        }
        else {
            throwParseError(charStream);
        }
    }
    return isSome(builder)
        ? String.fromCharCode(...builder)
        : charStream.src.substring(initialIndex + 1, charStream.index);
};
const pToken = pipe(pTChar, manySatisfy({ min: 1 }));
const pTokenOrQuotedString = pipe(pToken, or(pQuotedString));
const pParameter = (charStream) => {
    const key = pToken(charStream);
    pEquals(charStream);
    const value = pTokenOrQuotedString(charStream);
    return [key, value];
};
const toTokenOrQuotedString = (input) => {
    let buffer = none;
    for (let i = 0; i < input.length; i++) {
        const c = input.charCodeAt(i);
        const isQuotedPairChar = c === ASCII$1.HTAB ||
            c === ASCII$1.SPACE ||
            (c >= 0x21 && c <= 0x7e) || // VCHAR
            (c >= 0x80 && c <= 0xff); // obs-text
        const isQDText = c === ASCII$1.HTAB ||
            c === ASCII$1.SPACE ||
            c === ASCII$1.EXCLAMATION_MARK ||
            (c >= 0x23 && c <= 0x5b) ||
            (c >= 0x5d && c <= 0x7e) ||
            (c >= 0x80 && c <= 0xff); // obs-text
        if (isQuotedPairChar && !isQDText) {
            if (isNone(buffer)) {
                buffer = [ASCII$1.DQOUTE];
                for (let j = 0; j < i; j++) {
                    const c = input.charCodeAt(j);
                    buffer.push(c);
                }
            }
            buffer.push(ASCII$1.BACKSLASH);
        }
        else if (!isQDText) {
            // FIXME: Error type?
            raise();
        }
        if (isSome(buffer)) {
            buffer.push(c);
        }
    }
    if (isSome(buffer)) {
        buffer.push(ASCII$1.DQOUTE);
        return String.fromCharCode(...buffer);
    }
    else {
        return input;
    }
};
const pParamsParam = (charStream) => {
    pOWS(charStream);
    pSemicolon(charStream);
    pOWS(charStream);
    return pParameter(charStream);
};
const pParams = pipe(pParamsParam, many(), map(results => {
    const params = {};
    for (const [k, v] of results) {
        params[k] = v;
    }
    return params;
}));
const owsCommaOws = (charStream) => {
    pOWS(charStream);
    pComma(charStream);
    pOWS(charStream);
};
const httpList = (parser) => pipe(parser, sepBy(owsCommaOws));
const pFieldVchar = satisfy(c => (c >= 0x21 && c <= 0x7e) || (c >= 0x80 && c <= 0xff));
const pFieldVCharSpHTab = satisfy(c => c === ASCII$1.SPACE ||
    c === ASCII$1.HTAB ||
    (c >= 0x21 && c <= 0x7e) ||
    (c >= 0x80 && c <= 0xff));
const parseManyFieldVCharSpHTab = manyIgnore()(pFieldVCharSpHTab);
/**
 * Fails if field value includes obs-fold, which is intentional per the spec:
 * https://tools.ietf.org/html/rfc7230#section-3.2.4
 */
const pFieldValue = (charStream) => {
    const index = charStream.index + 1;
    pFieldVchar(charStream);
    parseManyFieldVCharSpHTab(charStream);
    // Backtrack the last char to make sure its not space.
    charStream.index--;
    pFieldVchar(charStream);
    return charStream.src.substring(index, charStream.index + 1);
};
const pCRLF = string("\r\n");
const pHeaders = (charStream) => {
    const result = {};
    let index = -1;
    try {
        while (true) {
            index = charStream.index;
            const fieldName = pToken(charStream);
            pColon(charStream);
            pOWS(charStream);
            const value = pFieldValue(charStream);
            pOWS(charStream);
            pCRLF(charStream);
            result[fieldName] = value;
        }
    }
    catch (e) {
        if (isParseError(e)) {
            charStream.index = index;
        }
        else {
            throw e;
        }
    }
    return result;
};
const parsePreProcessedHeaders = parseWith(pHeaders);
const parseHeaders = (rawHeaders) => {
    var _b;
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    return (_b = parsePreProcessedHeaders(preProcessedHeaders)) !== null && _b !== void 0 ? _b : {};
};

const pOptionalEquals = optional(pEquals);
const pCacheDirective = (charStream) => {
    const directive = pToken(charStream);
    const hasValue = isSome(pOptionalEquals(charStream));
    const value = hasValue ? pTokenOrQuotedString(charStream) : "";
    return { directive, value };
};
const parseCacheDirective = parseWith(pCacheDirective);
const parseCacheDirectiveOrThrow = parseWithOrThrow(pCacheDirective);
const cacheDirectiveToString = ({ directive, value, }) => value.length > 0
    ? `${directive}=${toTokenOrQuotedString(value)}`
    : `${directive}`;
const parseCacheDirectiveList = pipe(pCacheDirective, httpList, parseWith);
const parseCacheControlFromHeaders = (headers) => {
    var _a;
    const cacheControl = getHeaderValue(headers, HttpStandardHeader.CacheControl);
    return isSome(cacheControl)
        ? (_a = parseCacheDirectiveList(cacheControl)) !== null && _a !== void 0 ? _a : [] : [];
};
const writeHttpCacheControlHeader = (cacheControl, writeHeader) => {
    if (cacheControl.length > 0) {
        writeHeader(HttpStandardHeader.CacheControl, pipe(cacheControl, map$1(cacheDirectiveToString), join(",")));
    }
};

const pMediaType = charStream => {
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
const parseMediaType = parseWith(pMediaType);
const parseMediaTypeOrThrow = parseWithOrThrow(pMediaType);
const mediaTypeToString = ({ type, subtype, params, }) => pipe(params, fromObject(), map$1(([k, v]) => `${k}=${toTokenOrQuotedString(v)}`), join("; "), stringParams => `${type}/${subtype}${stringParams.length > 0 ? ";" + stringParams : ""}`);
const compressionBlacklist = [
    "text/event-stream",
];
const textSubtypes = ["html", "json", "text", "xml"];
const mediaTypeIsCompressible = ({ type, subtype }, db) => {
    var _a, _b;
    const mediaType = mediaTypeToString({ type, subtype, params: {} });
    const blackListed = compressionBlacklist.includes(mediaType);
    const compressible = (_b = (_a = db[mediaType]) === null || _a === void 0 ? void 0 : _a.compressible) !== null && _b !== void 0 ? _b : false;
    const typeIsText = type === "text";
    const subtypeIsText = pipe(textSubtypes, keep(x => subtype.endsWith(x)), length) > 0;
    return !blackListed && (compressible || typeIsText || subtypeIsText);
};

const parseTokenList = pipe(pToken, httpList, parseWith);
const parseHttpContentInfoFromHeaders = (headers) => {
    var _a, _b, _c;
    const contentEncodingString = (_a = getHeaderValue(headers, HttpStandardHeader.ContentEncoding)) !== null && _a !== void 0 ? _a : "";
    const contentEncodings = parseTokenList(contentEncodingString);
    const contentLengthHeader = (_b = getHeaderValue(headers, HttpStandardHeader.ContentLength)) !== null && _b !== void 0 ? _b : "-1";
    const contentLength = ~~contentLengthHeader;
    const contentType = parseMediaType((_c = getHeaderValue(headers, HttpStandardHeader.ContentType)) !== null && _c !== void 0 ? _c : "");
    return isNone(contentType)
        ? none
        : {
            contentEncodings,
            contentLength,
            contentType,
        };
};
const writeHttpContentInfoHeaders = (content, writeHeader) => {
    const { contentLength, contentType, contentEncodings } = content;
    if (contentLength > 0) {
        writeHeader(HttpStandardHeader.ContentLength, contentLength.toString(10));
    }
    writeHeader(HttpStandardHeader.ContentType, mediaTypeToString(contentType));
    if (contentEncodings.length > 0) {
        writeHeader(HttpStandardHeader.ContentEncoding, pipe(contentEncodings, join(", ")));
    }
};
const createHttpContentInfo = ({ contentEncodings, contentLength, contentType, }) => ({
    contentEncodings: contentEncodings !== null && contentEncodings !== void 0 ? contentEncodings : [],
    contentLength: contentLength !== null && contentLength !== void 0 ? contentLength : -1,
    contentType: typeof contentType === "string"
        ? parseMediaTypeOrThrow(contentType)
        : contentType,
});
const contentIsCompressible = (content, db) => content.contentEncodings.length === 0 && // Don't double encode
    mediaTypeIsCompressible(content.contentType, db);

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
    // Mutate to avoid allocations. Kinda evil.
    mediaTypes.sort(mediaRangeCompare);
    return pipe(mediaTypes, map$1(mediaTypeToMediaRange));
}), parseWith);
const weightedTokenComparator = ([, a], [, b]) => weightedParamComparator(a, b);
const weightedTokenToToken = ([token]) => token;
const parseWeightedToken = pipe(pToken, concatWith(pParams), httpList, map(values => {
    // Mutate to avoid allocations. Kinda evil.
    values.sort(weightedTokenComparator);
    return pipe(values, map$1(weightedTokenToToken));
}), parseWith);
const parseWeightedTokenHeader = (headers, header) => {
    var _a;
    const rawValue = getHeaderValue(headers, header);
    return isSome(rawValue) ? (_a = parseWeightedToken(rawValue)) !== null && _a !== void 0 ? _a : [] : [];
};
const parseHttpPreferencesFromHeaders = (headers) => {
    var _a;
    const acceptedCharsets = parseWeightedTokenHeader(headers, HttpStandardHeader.AcceptCharset);
    const acceptedEncodings = parseWeightedTokenHeader(headers, HttpStandardHeader.AcceptEncoding);
    // FIXME: This is overly lax. See: https://tools.ietf.org/html/draft-ietf-httpbis-semantics-07#section-8.4.5
    const acceptedLanguages = parseWeightedTokenHeader(headers, HttpStandardHeader.AcceptLanguage);
    const rawAccept = getHeaderValue(headers, HttpStandardHeader.Accept);
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
const createHttpPreferences = ({ acceptedCharsets = [], acceptedEncodings = [], acceptedLanguages = [], acceptedMediaRanges = [], }) => {
    if ([
        acceptedCharsets,
        acceptedEncodings,
        acceptedLanguages,
        acceptedMediaRanges,
    ].findIndex(x => x.length > 0) < 0) {
        raise();
    }
    return {
        acceptedCharsets,
        acceptedEncodings,
        acceptedLanguages,
        acceptedMediaRanges: pipe(acceptedMediaRanges, map$1(mr => typeof mr === "string" ? parseMediaTypeOrThrow(mr) : mr)),
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
const writeHttpPreferenceHeaders = (preferences, writeHeader) => {
    const { acceptedCharsets, acceptedEncodings, acceptedLanguages, acceptedMediaRanges, } = preferences;
    writeWeightedTokenHeader(HttpStandardHeader.AcceptCharset, acceptedCharsets, writeHeader);
    writeWeightedTokenHeader(HttpStandardHeader.AcceptEncoding, acceptedEncodings, writeHeader);
    writeWeightedTokenHeader(HttpStandardHeader.AcceptLanguage, acceptedLanguages, writeHeader);
    const tokenizedMediaRanges = pipe(acceptedMediaRanges, map$1(({ type, subtype }) => `${type}/${subtype}`));
    writeWeightedTokenHeader(HttpStandardHeader.Accept, tokenizedMediaRanges, writeHeader);
};

const createHttpMessage = ({ body, cacheControl, contentInfo, headers = {}, preferences, ...rest }) => ({
    ...rest,
    body,
    cacheControl: isSome(cacheControl)
        ? pipe(cacheControl, map$1(cc => typeof cc === "string" ? parseCacheDirectiveOrThrow(cc) : cc))
        : parseCacheControlFromHeaders(headers),
    contentInfo: isSome(contentInfo)
        ? createHttpContentInfo(contentInfo)
        : parseHttpContentInfoFromHeaders(headers),
    headers: filterHeaders(headers !== null && headers !== void 0 ? headers : {}),
    preferences: isSome(preferences)
        ? createHttpPreferences(preferences)
        : parseHttpPreferencesFromHeaders(headers),
});
const writeHttpMessageHeaders = ({ cacheControl, contentInfo, headers, preferences }, writeHeader) => {
    writeHttpCacheControlHeader(cacheControl, writeHeader);
    if (isSome(contentInfo)) {
        writeHttpContentInfoHeaders(contentInfo, writeHeader);
    }
    if (isSome(preferences)) {
        writeHttpPreferenceHeaders(preferences, writeHeader);
    }
    writeHttpHeaders(headers, writeHeader);
};
const encodeHttpMessageWithUtf8 = ({ contentInfo: contentInfoOption, ...msg }) => {
    const contentInfo = isNone(contentInfoOption)
        ? raise("HttpMessage has no contentInfo")
        : contentInfoOption;
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
const decodeHttpMessageWithCharset = ({ contentInfo, ...msg }) => {
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
const toIOSourceHttpMessage = ({ body, ...msg }) => ({
    ...msg,
    body: fromValue()(body),
});

const entityTagToString = ({ isWeak, tag }) => isWeak ? `\\W"${tag}"` : `"${tag}"`;
const pETagc = satisfy(c => c >= 33 && c <= 256 /* VCHAR */ && c !== ASCII.DQOUTE);
const parseIsWeak = optional(string("W/"));
const parseTag = manySatisfy()(pETagc);
const pETag = (charStream) => {
    const isWeak = pipe(charStream, parseIsWeak, isSome);
    pDquote(charStream);
    const tag = parseTag(charStream);
    pDquote(charStream);
    return { isWeak, tag };
};
const parseETag = parseWith(pETag);
const parseETagOrThrow = parseWithOrThrow(pETag);
const parseETagFromHeaders = (headers) => {
    const etagHeader = getHeaderValue(headers, HttpStandardHeader.ETag);
    return isSome(etagHeader) ? parseETagOrThrow(etagHeader) : none;
};

const parseHttpDateTime = (v) => {
    const asDate = new Date(v);
    const result = asDate.getTime();
    return v !== "" && !Number.isNaN(result) ? result : none;
};
const httpDateTimeToString = (v) => {
    const date = new Date(v);
    return date.toUTCString();
};
const parseHttpDateTimeFromHeaders = (headers, header) => {
    var _a;
    const headerValue = (_a = getHeaderValue(headers, header)) !== null && _a !== void 0 ? _a : "";
    return parseHttpDateTime(headerValue);
};

const writeEtagPreferenceHeader = (header, value, writeHeader) => {
    if (isSome(value)) {
        writeHeader(header, value !== "*" ? pipe(value, map$1(entityTagToString), join(",")) : "*");
    }
};
const writeDateHeader = (header, value, writeHeader) => {
    if (isSome(value)) {
        writeHeader(header, httpDateTimeToString(value));
    }
};
const writeHttpRequestPreconditionsHeaders = ({ ifMatch, ifModifiedSince, ifNoneMatch, ifUnmodifiedSince, ifRange, }, writeHeader) => {
    writeEtagPreferenceHeader(HttpStandardHeader.IfMatch, ifMatch, writeHeader);
    writeEtagPreferenceHeader(HttpStandardHeader.IfNoneMatch, ifNoneMatch, writeHeader);
    writeDateHeader(HttpStandardHeader.IfModifiedSince, ifModifiedSince, writeHeader);
    writeDateHeader(HttpStandardHeader.IfUnmodifiedSince, ifUnmodifiedSince, writeHeader);
    if (isSome(ifRange)) {
        writeHeader(HttpStandardHeader.IfRange, typeof ifRange === "number"
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
const parseHttpRequestPreconditionsFromHeaders = (headers) => {
    var _a;
    const ifMatch = parseOptionalETagPreference(headers, HttpStandardHeader.IfMatch);
    const ifNoneMatch = parseOptionalETagPreference(headers, HttpStandardHeader.IfNoneMatch);
    const ifModifiedSince = parseOptionalDatePreference(headers, HttpStandardHeader.IfModifiedSince);
    const ifUnmodifiedSince = parseOptionalDatePreference(headers, HttpStandardHeader.IfUnmodifiedSince);
    const ifRangeHeader = getHeaderValue(headers, HttpStandardHeader.IfRange);
    const ifRange = isSome(ifRangeHeader)
        ? // FIXME: This is sketchy
         (_a = parseHttpDateTime(ifRangeHeader)) !== null && _a !== void 0 ? _a : parseETag(ifRangeHeader) : none;
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
const createHttpRequestPreconditions = ({ ifMatch, ifModifiedSince, ifNoneMatch, ifUnmodifiedSince, ifRange, }) => {
    if ([
        ifMatch,
        ifModifiedSince,
        ifNoneMatch,
        ifUnmodifiedSince,
        ifRange,
    ].findIndex(isSome) < 0 ||
        (Array.isArray(ifMatch) && ifMatch.length === 0) ||
        (Array.isArray(ifNoneMatch) && ifNoneMatch.length === 0)) {
        raise();
    }
    return {
        ifMatch: Array.isArray(ifMatch)
            ? pipe(ifMatch, map$1(etag => typeof etag === "string" ? parseETagOrThrow(etag) : etag))
            : ifMatch,
        ifModifiedSince: typeof ifModifiedSince === "string"
            ? parseHttpDateTime(ifModifiedSince)
            : ifModifiedSince instanceof Date
                ? ifModifiedSince.getTime()
                : ifModifiedSince,
        ifNoneMatch: Array.isArray(ifNoneMatch)
            ? pipe(ifNoneMatch, map$1(etag => typeof etag === "string" ? parseETagOrThrow(etag) : etag))
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

const parseExpectFromHeaders = (headers) => {
    const rawExpectHeader = getHeaderValue(headers, HttpStandardHeader.Expect);
    return rawExpectHeader === "100-continue";
};
const parseURIFromHeaders = ({ headers = {}, httpVersionMajor = 1, isTransportSecure = false, uri, }) => {
    var _a;
    const protocol = isTransportSecure ? "https" : "http";
    const forwardedProtocol = getHeaderValue(headers, HttpExtensionHeader.XForwardedProto);
    const uriProtocol = isSome(forwardedProtocol)
        ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
        : protocol;
    const forwardedHost = getHeaderValue(headers, HttpExtensionHeader.XForwardedHost);
    const http2Authority = headers[":authority"];
    const http1Host = getHeaderValue(headers, HttpStandardHeader.Host);
    const unfilteredHost = isSome(forwardedHost)
        ? forwardedHost
        : isSome(http2Authority) && httpVersionMajor >= 2
            ? http2Authority
            : isSome(http1Host)
                ? http1Host
                : "";
    const host = unfilteredHost.split(/\s*,\s*/, 1)[0];
    return new URL(`${uriProtocol}://${host}${(_a = String(uri)) !== null && _a !== void 0 ? _a : ""}`);
};
const createHttpRequest = (options) => {
    const { expectContinue, headers = {}, httpVersionMajor = 1, httpVersionMinor = 1, isTransportSecure = false, method, preconditions, ...rest } = options;
    const { uri: uriOption } = options;
    const uri = typeof uriOption === "string" && uriOption.startsWith("/")
        ? parseURIFromHeaders(options)
        : typeof uriOption === "string"
            ? new URL(uriOption)
            : uriOption;
    const msgOptions = {
        ...rest,
        expectContinue: isSome(expectContinue)
            ? expectContinue
            : parseExpectFromHeaders(headers),
        headers,
        httpVersionMajor: httpVersionMajor,
        httpVersionMinor: httpVersionMinor,
        isTransportSecure,
        method,
        preconditions: isSome(preconditions)
            ? createHttpRequestPreconditions(preconditions)
            : parseHttpRequestPreconditionsFromHeaders(headers),
        uri,
    };
    return createHttpMessage(msgOptions);
};
const disallowProtocolAndHostForwarding = () => request => {
    const { httpVersionMajor, headers: { "x-forwarded-proto": xForwardedProto, "x-forwarded-host": xForwardedHost, ...headers }, isTransportSecure, uri, } = request;
    return isNone(xForwardedProto) && isNone(xForwardedHost)
        ? request
        : {
            ...request,
            uri: parseURIFromHeaders({
                headers,
                httpVersionMajor,
                isTransportSecure,
                uri,
            }),
            headers,
        };
};
const writeHttpRequestHeaders = (request, writeHeader) => {
    const { expectContinue, preconditions } = request;
    if (expectContinue) {
        writeHeader(HttpStandardHeader.Expect, "100-continue");
    }
    if (isSome(preconditions)) {
        writeHttpRequestPreconditionsHeaders(preconditions, writeHeader);
    }
    writeHttpMessageHeaders(request, writeHeader);
};
const _encodeHttpRequestWithUtf8 = encodeHttpMessageWithUtf8;
const encodeHttpRequestWithUtf8 = _encodeHttpRequestWithUtf8;
const _decodeHttpRequestWithCharset = decodeHttpMessageWithCharset;
const decodeHttpRequestWithCharset = _decodeHttpRequestWithCharset;
const toIOSourceHttpRequest = (req) => toIOSourceHttpMessage(req);

const parseLocationFromHeaders = (headers) => {
    const locationValue = getHeaderValue(headers, HttpStandardHeader.Location);
    return isSome(locationValue) ? new URL(locationValue) : none;
};
const createHttpResponse = ({ etag, expires, headers = {}, lastModified, location, statusCode, vary, ...rest }) => {
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
                    : parseHttpDateTimeFromHeaders(headers, HttpStandardHeader.Expires),
        headers,
        lastModified: typeof lastModified === "string"
            ? parseHttpDateTime(lastModified)
            : lastModified instanceof Date
                ? lastModified.getTime()
                : isSome(lastModified)
                    ? lastModified
                    : parseHttpDateTimeFromHeaders(headers, HttpStandardHeader.LastModified),
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
const writeHttpResponseHeaders = (response, writeHeader) => {
    const { etag, expires, lastModified, location, vary } = response;
    if (isSome(etag)) {
        writeHeader(HttpStandardHeader.ETag, entityTagToString(etag));
    }
    if (isSome(expires)) {
        writeHeader(HttpStandardHeader.Expires, httpDateTimeToString(expires));
    }
    if (isSome(lastModified)) {
        writeHeader(HttpStandardHeader.LastModified, httpDateTimeToString(lastModified));
    }
    if (isSome(location)) {
        writeHeader(HttpStandardHeader.Location, location.toString());
    }
    if (vary.length > 0) {
        writeHeader(HttpStandardHeader.Vary, pipe(vary, join(",")));
    }
    writeHttpMessageHeaders(response, writeHeader);
};
const checkIfNotModified = ({ cacheControl, method, preconditions, }) => response => {
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
            statusCode: HttpStatusCode.NotModified,
        }
        : response;
};
const _encodeHttpResponseWithUtf8 = encodeHttpMessageWithUtf8;
const encodeHttpResponseWithUtf8 = _encodeHttpResponseWithUtf8;
const _decodeHttpResponseWithCharset = decodeHttpMessageWithCharset;
const decodeHttpResponseWithCharset = _decodeHttpResponseWithCharset;
const toIOSourceHttpResponse = (resp) => toIOSourceHttpMessage(resp);
const decodeHttpResponseContent = (decoderProvider) => resp => {
    const { body, contentInfo, ...rest } = resp;
    if (isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
        const decoders = pipe(contentInfo.contentEncodings, map$1(encoding => decoderProvider[encoding]));
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
                statusCode: HttpStatusCode.UnsupportedMediaType,
                body: empty(),
            });
        }
    }
    else {
        return resp;
    }
};
const encodeHttpResponseContent = (encoderProvider, db = {}) => {
    const supportedEncodings = Object.keys(encoderProvider);
    const httpResponseIsCompressible = (response) => {
        // Don't compress for Cache-Control: no-transform
        // https://tools.ietf.org/html/rfc7234#section-5.2.2.4
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
            vary: [...vary, HttpStandardHeader.AcceptEncoding],
        };
    };
};
const createHttpErrorResponse = (e) => {
    const statusCode = e instanceof URIError
        ? HttpStatusCode.BadRequest
        : HttpStatusCode.InternalServerError;
    return createHttpResponse({
        statusCode,
        body: e,
    });
};
const createRedirectHttpRequest = (request, response) => {
    const { contentInfo, method } = request;
    const { location, statusCode } = response;
    const redirectToGet = statusCode === HttpStatusCode.SeeOther ||
        ((statusCode === HttpStatusCode.MovedPermanently ||
            HttpStatusCode.Found === 302) &&
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
const decodeHttpRequestContent = (decoderProvider) => req => {
    const { body, contentInfo, ...rest } = req;
    if (isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
        const newBody = pipe(contentInfo.contentEncodings, map$1(encoding => {
            const decoder = decoderProvider[encoding];
            if (isNone(decoder)) {
                throw createHttpResponse({
                    statusCode: HttpStatusCode.UnsupportedMediaType,
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

var HttpStandardHeader;
(function (HttpStandardHeader) {
    HttpStandardHeader["Accept"] = "Accept";
    HttpStandardHeader["AcceptCharset"] = "Accept-Charset";
    HttpStandardHeader["AcceptEncoding"] = "Accept-Encoding";
    HttpStandardHeader["AcceptLanguage"] = "Accept-Language";
    HttpStandardHeader["AcceptRanges"] = "Accept-Ranges";
    HttpStandardHeader["Age"] = "Age";
    HttpStandardHeader["Allow"] = "Allow";
    HttpStandardHeader["Authorization"] = "Authorization";
    HttpStandardHeader["CacheControl"] = "Cache-Control";
    HttpStandardHeader["Connection"] = "Connection";
    HttpStandardHeader["ContentEncoding"] = "Content-Encoding";
    HttpStandardHeader["ContentLanguage"] = "Content-Language";
    HttpStandardHeader["ContentLength"] = "Content-Length";
    HttpStandardHeader["ContentLocation"] = "Content-Location";
    HttpStandardHeader["ContentMD5"] = "Content-MD5";
    HttpStandardHeader["ContentRange"] = "Content-Range";
    HttpStandardHeader["ContentType"] = "Content-Type";
    HttpStandardHeader["Cookie"] = "Cookie";
    HttpStandardHeader["Date"] = "Date";
    HttpStandardHeader["ETag"] = "ETag";
    HttpStandardHeader["Expect"] = "Expect";
    HttpStandardHeader["Expires"] = "Expires";
    HttpStandardHeader["From"] = "From";
    HttpStandardHeader["Host"] = "Host";
    HttpStandardHeader["IfMatch"] = "If-Match";
    HttpStandardHeader["IfModifiedSince"] = "If-Modified-Since";
    HttpStandardHeader["IfNoneMatch"] = "If-None-Match";
    HttpStandardHeader["IfRange"] = "If-Range";
    HttpStandardHeader["IfUnmodifiedSince"] = "If-Unmodified-Since";
    HttpStandardHeader["LastModified"] = "Last-Modified";
    HttpStandardHeader["Location"] = "Location";
    HttpStandardHeader["MaxForwards"] = "Max-Forwards";
    HttpStandardHeader["Pragma"] = "Pragma";
    HttpStandardHeader["ProxyAuthenticate"] = "Proxy-Authenticate";
    HttpStandardHeader["ProxyAuthorization"] = "Proxy-Authorization";
    HttpStandardHeader["Range"] = "Range";
    HttpStandardHeader["Referer"] = "Referer";
    HttpStandardHeader["RetryAfter"] = "Retry-After";
    HttpStandardHeader["Server"] = "Server";
    HttpStandardHeader["SetCookie"] = "Set-Cookie";
    HttpStandardHeader["TE"] = "TE";
    HttpStandardHeader["Trailer"] = "Trailer";
    HttpStandardHeader["TransferEncoding"] = "Transfer-Encoding";
    HttpStandardHeader["Upgrade"] = "Upgrade";
    HttpStandardHeader["UserAgent"] = "User-Agent";
    HttpStandardHeader["Vary"] = "Vary";
    HttpStandardHeader["Via"] = "Via";
    HttpStandardHeader["Warning"] = "Warning";
    HttpStandardHeader["WWWAuthenticate"] = "WWW-Authenticate";
})(HttpStandardHeader || (HttpStandardHeader = {}));
var HttpExtensionHeader;
(function (HttpExtensionHeader) {
    HttpExtensionHeader["XForwardedProto"] = "X-Forwarded-Proto";
    HttpExtensionHeader["XForwardedHost"] = "X-Forwarded-Host";
    HttpExtensionHeader["XHttpMethod"] = "X-HTTP-Method";
    HttpExtensionHeader["XHttpMethodOverride"] = "X-HTTP-Method-Override";
    HttpExtensionHeader["XMethodOverride"] = "X-Method-Override";
})(HttpExtensionHeader || (HttpExtensionHeader = {}));
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
    HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    HttpStatusCode[HttpStatusCode["Processing"] = 102] = "Processing";
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
    HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
    HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
    HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
    HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
    HttpStatusCode[HttpStatusCode["MultiStatus"] = 207] = "MultiStatus";
    HttpStatusCode[HttpStatusCode["AlreadyReported"] = 208] = "AlreadyReported";
    HttpStatusCode[HttpStatusCode["IMUsed"] = 226] = "IMUsed";
    HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
    HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
    HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
    HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
    HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
    HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
    HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpStatusCode[HttpStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
    HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
    HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
    HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
    HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
    HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
    HttpStatusCode[HttpStatusCode["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    HttpStatusCode[HttpStatusCode["RequestURITooLong"] = 414] = "RequestURITooLong";
    HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    HttpStatusCode[HttpStatusCode["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
    HttpStatusCode[HttpStatusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    HttpStatusCode[HttpStatusCode["Locked"] = 423] = "Locked";
    HttpStatusCode[HttpStatusCode["FailedDependency"] = 424] = "FailedDependency";
    HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
    HttpStatusCode[HttpStatusCode["PreconditionRequired"] = 428] = "PreconditionRequired";
    HttpStatusCode[HttpStatusCode["TooManyRequests"] = 429] = "TooManyRequests";
    HttpStatusCode[HttpStatusCode["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    HttpStatusCode[HttpStatusCode["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
    HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
    HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
    HttpStatusCode[HttpStatusCode["HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
    HttpStatusCode[HttpStatusCode["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    HttpStatusCode[HttpStatusCode["InsufficientStorage"] = 507] = "InsufficientStorage";
    HttpStatusCode[HttpStatusCode["LoopDetected"] = 508] = "LoopDetected";
    HttpStatusCode[HttpStatusCode["NotExtended"] = 510] = "NotExtended";
    HttpStatusCode[HttpStatusCode["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(HttpStatusCode || (HttpStatusCode = {}));

export { HttpExtensionHeader, HttpStandardHeader, HttpStatusCode, checkIfNotModified, createHttpErrorResponse, createHttpRequest, createHttpResponse, createRedirectHttpRequest, decodeHttpRequestContent, decodeHttpRequestWithCharset, decodeHttpResponseContent, decodeHttpResponseWithCharset, disallowProtocolAndHostForwarding, encodeHttpRequestWithUtf8, encodeHttpResponseContent, encodeHttpResponseWithUtf8, toIOSourceHttpRequest, toIOSourceHttpResponse, writeHttpRequestHeaders, writeHttpResponseHeaders };
