'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var env = require('./env.js');

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
const _throwParseError = env.__DEV__ ? throwParseErrorDev : throwParseErrorProd;
const throwParseError = _throwParseError;
const isParseErrorDev = (e) => e instanceof ParserError;
const isParseErrorProd = (e) => e === parseErrorSymbol;
const _isParseError = env.__DEV__ ? isParseErrorDev : isParseErrorProd;
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
const map = (mapper) => parser => functions.compose(parser, mapper);
const mapTo = (v) => map(functions.returns(v));
const parseWithOrThrow = (parser) => {
    const parse = functions.pipe(parser, followedBy(pEof));
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
                return option.none;
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
    return count < min ? throwParseError(charStream) : option.none;
};
const optional = (parse) => charStream => {
    const index = charStream.index;
    try {
        return parse(charStream);
    }
    catch (e) {
        if (isParseError(e)) {
            charStream.index = index;
            return option.none;
        }
        else {
            throw e;
        }
    }
};
const orCompute = (compute) => functions.compose(optional, map(option.orCompute(compute)));
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
const sepBy = (separator) => functions.compose(sepBy1(separator), orCompute(functions.returns([])));
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
const char = (c) => functions.pipe(c.charCodeAt(0), functions.isEqualTo, satisfy);
const pEof = (charStream) => charStream.move() ? throwParseError(charStream) : option.none;
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

exports.char = char;
exports.concat = concat;
exports.concatWith = concatWith;
exports.createCharStream = createCharStream;
exports.followedBy = followedBy;
exports.isParseError = isParseError;
exports.many = many;
exports.manyIgnore = manyIgnore;
exports.manySatisfy = manySatisfy;
exports.map = map;
exports.mapTo = mapTo;
exports.optional = optional;
exports.or = or;
exports.orCompute = orCompute;
exports.pAsterisk = pAsterisk;
exports.pCloseParen = pCloseParen;
exports.pColon = pColon;
exports.pComma = pComma;
exports.pDash = pDash;
exports.pDquote = pDquote;
exports.pEof = pEof;
exports.pEquals = pEquals;
exports.pForwardSlash = pForwardSlash;
exports.pOpenParen = pOpenParen;
exports.pPeriod = pPeriod;
exports.pSemicolon = pSemicolon;
exports.pSpace = pSpace;
exports.parseWith = parseWith;
exports.parseWithOrThrow = parseWithOrThrow;
exports.satisfy = satisfy;
exports.sepBy = sepBy;
exports.sepBy1 = sepBy1;
exports.string = string;
exports.throwParseError = throwParseError;
