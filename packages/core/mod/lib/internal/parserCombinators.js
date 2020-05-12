import { compose, isReferenceEqualTo, pipe, returns, } from "@reactive-js/core/lib/functions";
import { __DEV__ } from "@reactive-js/core/lib/internal/env";
import { none, orCompute as orComputeOption, } from "@reactive-js/core/lib/option";
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
const parseErrorSymbol = Symbol("ParseError");
const throwParseErrorProd = (_) => {
    throw parseErrorSymbol;
};
const _throwParseError = __DEV__ ? throwParseErrorDev : throwParseErrorProd;
export const throwParseError = _throwParseError;
const isParseErrorDev = (e) => e instanceof ParserError;
const isParseErrorProd = (e) => e === parseErrorSymbol;
const _isParseError = __DEV__ ? isParseErrorDev : isParseErrorProd;
export const isParseError = _isParseError;
export const createCharStream = (input) => new CharStreamImpl(input);
export function concat(...parsers) {
    return charStream => {
        const result = [];
        for (const parse of parsers) {
            const next = parse(charStream);
            result.push(next);
        }
        return result;
    };
}
export const concatWith = (other) => parser => concat(parser, other);
export const followedBy = (other) => parser => charStream => {
    const result = parser(charStream);
    other(charStream);
    return result;
};
export const map = (mapper) => parser => compose(parser, mapper);
export const mapTo = (v) => map(returns(v));
export const parseWithOrThrow = (parser) => {
    const parse = pipe(parser, followedBy(pEof));
    return input => {
        const charStream = createCharStream(input);
        return parse(charStream);
    };
};
export const parseWith = (parse) => {
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
export const or = (otherParse) => parse => charStream => {
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
export const many = (options = {}) => parse => charStream => {
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
export const manyIgnore = (options = {}) => parse => charStream => {
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
export const optional = (parse) => charStream => {
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
export const orCompute = (compute) => compose(optional, map(orComputeOption(compute)));
export const sepBy1 = (separator) => parser => {
    const parseTailValue = (charStream) => {
        separator(charStream);
        return parser(charStream);
    };
    const parseTail = many()(parseTailValue);
    return charStream => {
        const first = parser(charStream);
        const tail = parseTail(charStream);
        tail.unshift(first);
        return tail;
    };
};
export const sepBy = (separator) => compose(sepBy1(separator), orCompute(returns([])));
export const string = (str) => charStream => {
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
export const satisfy = (f) => charStream => {
    if (charStream.move()) {
        const current = charStream.current;
        if (f(current)) {
            return current;
        }
    }
    return throwParseError(charStream);
};
export const manySatisfy = (options = {}) => parser => {
    const parse = manyIgnore(options)(parser);
    return charStream => {
        const start = charStream.index + 1;
        parse(charStream);
        return charStream.src.substring(start, charStream.index + 1);
    };
};
export const char = (c) => {
    const charCode = c.charCodeAt(0);
    return satisfy(isReferenceEqualTo(charCode));
};
export const pEof = (charStream) => charStream.move() ? throwParseError(charStream) : none;
export const pSemicolon = char(";");
export const pComma = char(",");
export const pSpace = char(" ");
export const pColon = char(":");
export const pPeriod = char(".");
export const pEquals = char("=");
export const pForwardSlash = char("/");
export const pDash = char("-");
export const pOpenParen = char("(");
export const pCloseParen = char(")");
export const pDquote = char('"');
export const pAsterisk = char("*");
