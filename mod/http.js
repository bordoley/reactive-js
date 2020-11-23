'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
require('./disposable.js');
var readonlyArray = require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
require('./scheduler.js');
require('./observable.js');
require('./env.js');
require('./dispatcher.js');
require('./streamable.js');
require('./flowable.js');
var io = require('./io.js');
var parserCombinators = require('./parserCombinators.js');

const bannedHeaders = functions.pipe([
    "Accept" /* Accept */,
    "Accept-Charset" /* AcceptCharset */,
    "Accept-Encoding" /* AcceptEncoding */,
    "Accept-Language" /* AcceptLanguage */,
    "Cache-Control" /* CacheControl */,
    "Content-Encoding" /* ContentEncoding */,
    "Content-Length" /* ContentLength */,
    "Content-Type" /* ContentType */,
    "ETag" /* ETag */,
    "Expect" /* Expect */,
    "Expires" /* Expires */,
    "If-Match" /* IfMatch */,
    "If-None-Match" /* IfNoneMatch */,
    "If-Modified-Since" /* IfModifiedSince */,
    "If-Unmodified-Since" /* IfUnmodifiedSince */,
    "If-Range" /* IfRange */,
    "Last-Modified" /* LastModified */,
    "Transfer-Encoding" /* TransferEncoding */,
    "Vary" /* Vary */,
], readonlyArray.map(s => s.toLowerCase()));
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

const pTChar = parserCombinators.satisfy(c => c === 33 /* EXCLAMATION_MARK */ ||
    c === 35 /* HASH */ ||
    c === 36 /* DOLLAR_SIGN */ ||
    c === 37 /* PERCENT_SIGN */ ||
    c === 38 /* AMPERSAND */ ||
    c === 39 /* APOSTROPHE */ ||
    c === 42 /* ASTERISK */ ||
    c === 43 /* PLUS_SIGN */ ||
    c === 45 /* MINUS_SIGN */ ||
    c === 46 /* PERIOD */ ||
    c === 94 /* CARET */ ||
    c === 95 /* UNDERSCORE */ ||
    c === 96 /* GRAVE_ACCENT */ ||
    c === 124 /* PIPE */ ||
    c === 126 /* TILDE */ ||
    (c >= 48 /* _0 */ && c <= 57 /* _9 */) ||
    (c >= 97 /* _a */ && c <= 122 /* _z */) ||
    (c >= 65 /* _A */ && c <= 90 /* _Z */));
const pWS = parserCombinators.satisfy(c => c === 32 /* SPACE */ || c === 9 /* HTAB */);
const pOWS = parserCombinators.manyIgnore()(pWS);
const pQuotedString = charStream => {
    let builder = option.none;
    charStream.move();
    const initialIndex = charStream.index;
    if (charStream.current !== 34 /* DQOUTE */) {
        parserCombinators.throwParseError(charStream);
    }
    while (charStream.move()) {
        const c = charStream.current;
        const isQDText = c === 9 /* HTAB */ ||
            c === 32 /* SPACE */ ||
            c === 33 /* EXCLAMATION_MARK */ ||
            (c >= 0x23 && c <= 0x5b) ||
            (c >= 0x5d && c <= 0x7e) ||
            (c >= 0x80 && c <= 0xff); // obs-text
        if (c === 34 /* DQOUTE */) {
            break;
        }
        else if (isQDText) {
            const refinableBuilder = builder;
            if (option.isSome(refinableBuilder)) {
                refinableBuilder.push(c);
            }
        }
        else if (c === 92 /* BACKSLASH */ && charStream.move()) {
            if (option.isNone(builder)) {
                builder = [];
            }
            const c = charStream.current;
            const isQuotedPairChar = c === 9 /* HTAB */ ||
                c === 32 /* SPACE */ ||
                (c >= 0x21 && c <= 0x7e) || // VCHAR
                (c >= 0x80 && c <= 0xff); // obs-text
            if (!isQuotedPairChar) {
                parserCombinators.throwParseError(charStream);
            }
            builder.push(c);
        }
        else {
            parserCombinators.throwParseError(charStream);
        }
    }
    return option.isSome(builder)
        ? String.fromCharCode(...builder)
        : charStream.src.substring(initialIndex + 1, charStream.index);
};
const pToken = functions.pipe(pTChar, parserCombinators.manySatisfy({ min: 1 }));
const pTokenOrQuotedString = functions.pipe(pToken, parserCombinators.or(pQuotedString));
const pParameter = (charStream) => {
    const key = pToken(charStream);
    parserCombinators.pEquals(charStream);
    const value = pTokenOrQuotedString(charStream);
    return [key, value];
};
const toTokenOrQuotedString = (input) => {
    let buffer = option.none;
    for (let i = 0; i < input.length; i++) {
        const c = input.charCodeAt(i);
        const isQuotedPairChar = c === 9 /* HTAB */ ||
            c === 32 /* SPACE */ ||
            (c >= 0x21 && c <= 0x7e) || // VCHAR
            (c >= 0x80 && c <= 0xff); // obs-text
        const isQDText = c === 9 /* HTAB */ ||
            c === 32 /* SPACE */ ||
            c === 33 /* EXCLAMATION_MARK */ ||
            (c >= 0x23 && c <= 0x5b) ||
            (c >= 0x5d && c <= 0x7e) ||
            (c >= 0x80 && c <= 0xff); // obs-text
        if (isQuotedPairChar && !isQDText) {
            if (option.isNone(buffer)) {
                buffer = [34 /* DQOUTE */];
                for (let j = 0; j < i; j++) {
                    const c = input.charCodeAt(j);
                    buffer.push(c);
                }
            }
            buffer.push(92 /* BACKSLASH */);
        }
        else if (!isQDText) {
            // FIXME: Error type?
            functions.raise();
        }
        if (option.isSome(buffer)) {
            buffer.push(c);
        }
    }
    if (option.isSome(buffer)) {
        buffer.push(34 /* DQOUTE */);
        return String.fromCharCode(...buffer);
    }
    else {
        return input;
    }
};
const pParamsParam = (charStream) => {
    pOWS(charStream);
    parserCombinators.pSemicolon(charStream);
    pOWS(charStream);
    return pParameter(charStream);
};
const pParams = functions.pipe(pParamsParam, parserCombinators.many(), parserCombinators.map(results => {
    const params = {};
    for (const [k, v] of results) {
        params[k] = v;
    }
    return params;
}));
const owsCommaOws = (charStream) => {
    pOWS(charStream);
    parserCombinators.pComma(charStream);
    pOWS(charStream);
};
const httpList = (parser) => functions.pipe(parser, parserCombinators.sepBy(owsCommaOws));
const pFieldVchar = parserCombinators.satisfy(c => (c >= 0x21 && c <= 0x7e) || (c >= 0x80 && c <= 0xff));
const pFieldVCharSpHTab = parserCombinators.satisfy(c => c === 32 /* SPACE */ ||
    c === 9 /* HTAB */ ||
    (c >= 0x21 && c <= 0x7e) ||
    (c >= 0x80 && c <= 0xff));
const parseManyFieldVCharSpHTab = parserCombinators.manyIgnore()(pFieldVCharSpHTab);
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
const pCRLF = parserCombinators.string("\r\n");
const pHeaders = (charStream) => {
    const result = {};
    let index = -1;
    try {
        while (true) {
            index = charStream.index;
            const fieldName = pToken(charStream);
            parserCombinators.pColon(charStream);
            pOWS(charStream);
            const value = pFieldValue(charStream);
            pOWS(charStream);
            pCRLF(charStream);
            result[fieldName] = value;
        }
    }
    catch (e) {
        if (parserCombinators.isParseError(e)) {
            charStream.index = index;
        }
        else {
            throw e;
        }
    }
    return result;
};
const parsePreProcessedHeaders = parserCombinators.parseWith(pHeaders);
const parseHeaders = (rawHeaders) => {
    var _b;
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    return (_b = parsePreProcessedHeaders(preProcessedHeaders)) !== null && _b !== void 0 ? _b : {};
};

const pOptionalEquals = parserCombinators.optional(parserCombinators.pEquals);
const pCacheDirective = (charStream) => {
    const directive = pToken(charStream);
    const hasValue = option.isSome(pOptionalEquals(charStream));
    const value = hasValue ? pTokenOrQuotedString(charStream) : "";
    return { directive, value };
};
const parseCacheDirective = parserCombinators.parseWith(pCacheDirective);
const parseCacheDirectiveOrThrow = parserCombinators.parseWithOrThrow(pCacheDirective);
const cacheDirectiveToString = ({ directive, value, }) => value.length > 0
    ? `${directive}=${toTokenOrQuotedString(value)}`
    : `${directive}`;
const parseCacheDirectiveList = functions.pipe(pCacheDirective, httpList, parserCombinators.parseWith);
const parseCacheControlFromHeaders = (headers) => {
    var _a;
    const cacheControl = getHeaderValue(headers, "Cache-Control" /* CacheControl */);
    return option.isSome(cacheControl)
        ? (_a = parseCacheDirectiveList(cacheControl)) !== null && _a !== void 0 ? _a : [] : [];
};
const writeHttpCacheControlHeader = (cacheControl, writeHeader) => {
    if (cacheControl.length > 0) {
        writeHeader("Cache-Control" /* CacheControl */, functions.pipe(cacheControl, readonlyArray.map(cacheDirectiveToString), readonlyArray.join(",")));
    }
};

const pMediaType = charStream => {
    const type = pToken(charStream);
    parserCombinators.pForwardSlash(charStream);
    const subtype = pToken(charStream);
    const params = pParams(charStream);
    return {
        type,
        subtype,
        params,
    };
};
const parseMediaType = parserCombinators.parseWith(pMediaType);
const parseMediaTypeOrThrow = parserCombinators.parseWithOrThrow(pMediaType);
const mediaTypeToString = ({ type, subtype, params, }) => functions.pipe(params, readonlyArray.fromObject(), readonlyArray.map(([k, v]) => `${k}=${toTokenOrQuotedString(v)}`), readonlyArray.join("; "), stringParams => `${type}/${subtype}${stringParams.length > 0 ? ";" + stringParams : ""}`);
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
    const subtypeIsText = functions.pipe(textSubtypes, readonlyArray.keep(x => subtype.endsWith(x)), readonlyArray.length) > 0;
    return !blackListed && (compressible || typeIsText || subtypeIsText);
};

const parseTokenList = functions.pipe(pToken, httpList, parserCombinators.parseWith);
const parseHttpContentInfoFromHeaders = (headers) => {
    var _a, _b, _c;
    const contentEncodingString = (_a = getHeaderValue(headers, "Content-Encoding" /* ContentEncoding */)) !== null && _a !== void 0 ? _a : "";
    const contentEncodings = parseTokenList(contentEncodingString);
    const contentLengthHeader = (_b = getHeaderValue(headers, "Content-Length" /* ContentLength */)) !== null && _b !== void 0 ? _b : "-1";
    const contentLength = ~~contentLengthHeader;
    const contentType = parseMediaType((_c = getHeaderValue(headers, "Content-Type" /* ContentType */)) !== null && _c !== void 0 ? _c : "");
    return option.isNone(contentType)
        ? option.none
        : {
            contentEncodings,
            contentLength,
            contentType,
        };
};
const writeHttpContentInfoHeaders = (content, writeHeader) => {
    const { contentLength, contentType, contentEncodings } = content;
    if (contentLength > 0) {
        writeHeader("Content-Length" /* ContentLength */, contentLength.toString(10));
    }
    writeHeader("Content-Type" /* ContentType */, mediaTypeToString(contentType));
    if (contentEncodings.length > 0) {
        writeHeader("Content-Encoding" /* ContentEncoding */, functions.pipe(contentEncodings, readonlyArray.join(", ")));
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
const parseAccept = functions.pipe(pMediaType, httpList, parserCombinators.map(mediaTypes => {
    // Mutate to avoid allocations. Kinda evil.
    mediaTypes.sort(mediaRangeCompare);
    return functions.pipe(mediaTypes, readonlyArray.map(mediaTypeToMediaRange));
}), parserCombinators.parseWith);
const weightedTokenComparator = ([, a], [, b]) => weightedParamComparator(a, b);
const weightedTokenToToken = ([token]) => token;
const parseWeightedToken = functions.pipe(pToken, parserCombinators.concatWith(pParams), httpList, parserCombinators.map(values => {
    // Mutate to avoid allocations. Kinda evil.
    values.sort(weightedTokenComparator);
    return functions.pipe(values, readonlyArray.map(weightedTokenToToken));
}), parserCombinators.parseWith);
const parseWeightedTokenHeader = (headers, header) => {
    var _a;
    const rawValue = getHeaderValue(headers, header);
    return option.isSome(rawValue) ? (_a = parseWeightedToken(rawValue)) !== null && _a !== void 0 ? _a : [] : [];
};
const parseHttpPreferencesFromHeaders = (headers) => {
    var _a;
    const acceptedCharsets = parseWeightedTokenHeader(headers, "Accept-Charset" /* AcceptCharset */);
    const acceptedEncodings = parseWeightedTokenHeader(headers, "Accept-Encoding" /* AcceptEncoding */);
    // FIXME: This is overly lax. See: https://tools.ietf.org/html/draft-ietf-httpbis-semantics-07#section-8.4.5
    const acceptedLanguages = parseWeightedTokenHeader(headers, "Accept-Language" /* AcceptLanguage */);
    const rawAccept = getHeaderValue(headers, "Accept" /* Accept */);
    const acceptedMediaRanges = option.isSome(rawAccept)
        ? (_a = parseAccept(rawAccept)) !== null && _a !== void 0 ? _a : [] : [];
    const isUndefined = acceptedCharsets.length === 0 &&
        acceptedEncodings.length === 0 &&
        acceptedLanguages.length === 0 &&
        acceptedMediaRanges.length === 0;
    return isUndefined
        ? option.none
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
        functions.raise();
    }
    return {
        acceptedCharsets,
        acceptedEncodings,
        acceptedLanguages,
        acceptedMediaRanges: functions.pipe(acceptedMediaRanges, readonlyArray.map(mr => typeof mr === "string" ? parseMediaTypeOrThrow(mr) : mr)),
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
    writeWeightedTokenHeader("Accept-Charset" /* AcceptCharset */, acceptedCharsets, writeHeader);
    writeWeightedTokenHeader("Accept-Encoding" /* AcceptEncoding */, acceptedEncodings, writeHeader);
    writeWeightedTokenHeader("Accept-Language" /* AcceptLanguage */, acceptedLanguages, writeHeader);
    const tokenizedMediaRanges = functions.pipe(acceptedMediaRanges, readonlyArray.map(({ type, subtype }) => `${type}/${subtype}`));
    writeWeightedTokenHeader("Accept" /* Accept */, tokenizedMediaRanges, writeHeader);
};

const createHttpMessage = ({ body, cacheControl, contentInfo, headers = {}, preferences, ...rest }) => ({
    ...rest,
    body,
    cacheControl: option.isSome(cacheControl)
        ? functions.pipe(cacheControl, readonlyArray.map(cc => typeof cc === "string" ? parseCacheDirectiveOrThrow(cc) : cc))
        : parseCacheControlFromHeaders(headers),
    contentInfo: option.isSome(contentInfo)
        ? createHttpContentInfo(contentInfo)
        : parseHttpContentInfoFromHeaders(headers),
    headers: filterHeaders(headers !== null && headers !== void 0 ? headers : {}),
    preferences: option.isSome(preferences)
        ? createHttpPreferences(preferences)
        : parseHttpPreferencesFromHeaders(headers),
});
const writeHttpMessageHeaders = ({ cacheControl, contentInfo, headers, preferences }, writeHeader) => {
    writeHttpCacheControlHeader(cacheControl, writeHeader);
    if (option.isSome(contentInfo)) {
        writeHttpContentInfoHeaders(contentInfo, writeHeader);
    }
    if (option.isSome(preferences)) {
        writeHttpPreferenceHeaders(preferences, writeHeader);
    }
    writeHttpHeaders(headers, writeHeader);
};
const encodeHttpMessageWithUtf8 = ({ contentInfo: contentInfoOption, ...msg }) => {
    const contentInfo = option.isNone(contentInfoOption)
        ? functions.raise("HttpMessage has no contentInfo")
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
    if (option.isNone(contentInfo)) {
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
    body: io.fromValue()(body),
});

const entityTagToString = ({ isWeak, tag }) => isWeak ? `\\W"${tag}"` : `"${tag}"`;
const pETagc = parserCombinators.satisfy(c => c >= 33 && c <= 256 /* VCHAR */ && c !== 34 /* DQOUTE */);
const parseIsWeak = parserCombinators.optional(parserCombinators.string("W/"));
const parseTag = parserCombinators.manySatisfy()(pETagc);
const pETag = (charStream) => {
    const isWeak = functions.pipe(charStream, parseIsWeak, option.isSome);
    parserCombinators.pDquote(charStream);
    const tag = parseTag(charStream);
    parserCombinators.pDquote(charStream);
    return { isWeak, tag };
};
const parseETag = parserCombinators.parseWith(pETag);
const parseETagOrThrow = parserCombinators.parseWithOrThrow(pETag);
const parseETagFromHeaders = (headers) => {
    const etagHeader = getHeaderValue(headers, "ETag" /* ETag */);
    return option.isSome(etagHeader) ? parseETagOrThrow(etagHeader) : option.none;
};

const parseHttpDateTime = (v) => {
    const asDate = new Date(v);
    const result = asDate.getTime();
    return v !== "" && !Number.isNaN(result) ? result : option.none;
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
    if (option.isSome(value)) {
        writeHeader(header, value !== "*" ? functions.pipe(value, readonlyArray.map(entityTagToString), readonlyArray.join(",")) : "*");
    }
};
const writeDateHeader = (header, value, writeHeader) => {
    if (option.isSome(value)) {
        writeHeader(header, httpDateTimeToString(value));
    }
};
const writeHttpRequestPreconditionsHeaders = ({ ifMatch, ifModifiedSince, ifNoneMatch, ifUnmodifiedSince, ifRange, }, writeHeader) => {
    writeEtagPreferenceHeader("If-Match" /* IfMatch */, ifMatch, writeHeader);
    writeEtagPreferenceHeader("If-None-Match" /* IfNoneMatch */, ifNoneMatch, writeHeader);
    writeDateHeader("If-Modified-Since" /* IfModifiedSince */, ifModifiedSince, writeHeader);
    writeDateHeader("If-Unmodified-Since" /* IfUnmodifiedSince */, ifUnmodifiedSince, writeHeader);
    if (option.isSome(ifRange)) {
        writeHeader("If-Range" /* IfRange */, typeof ifRange === "number"
            ? httpDateTimeToString(ifRange)
            : entityTagToString(ifRange));
    }
};
const parseETagPreference = functions.pipe(pETag, httpList, parserCombinators.or(functions.pipe(parserCombinators.pAsterisk, parserCombinators.mapTo("*"))), parserCombinators.parseWith);
const parseOptionalETagPreference = (headers, header) => {
    const value = getHeaderValue(headers, header);
    return option.isSome(value) ? parseETagPreference(value) : option.none;
};
const parseOptionalDatePreference = (headers, header) => { var _a; return functions.pipe((_a = getHeaderValue(headers, header)) !== null && _a !== void 0 ? _a : "", parseHttpDateTime); };
const parseHttpRequestPreconditionsFromHeaders = (headers) => {
    var _a;
    const ifMatch = parseOptionalETagPreference(headers, "If-Match" /* IfMatch */);
    const ifNoneMatch = parseOptionalETagPreference(headers, "If-None-Match" /* IfNoneMatch */);
    const ifModifiedSince = parseOptionalDatePreference(headers, "If-Modified-Since" /* IfModifiedSince */);
    const ifUnmodifiedSince = parseOptionalDatePreference(headers, "If-Unmodified-Since" /* IfUnmodifiedSince */);
    const ifRangeHeader = getHeaderValue(headers, "If-Range" /* IfRange */);
    const ifRange = option.isSome(ifRangeHeader)
        ? // FIXME: This is sketchy
         (_a = parseHttpDateTime(ifRangeHeader)) !== null && _a !== void 0 ? _a : parseETag(ifRangeHeader) : option.none;
    const isUndefined = option.isNone(ifMatch) &&
        option.isNone(ifNoneMatch) &&
        option.isNone(ifModifiedSince) &&
        option.isNone(ifUnmodifiedSince) &&
        option.isNone(ifRangeHeader);
    return isUndefined
        ? option.none
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
    return option.isSome(etag) ? etag : parseHttpDateTime(ifRange);
};
const createHttpRequestPreconditions = ({ ifMatch, ifModifiedSince, ifNoneMatch, ifUnmodifiedSince, ifRange, }) => {
    if ([
        ifMatch,
        ifModifiedSince,
        ifNoneMatch,
        ifUnmodifiedSince,
        ifRange,
    ].findIndex(option.isSome) < 0 ||
        (Array.isArray(ifMatch) && ifMatch.length === 0) ||
        (Array.isArray(ifNoneMatch) && ifNoneMatch.length === 0)) {
        functions.raise();
    }
    return {
        ifMatch: Array.isArray(ifMatch)
            ? functions.pipe(ifMatch, readonlyArray.map(etag => typeof etag === "string" ? parseETagOrThrow(etag) : etag))
            : ifMatch,
        ifModifiedSince: typeof ifModifiedSince === "string"
            ? parseHttpDateTime(ifModifiedSince)
            : ifModifiedSince instanceof Date
                ? ifModifiedSince.getTime()
                : ifModifiedSince,
        ifNoneMatch: Array.isArray(ifNoneMatch)
            ? functions.pipe(ifNoneMatch, readonlyArray.map(etag => typeof etag === "string" ? parseETagOrThrow(etag) : etag))
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
    const rawExpectHeader = getHeaderValue(headers, "Expect" /* Expect */);
    return rawExpectHeader === "100-continue";
};
const parseURIFromHeaders = ({ headers = {}, httpVersionMajor = 1, isTransportSecure = false, uri, }) => {
    var _a;
    const protocol = isTransportSecure ? "https" : "http";
    const forwardedProtocol = getHeaderValue(headers, "X-Forwarded-Proto" /* XForwardedProto */);
    const uriProtocol = option.isSome(forwardedProtocol)
        ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
        : protocol;
    const forwardedHost = getHeaderValue(headers, "X-Forwarded-Host" /* XForwardedHost */);
    const http2Authority = headers[":authority"];
    const http1Host = getHeaderValue(headers, "Host" /* Host */);
    const unfilteredHost = option.isSome(forwardedHost)
        ? forwardedHost
        : option.isSome(http2Authority) && httpVersionMajor >= 2
            ? http2Authority
            : option.isSome(http1Host)
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
        expectContinue: option.isSome(expectContinue)
            ? expectContinue
            : parseExpectFromHeaders(headers),
        headers,
        httpVersionMajor: httpVersionMajor,
        httpVersionMinor: httpVersionMinor,
        isTransportSecure,
        method,
        preconditions: option.isSome(preconditions)
            ? createHttpRequestPreconditions(preconditions)
            : parseHttpRequestPreconditionsFromHeaders(headers),
        uri,
    };
    return createHttpMessage(msgOptions);
};
const disallowProtocolAndHostForwarding = () => request => {
    const { httpVersionMajor, headers: { "x-forwarded-proto": xForwardedProto, "x-forwarded-host": xForwardedHost, ...headers }, isTransportSecure, uri, } = request;
    return option.isNone(xForwardedProto) && option.isNone(xForwardedHost)
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
        writeHeader("Expect" /* Expect */, "100-continue");
    }
    if (option.isSome(preconditions)) {
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
    const locationValue = getHeaderValue(headers, "Location" /* Location */);
    return option.isSome(locationValue) ? new URL(locationValue) : option.none;
};
const createHttpResponse = ({ etag, expires, headers = {}, lastModified, location, statusCode, vary, ...rest }) => {
    const options = {
        ...rest,
        etag: typeof etag === "string"
            ? parseETagOrThrow(etag)
            : option.isSome(etag)
                ? etag
                : parseETagFromHeaders(headers),
        expires: typeof expires === "string"
            ? parseHttpDateTime(expires)
            : expires instanceof Date
                ? expires.getTime()
                : option.isSome(expires)
                    ? expires
                    : parseHttpDateTimeFromHeaders(headers, "Expires" /* Expires */),
        headers,
        lastModified: typeof lastModified === "string"
            ? parseHttpDateTime(lastModified)
            : lastModified instanceof Date
                ? lastModified.getTime()
                : option.isSome(lastModified)
                    ? lastModified
                    : parseHttpDateTimeFromHeaders(headers, "Last-Modified" /* LastModified */),
        location: typeof location === "string"
            ? new URL(location)
            : option.isSome(location)
                ? location
                : parseLocationFromHeaders(headers),
        statusCode,
        vary: vary !== null && vary !== void 0 ? vary : [],
    };
    return createHttpMessage(options);
};
const writeHttpResponseHeaders = (response, writeHeader) => {
    const { etag, expires, lastModified, location, vary } = response;
    if (option.isSome(etag)) {
        writeHeader("ETag" /* ETag */, entityTagToString(etag));
    }
    if (option.isSome(expires)) {
        writeHeader("Expires" /* Expires */, httpDateTimeToString(expires));
    }
    if (option.isSome(lastModified)) {
        writeHeader("Last-Modified" /* LastModified */, httpDateTimeToString(lastModified));
    }
    if (option.isSome(location)) {
        writeHeader("Location" /* Location */, location.toString());
    }
    if (vary.length > 0) {
        writeHeader("Vary" /* Vary */, functions.pipe(vary, readonlyArray.join(",")));
    }
    writeHttpMessageHeaders(response, writeHeader);
};
const checkIfNotModified = ({ cacheControl, method, preconditions, }) => response => {
    var _a, _b;
    const { etag, lastModified } = response;
    const { statusCode, contentInfo: _, ...responseWithoutContent } = response;
    const methodSupportsConditionalResponse = method === "GET" /* GET */ || method === "HEAD" /* HEAD */;
    const statusCodeSupportsConditionalResponse = statusCode >= 200 && statusCode < 300;
    const isNoCacheRequest = cacheControl.findIndex(({ directive }) => directive === "no-cache") >= 0;
    const etagMatch = option.isSome(etag) &&
        ((preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifNoneMatch) === "*" ||
            ((_a = preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifNoneMatch) !== null && _a !== void 0 ? _a : []).findIndex(({ tag }) => tag === etag.tag) >= 0);
    const notModifiedSince = (lastModified !== null && lastModified !== void 0 ? lastModified : Number.MAX_SAFE_INTEGER) <=
        ((_b = preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifModifiedSince) !== null && _b !== void 0 ? _b : Number.MIN_SAFE_INTEGER);
    const match = option.isSome(etag) &&
        option.isSome(preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifNoneMatch) &&
        option.isSome(lastModified) &&
        option.isSome(preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifModifiedSince)
        ? notModifiedSince && etagMatch
        : option.isSome(etag) && option.isSome(preconditions === null || preconditions === void 0 ? void 0 : preconditions.ifNoneMatch)
            ? etagMatch
            : notModifiedSince;
    return methodSupportsConditionalResponse &&
        statusCodeSupportsConditionalResponse &&
        !isNoCacheRequest &&
        match
        ? {
            ...responseWithoutContent,
            statusCode: 304 /* NotModified */,
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
    if (option.isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
        const decoders = functions.pipe(contentInfo.contentEncodings, readonlyArray.map(encoding => decoderProvider[encoding]));
        const supportsDecodings = functions.pipe(decoders, readonlyArray.everySatisfy(option.isSome));
        if (supportsDecodings) {
            return {
                ...rest,
                contentInfo: {
                    contentType: contentInfo.contentType,
                    contentEncodings: [],
                    contentLength: -1,
                },
                body: functions.pipe(decoders, readonlyArray.reduceRight(functions.updaterReducer, functions.returns(body))),
            };
        }
        else {
            return createHttpResponse({
                statusCode: 415 /* UnsupportedMediaType */,
                body: io.empty(),
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
            option.isSome(contentInfo) &&
            contentIsCompressible(contentInfo, db));
    };
    return request => response => {
        const { body, contentInfo, vary } = response;
        if (option.isNone(contentInfo)) {
            return response;
        }
        const { preferences } = request;
        const shouldEncode = httpResponseIsCompressible(response);
        const acceptedEncodings = shouldEncode && option.isSome(preferences) ? preferences.acceptedEncodings : [];
        const contentEncoding = acceptedEncodings.find(encoding => supportedEncodings.includes(encoding));
        if (option.isNone(contentEncoding)) {
            return response;
        }
        const encode = option.isSome(contentEncoding)
            ? encoderProvider[contentEncoding]
            : option.none;
        if (option.isNone(encode)) {
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
            vary: [...vary, "Accept-Encoding" /* AcceptEncoding */],
        };
    };
};
const createHttpErrorResponse = (e) => {
    const statusCode = e instanceof URIError
        ? 400 /* BadRequest */
        : 500 /* InternalServerError */;
    return createHttpResponse({
        statusCode,
        body: e,
    });
};
const createRedirectHttpRequest = (request, response) => {
    const { contentInfo, method } = request;
    const { location, statusCode } = response;
    const redirectToGet = statusCode === 303 /* SeeOther */ ||
        ((statusCode === 301 /* MovedPermanently */ ||
            302 /* Found */ === 302) &&
            method === "POST" /* POST */);
    return option.isSome(location)
        ? {
            ...request,
            content: redirectToGet ? option.none : contentInfo,
            method: redirectToGet ? "GET" /* GET */ : method,
            uri: location,
        }
        : request;
};
const decodeHttpRequestContent = (decoderProvider) => req => {
    const { body, contentInfo, ...rest } = req;
    if (option.isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
        const newBody = functions.pipe(contentInfo.contentEncodings, readonlyArray.map(encoding => {
            const decoder = decoderProvider[encoding];
            if (option.isNone(decoder)) {
                throw createHttpResponse({
                    statusCode: 415 /* UnsupportedMediaType */,
                    body: option.none,
                });
            }
            return decoder;
        }), readonlyArray.reduceRight(functions.updaterReducer, functions.returns(body)));
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

exports.checkIfNotModified = checkIfNotModified;
exports.createHttpErrorResponse = createHttpErrorResponse;
exports.createHttpRequest = createHttpRequest;
exports.createHttpResponse = createHttpResponse;
exports.createRedirectHttpRequest = createRedirectHttpRequest;
exports.decodeHttpRequestContent = decodeHttpRequestContent;
exports.decodeHttpRequestWithCharset = decodeHttpRequestWithCharset;
exports.decodeHttpResponseContent = decodeHttpResponseContent;
exports.decodeHttpResponseWithCharset = decodeHttpResponseWithCharset;
exports.disallowProtocolAndHostForwarding = disallowProtocolAndHostForwarding;
exports.encodeHttpRequestWithUtf8 = encodeHttpRequestWithUtf8;
exports.encodeHttpResponseContent = encodeHttpResponseContent;
exports.encodeHttpResponseWithUtf8 = encodeHttpResponseWithUtf8;
exports.toIOSourceHttpRequest = toIOSourceHttpRequest;
exports.toIOSourceHttpResponse = toIOSourceHttpResponse;
exports.writeHttpRequestHeaders = writeHttpRequestHeaders;
exports.writeHttpResponseHeaders = writeHttpResponseHeaders;
