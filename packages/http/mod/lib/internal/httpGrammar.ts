import { pipe } from "../../../../core/mod/lib/functions.ts";
import {
  Parser,
  pEquals,
  or,
  throwParseError,
  map,
  satisfy,
  parseWith,
  manySatisfy,
  many,
  pComma,
  sepBy,
  manyIgnore,
  CharStreamLike,
  pSemicolon,
  pColon,
  isParseError,
  string,
} from "../../../../core/mod/lib/internal/parserCombinators.ts";
import { isNone, isSome, none, Option } from "../../../../core/mod/lib/option.ts";
import { HttpHeaders } from "./httpHeaders.ts";

export const enum ASCII {
  HTAB = 9,
  SPACE = 32,
  EXCLAMATION_MARK = 33,
  DQOUTE = 34,
  HASH = 35,
  DOLLAR_SIGN = 36,
  PERCENT_SIGN = 37,
  AMPERSAND = 38,
  APOSTROPHE = 39,
  ASTERISK = 42,
  PLUS_SIGN = 43,
  MINUS_SIGN = 45,
  PERIOD = 46,
  BACKSLASH = 92,
  CARET = 94,
  UNDERSCORE = 95,
  GRAVE_ACCENT = 96,
  PIPE = 124,
  TILDE = 126,
  _a = 97,
  _z = 122,
  _A = 65,
  _Z = 90,
  _0 = 48,
  _9 = 57,
}

const pTChar = satisfy(
  c =>
    c === ASCII.EXCLAMATION_MARK ||
    c === ASCII.HASH ||
    c === ASCII.DOLLAR_SIGN ||
    c === ASCII.PERCENT_SIGN ||
    c === ASCII.AMPERSAND ||
    c === ASCII.APOSTROPHE ||
    c === ASCII.ASTERISK ||
    c === ASCII.PLUS_SIGN ||
    c === ASCII.MINUS_SIGN ||
    c === ASCII.PERIOD ||
    c === ASCII.CARET ||
    c === ASCII.UNDERSCORE ||
    c === ASCII.GRAVE_ACCENT ||
    c === ASCII.PIPE ||
    c === ASCII.TILDE ||
    (c >= ASCII._0 && c <= ASCII._9) ||
    (c >= ASCII._a && c <= ASCII._z) ||
    (c >= ASCII._A && c <= ASCII._Z),
);

const pWS = satisfy(c => c === ASCII.SPACE || c === ASCII.HTAB);

const pOWS: Parser<void> = manyIgnore()(pWS);

const pQuotedString: Parser<string> = charStream => {
  let builder: Option<number[]> = none;

  charStream.move();
  const initialIndex = charStream.index;

  if (charStream.current !== ASCII.DQOUTE) {
    throwParseError(charStream);
  }

  while (charStream.move()) {
    const c = charStream.current;

    const isQDText =
      c === ASCII.HTAB ||
      c === ASCII.SPACE ||
      c === ASCII.EXCLAMATION_MARK ||
      (c >= 0x23 && c <= 0x5b) ||
      (c >= 0x5d && c <= 0x7e) ||
      (c >= 0x80 && c <= 0xff); // obs-text

    if (c === ASCII.DQOUTE) {
      break;
    } else if (isQDText) {
      const refinableBuilder = builder;
      if (isSome(refinableBuilder)) {
        refinableBuilder.push(c);
      }
    } else if (c === ASCII.BACKSLASH && charStream.move()) {
      if (isNone(builder)) {
        builder = [];
      }

      const c = charStream.current;
      const isQuotedPairChar =
        c === ASCII.HTAB ||
        c === ASCII.SPACE ||
        (c >= 0x21 && c <= 0x7e) || // VCHAR
        (c >= 0x80 && c <= 0xff); // obs-text
      if (!isQuotedPairChar) {
        throwParseError(charStream);
      }
      builder.push(c);
    } else {
      throwParseError(charStream);
    }
  }

  return isSome(builder)
    ? String.fromCharCode(...builder)
    : charStream.src.substring(initialIndex + 1, charStream.index);
};

export const pToken = pipe(pTChar, manySatisfy({ min: 1 }));

export const pTokenOrQuotedString = pipe(pToken, or(pQuotedString));

const pParameter: Parser<[string, string]> = (charStream: CharStreamLike) => {
  const key = pToken(charStream);
  pEquals(charStream);
  const value = pTokenOrQuotedString(charStream);
  return [key, value];
};

export const toTokenOrQuotedString = (input: string): string => {
  let buffer: Option<number[]> = none;

  for (let i = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);

    const isQuotedPairChar =
      c === ASCII.HTAB ||
      c === ASCII.SPACE ||
      (c >= 0x21 && c <= 0x7e) || // VCHAR
      (c >= 0x80 && c <= 0xff); // obs-text

    const isQDText =
      c === ASCII.HTAB ||
      c === ASCII.SPACE ||
      c === ASCII.EXCLAMATION_MARK ||
      (c >= 0x23 && c <= 0x5b) ||
      (c >= 0x5d && c <= 0x7e) ||
      (c >= 0x80 && c <= 0xff); // obs-text

    if (isQuotedPairChar && !isQDText) {
      if (isNone(buffer)) {
        buffer = [ASCII.DQOUTE];
        for (let j = 0; j < i; j++) {
          const c = input.charCodeAt(j);
          buffer.push(c);
        }
      }

      buffer.push(ASCII.BACKSLASH);
    } else if (!isQDText) {
      // FIXME: Error type?
      throw new Error();
    }

    if (isSome(buffer)) {
      buffer.push(c);
    }
  }

  if (isSome(buffer)) {
    buffer.push(ASCII.DQOUTE);
    return String.fromCharCode(...buffer);
  } else {
    return input;
  }
};

const pParamsParam = (charStream: CharStreamLike) => {
  pOWS(charStream);
  pSemicolon(charStream);
  pOWS(charStream);
  return pParameter(charStream);
};

export const pParams: Parser<{ readonly [key: string]: string }> = pipe(
  pParamsParam,
  many(),
  map(results => {
    const params: { [key: string]: string } = {};
    for (const [k, v] of results) {
      params[k] = v;
    }
    return params;
  }),
);

const owsCommaOws = (charStream: CharStreamLike): void => {
  pOWS(charStream);
  pComma(charStream);
  pOWS(charStream);
};

export const httpList = <T>(parser: Parser<T>): Parser<readonly T[]> =>
  pipe(parser, sepBy(owsCommaOws));

const pFieldVchar = satisfy(
  c => (c >= 0x21 && c <= 0x7e) || (c >= 0x80 && c <= 0xff),
);

const pFieldVCharSpHTab = satisfy(
  c =>
    c === ASCII.SPACE ||
    c === ASCII.HTAB ||
    (c >= 0x21 && c <= 0x7e) ||
    (c >= 0x80 && c <= 0xff),
);

const parseManyFieldVCharSpHTab = manyIgnore()(pFieldVCharSpHTab);

/**
 * Fails if field value includes obs-fold, which is intentional per the spec:
 * https://tools.ietf.org/html/rfc7230#section-3.2.4
 */
const pFieldValue = (charStream: CharStreamLike) => {
  const index = charStream.index + 1;
  pFieldVchar(charStream);
  parseManyFieldVCharSpHTab(charStream);
  // Backtrack the last char to make sure its not space.
  charStream.index--;
  pFieldVchar(charStream);

  return charStream.src.substring(index, charStream.index + 1);
};

const pCRLF = string("\r\n");

const pHeaders = (charStream: CharStreamLike): HttpHeaders => {
  const result: { [key: string]: string } = {};
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
  } catch (e) {
    if (isParseError(e)) {
      charStream.index = index;
    } else {
      throw e;
    }
  }
  return result;
};

const parsePreProcessedHeaders = parseWith(pHeaders);

export const parseHeaders = (rawHeaders: string): HttpHeaders => {
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
  return parsePreProcessedHeaders(preProcessedHeaders) ?? {};
};
