import {
  ParserLike,
  pEquals,
  concat,
  or,
  throwParseError,
  map,
  satisfy,
  parseWith,
  manySatisfy,
  many,
  char,
} from "@reactive-js/parser-combinators";
import { pipe } from "@reactive-js/pipe";

const enum ASCII {
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

/** @ignore */
export const pOWS: ParserLike<undefined> = charStream => {
  while (charStream.move()) {
    const c = charStream.current;
    if (c !== ASCII.SPACE && c !== ASCII.HTAB) {
      break;
    }
  }
  charStream.index--;
  return undefined;
};

const pQuotedString: ParserLike<string> = charStream => {
  let builder: number[] | undefined = undefined;

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
      if (builder !== undefined) {
        builder.push(c);
      }
    } else if (c === ASCII.BACKSLASH && charStream.move()) {
      if (builder === undefined) {
        builder = [];
      }

      const c = charStream.current;
      const isQuotedPairChar =
        c === ASCII.HTAB || c === ASCII.SPACE || (c >= 33 && c <= 256);
      if (!isQuotedPairChar) {
        throwParseError(charStream);
      }
      builder.push(c);
    } else {
      throwParseError(charStream);
    }
  }

  return builder !== undefined
    ? String.fromCharCode(...builder)
    : charStream.src.substring(initialIndex + 1, charStream.index - 1);
};

/** @ignore */
export const pToken = pipe(pTChar, manySatisfy({ min: 1 }));

const pParameterName = pToken;
const pParameterValue = pipe(pToken, or(pQuotedString));
/** @ignore */
export const pParameter: ParserLike<[string, string]> = pipe(
  concat(pParameterName, pEquals, pParameterValue),
  map(([k, , v]) => [k, v]),
);

const toQuotedString = (input: string): string => {
  const buffer = [ASCII.DQOUTE];

  for (let i = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);
    const isQuotedPairChar =
      c === ASCII.HTAB || c === ASCII.SPACE || (c >= 33 && c <= 256);
    const isQDText =
      c === ASCII.HTAB ||
      c === ASCII.SPACE ||
      c === ASCII.EXCLAMATION_MARK ||
      (c >= 0x23 && c <= 0x5b) ||
      (c >= 0x5d && c <= 0x7e) ||
      (c >= 0x80 && c <= 0xff); // obs-text

    if (isQuotedPairChar) {
      buffer.push(ASCII.BACKSLASH);
    } else if (!isQDText) {
      // FIXME: Error type?
      throw new Error();
    }

    buffer.push(c);
  }
  buffer.push(ASCII.DQOUTE);

  return String.fromCharCode(...buffer);
};

const parseToken = parseWith(pToken);
/** @ignore */
export const toTokenOrQuotedString = (input: string) => {
  return parseToken(input) || toQuotedString(input);
};

/** @ignore */
export const pParams: ParserLike<{ readonly [key: string]: string }> = pipe(
  concat(pOWS, char(";"), pOWS, pParameter),
  map(([, , , values]) => values),
  many(),
  map(results => {
    const params: { [key: string]: string } = {};
    for (const [k, v] of results) {
      params[k] = v;
    }
    return params;
  }),
);
