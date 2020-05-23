import { pipe } from "../../functions.js";
import { pEquals, or, throwParseError, map, satisfy, parseWith, manySatisfy, many, pComma, sepBy, manyIgnore, pSemicolon, pColon, isParseError, string, } from "../parserCombinators.js";
import { isNone, isSome, none } from "../../option.js";
const pTChar = satisfy(c => c === 33 ||
    c === 35 ||
    c === 36 ||
    c === 37 ||
    c === 38 ||
    c === 39 ||
    c === 42 ||
    c === 43 ||
    c === 45 ||
    c === 46 ||
    c === 94 ||
    c === 95 ||
    c === 96 ||
    c === 124 ||
    c === 126 ||
    (c >= 48 && c <= 57) ||
    (c >= 97 && c <= 122) ||
    (c >= 65 && c <= 90));
const pWS = satisfy(c => c === 32 || c === 9);
const pOWS = manyIgnore()(pWS);
const pQuotedString = charStream => {
    let builder = none;
    charStream.move();
    const initialIndex = charStream.index;
    if (charStream.current !== 34) {
        throwParseError(charStream);
    }
    while (charStream.move()) {
        const c = charStream.current;
        const isQDText = c === 9 ||
            c === 32 ||
            c === 33 ||
            (c >= 0x23 && c <= 0x5b) ||
            (c >= 0x5d && c <= 0x7e) ||
            (c >= 0x80 && c <= 0xff);
        if (c === 34) {
            break;
        }
        else if (isQDText) {
            const refinableBuilder = builder;
            if (isSome(refinableBuilder)) {
                refinableBuilder.push(c);
            }
        }
        else if (c === 92 && charStream.move()) {
            if (isNone(builder)) {
                builder = [];
            }
            const c = charStream.current;
            const isQuotedPairChar = c === 9 ||
                c === 32 ||
                (c >= 0x21 && c <= 0x7e) ||
                (c >= 0x80 && c <= 0xff);
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
export const pToken = pipe(pTChar, manySatisfy({ min: 1 }));
export const pTokenOrQuotedString = pipe(pToken, or(pQuotedString));
const pParameter = (charStream) => {
    const key = pToken(charStream);
    pEquals(charStream);
    const value = pTokenOrQuotedString(charStream);
    return [key, value];
};
export const toTokenOrQuotedString = (input) => {
    let buffer = none;
    for (let i = 0; i < input.length; i++) {
        const c = input.charCodeAt(i);
        const isQuotedPairChar = c === 9 ||
            c === 32 ||
            (c >= 0x21 && c <= 0x7e) ||
            (c >= 0x80 && c <= 0xff);
        const isQDText = c === 9 ||
            c === 32 ||
            c === 33 ||
            (c >= 0x23 && c <= 0x5b) ||
            (c >= 0x5d && c <= 0x7e) ||
            (c >= 0x80 && c <= 0xff);
        if (isQuotedPairChar && !isQDText) {
            if (isNone(buffer)) {
                buffer = [34];
                for (let j = 0; j < i; j++) {
                    const c = input.charCodeAt(j);
                    buffer.push(c);
                }
            }
            buffer.push(92);
        }
        else if (!isQDText) {
            throw new Error();
        }
        if (isSome(buffer)) {
            buffer.push(c);
        }
    }
    if (isSome(buffer)) {
        buffer.push(34);
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
export const pParams = pipe(pParamsParam, many(), map(results => {
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
export const httpList = (parser) => pipe(parser, sepBy(owsCommaOws));
const pFieldVchar = satisfy(c => (c >= 0x21 && c <= 0x7e) || (c >= 0x80 && c <= 0xff));
const pFieldVCharSpHTab = satisfy(c => c === 32 ||
    c === 9 ||
    (c >= 0x21 && c <= 0x7e) ||
    (c >= 0x80 && c <= 0xff));
const parseManyFieldVCharSpHTab = manyIgnore()(pFieldVCharSpHTab);
const pFieldValue = (charStream) => {
    const index = charStream.index + 1;
    pFieldVchar(charStream);
    parseManyFieldVCharSpHTab(charStream);
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
export const parseHeaders = (rawHeaders) => {
    var _b;
    const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    return (_b = parsePreProcessedHeaders(preProcessedHeaders)) !== null && _b !== void 0 ? _b : {};
};
