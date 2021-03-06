import { EnumeratorLike } from "../enumerable";
import { __DEV__ } from "../env";
import {
  Factory,
  Function1,
  Predicate,
  compose,
  isEqualTo,
  pipe,
  returns,
} from "../functions";

import { Option, none, orCompute as orComputeOption } from "../option";

export type CharCode = number;

export interface CharStreamLike extends EnumeratorLike<CharCode> {
  index: number;
  readonly src: string;
}

export type Parser<T> = {
  (input: CharStreamLike): T;
};

class CharStreamImpl implements EnumeratorLike<CharCode> {
  index = -1;

  current = -1;
  hasCurrent = false;

  constructor(readonly src: string) {}

  move(): boolean {
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
  private readonly error: Error;
  constructor(public readonly index: number) {
    this.error = new Error();
  }

  get stack() {
    return this.error.stack;
  }
}

const throwParseErrorDev = <T>(charStream: CharStreamLike): T => {
  const error = new ParserError(charStream.index);
  throw error;
};

const parseErrorSymbol = Symbol(
  "@reactive-js/core/lib/parserCombinator/parseError",
);
const throwParseErrorProd = <T>(_: CharStreamLike): T => {
  throw parseErrorSymbol;
};

const _throwParseError = __DEV__ ? throwParseErrorDev : throwParseErrorProd;
export const throwParseError: <T>(
  charStream: CharStreamLike,
) => T = _throwParseError;

const isParseErrorDev = (e: unknown): boolean => e instanceof ParserError;
const isParseErrorProd = (e: unknown): boolean => e === parseErrorSymbol;
const _isParseError = __DEV__ ? isParseErrorDev : isParseErrorProd;
export const isParseError: Predicate<unknown> = _isParseError;

export const createCharStream = (input: string): CharStreamLike =>
  new CharStreamImpl(input);

export function concat<TA, TB>(a: Parser<TA>, b: Parser<TB>): Parser<[TA, TB]>;
export function concat<TA, TB, TC>(
  a: Parser<TA>,
  b: Parser<TB>,
  c: Parser<TC>,
): Parser<[TA, TB, TC]>;
export function concat<TA, TB, TC, TD>(
  a: Parser<TA>,
  b: Parser<TB>,
  c: Parser<TC>,
  d: Parser<TD>,
): Parser<[TA, TB, TC, TD]>;
export function concat<TA, TB, TC, TD, TE>(
  a: Parser<TA>,
  b: Parser<TB>,
  c: Parser<TC>,
  d: Parser<TD>,
  e: Parser<TE>,
): Parser<[TA, TB, TC, TD, TE]>;
export function concat<TA, TB, TC, TD, TE, TF>(
  a: Parser<TA>,
  b: Parser<TB>,
  c: Parser<TC>,
  d: Parser<TD>,
  e: Parser<TE>,
  f: Parser<TF>,
): Parser<[TA, TB, TC, TD, TE, TF]>;
export function concat<TA, TB, TC, TD, TE, TF, TG>(
  a: Parser<TA>,
  b: Parser<TB>,
  c: Parser<TC>,
  d: Parser<TD>,
  e: Parser<TE>,
  f: Parser<TF>,
  g: Parser<TG>,
): Parser<[TA, TB, TC, TD, TE, TF, TG]>;
export function concat<TA, TB, TC, TD, TE, TF, TG, TH>(
  a: Parser<TA>,
  b: Parser<TB>,
  c: Parser<TC>,
  d: Parser<TD>,
  e: Parser<TE>,
  f: Parser<TF>,
  g: Parser<TG>,
  h: Parser<TH>,
): Parser<[TA, TB, TC, TD, TE, TF, TG, TH]>;
export function concat<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: Parser<TA>,
  b: Parser<TB>,
  c: Parser<TC>,
  d: Parser<TD>,
  e: Parser<TE>,
  f: Parser<TF>,
  g: Parser<TG>,
  h: Parser<TH>,
  i: Parser<TI>,
): Parser<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

export function concat(
  ...parsers: readonly Parser<unknown>[]
): Parser<readonly unknown[]> {
  return charStream => {
    const result = [];
    for (const parse of parsers) {
      const next = parse(charStream);
      result.push(next);
    }
    return result;
  };
}

export const concatWith = <TA, TB>(
  other: Parser<TB>,
): Function1<Parser<TA>, Parser<[TA, TB]>> => parser => concat(parser, other);

export const followedBy = <T>(
  other: Parser<unknown>,
): Function1<Parser<T>, Parser<T>> => parser => charStream => {
  const result = parser(charStream);
  other(charStream);
  return result;
};

export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): Function1<Parser<TA>, Parser<TB>> => parser => compose(parser, mapper);

export const mapTo = <TA, TB>(v: TB): Function1<Parser<TA>, Parser<TB>> =>
  map(returns(v));

export const parseWithOrThrow = <T>(
  parser: Parser<T>,
): Function1<string, T> => {
  const parse = pipe(parser, followedBy(pEof));
  return input => {
    const charStream = createCharStream(input);
    return parse(charStream);
  };
};

export const parseWith = <T>(
  parse: Parser<T>,
): Function1<string, Option<T>> => {
  const doParse = parseWithOrThrow(parse);
  return input => {
    try {
      return doParse(input);
    } catch (e) {
      if (isParseError(e)) {
        return none;
      }
      throw e;
    }
  };
};

export const or = <TA, TB>(
  otherParse: Parser<TB>,
): Function1<Parser<TA>, Parser<TA | TB>> => parse => charStream => {
  const index = charStream.index;

  try {
    return parse(charStream);
  } catch (e) {
    if (isParseError(e)) {
      charStream.index = index;
      return otherParse(charStream);
    } else {
      throw e;
    }
  }
};

export const many = <T>(
  options: {
    readonly min?: number;
    readonly max?: number;
  } = {},
): Function1<Parser<T>, Parser<readonly T[]>> => parse => charStream => {
  const { min = 0, max = Number.MAX_SAFE_INTEGER } = options;

  const retval: T[] = [];

  let count = 0;
  let index = -1;
  try {
    while (count < max) {
      index = charStream.index;
      const next = parse(charStream);
      count++;
      retval.push(next);
    }
  } catch (e) {
    if (isParseError(e)) {
      charStream.index = index;
    } else {
      throw e;
    }
  }

  return count < min ? throwParseError(charStream) : retval;
};

export const manyIgnore = <T>(
  options: {
    min?: number;
    max?: number;
  } = {},
): Function1<Parser<T>, Parser<void>> => parse => charStream => {
  const { min = 0, max = Number.MAX_SAFE_INTEGER } = options;

  let count = 0;
  let index = -1;
  try {
    while (count < max) {
      index = charStream.index;
      parse(charStream);
      count++;
    }
  } catch (e) {
    if (isParseError(e)) {
      charStream.index = index;
    } else {
      throw e;
    }
  }

  return count < min ? throwParseError(charStream) : none;
};

export const optional = <T>(
  parse: Parser<T>,
): Parser<Option<T>> => charStream => {
  const index = charStream.index;
  try {
    return parse(charStream);
  } catch (e) {
    if (isParseError(e)) {
      charStream.index = index;
      return none;
    } else {
      throw e;
    }
  }
};

export const orCompute = <T>(
  compute: Factory<T>,
): Function1<Parser<Option<T>>, Parser<T>> =>
  compose(optional, map(orComputeOption(compute)));

export const sepBy1 = <T>(
  separator: Parser<unknown>,
): Function1<Parser<T>, Parser<readonly T[]>> => parser => {
  const parseTailValue = (charStream: CharStreamLike) => {
    separator(charStream);
    return parser(charStream);
  };

  const parseTail = many<T>()(parseTailValue);

  return charStream => {
    const first = parser(charStream);
    const tail = parseTail(charStream);

    // Perf hack to avoid allocations
    (tail as T[]).unshift(first);
    return tail;
  };
};

export const sepBy = <T>(
  separator: Parser<unknown>,
): Function1<Parser<T>, Parser<readonly T[]>> =>
  compose(sepBy1(separator), orCompute<readonly T[]>(returns([])));

export const string = (str: string): Parser<string> => charStream => {
  charStream.move();

  const match = charStream.src.startsWith(str, charStream.index);
  if (match) {
    charStream.index += str.length - 1;
    return str;
  } else {
    return throwParseError(charStream);
  }
};

export const satisfy = (
  f: Predicate<CharCode>,
): Parser<CharCode> => charStream => {
  if (charStream.move()) {
    const current = charStream.current;

    if (f(current)) {
      return current;
    }
  }

  return throwParseError(charStream);
};

export const manySatisfy = (
  options: {
    readonly min?: number;
    readonly max?: number;
  } = {},
): Function1<Parser<CharCode>, Parser<string>> => parser => {
  const parse = manyIgnore(options)(parser);

  return charStream => {
    const start = charStream.index + 1;
    parse(charStream);
    return charStream.src.substring(start, charStream.index + 1);
  };
};

export const char = (c: string): Parser<CharCode> =>
  pipe(c.charCodeAt(0), isEqualTo, satisfy);

export const pEof = (charStream: CharStreamLike): void =>
  charStream.move() ? throwParseError(charStream) : none;

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
