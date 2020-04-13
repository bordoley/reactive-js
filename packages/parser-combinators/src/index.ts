import { EnumeratorLike } from "@reactive-js/enumerable";
import { Operator, pipe, compose } from "@reactive-js/pipe";

export type CharCode = number;

export interface CharStreamLike extends EnumeratorLike<void, CharCode> {
  index: number;
  readonly src: string;
}

export type Parser<T> = {
  (input: CharStreamLike): T;
}

class CharStreamImpl implements EnumeratorLike<void, CharCode> {
  private _index = -1;

  current = -1;
  hasCurrent = false;

  constructor(readonly src: string) {}

  get index() {
    return this._index;
  }

  set index(index: number) {
    this._index = index;
  }

  move(_: void): boolean {
    this.hasCurrent = false;
    this.current = -1;

    this._index++;
    const index = this._index;
    const src = this.src;

    if (this._index < src.length) {
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

const parseErrorSymbol = Symbol("ParseError");
const throwParseErrorProd = <T>(_: CharStreamLike): T => {
  throw parseErrorSymbol;
};

export const throwParseError =
  process.env.NODE_ENV === "production"
    ? throwParseErrorProd
    : throwParseErrorDev;

const isParseErrorDev = (e: unknown): boolean => e instanceof ParserError;
const isParseErrorProd = (e: unknown): boolean => e === parseErrorSymbol;
export const isParseError =
  process.env.NODE_ENV === "production" ? isParseErrorProd : isParseErrorDev;

export const createCharStream = (input: string): CharStreamLike =>
  new CharStreamImpl(input);

export function concat<TA, TB>(
  a: Parser<TA>,
  b: Parser<TB>,
): Parser<[TA, TB]>;
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
  ...parsers: Parser<unknown>[]
): Parser<unknown[]> {
  return charStream => {
    const result = [];
    for (const parse of parsers) {
      const next = parse(charStream);
      result.push(next);
    }
    return result;
  };
}

export const flatMap = <TA, TB>(
  mapper: (result: TA) => Parser<TB>,
): Operator<Parser<TA>, Parser<TB>> => parser => charStream => {
  const nextParser = pipe(charStream, parser, mapper);
  return nextParser(charStream);
};

export const map = <TA, TB>(
  mapper: (result: TA) => TB,
): Operator<Parser<TA>, Parser<TB>> => parser =>
  compose(parser, mapper);

export const mapTo = <TA, TB>(
  v: TB,
): Operator<Parser<TA>, Parser<TB>> => {
  const mapper = (_: TA) => v;
  return map(mapper);
};

export const parseWithOrThrow = <T>(
  parse: Parser<T>,
): Operator<string, T> => input => {
  const charStream = createCharStream(input);
  return parse(charStream);
};

export const parseWith = <T>(
  parse: Parser<T>,
): Operator<string, T | undefined> => {
  const doParse = parseWithOrThrow(parse);
  return input => {
    try {
      return doParse(input);
    } catch (e) {
      if (isParseError(e)) {
        return undefined;
      }
      throw e;
    }
  };
};

export const or = <T>(
  otherParse: Parser<T>,
): Operator<Parser<T>, Parser<T>> => parse => charStream => {
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

export const pEof = (charStream: CharStreamLike): undefined =>
  charStream.move() ? throwParseError(charStream) : undefined;

export const eof = <T>(parser: Parser<T>): Parser<T> => charStream => {
  const result = parser(charStream);
  pEof(charStream);
  return result;
};

export const followedBy = (
  pnext: Parser<unknown>,
): Parser<unknown> => charStream => {
  const index = charStream.index;
  pnext(charStream);
  charStream.index = index;
  return undefined;
};

export const notFollowedBy = (
  pnext: Parser<unknown>,
): Parser<unknown> => charStream => {
  const index = charStream.index;
  try {
    pnext(charStream);
    return throwParseError(charStream);
  } catch (e) {
    if (isParseError(e)) {
      charStream.index = index;
      return undefined;
    } else {
      throw e;
    }
  }
};

export const many = <T>(
  options: {
    min?: number;
    max?: number;
  } = {},
): Operator<
  Parser<T>,
  Parser<readonly T[]>
> => parse => charStream => {
  const { min = 0, max = Number.MAX_SAFE_INTEGER } = options;

  const retval: T[] = [];

  let index = -1;
  try {
    while (retval.length < max) {
      index = charStream.index;
      const next = parse(charStream);
      retval.push(next);
    }
  } catch (e) {
    if (isParseError(e)) {
      charStream.index = index;
    } else {
      throw e;
    }
  }

  return retval.length < min ? throwParseError(charStream) : retval;
};

export const optional = <T>(
  parse: Parser<T>,
): Parser<T | undefined> => charStream => {
  const index = charStream.index;
  try {
    return parse(charStream);
  } catch (e) {
    if (isParseError(e)) {
      charStream.index = index;
      return undefined;
    } else {
      throw e;
    }
  }
};

export const orDefault = <T>(
  default_: T,
): Operator<Parser<T | undefined>, Parser<T>> =>
  compose(
    optional,
    map(result => result || default_),
  );

export const sepBy1 = <T>(
  separator: Parser<unknown>,
): Operator<Parser<T>, Parser<readonly T[]>> => parser =>
  pipe(
    concat(
      parser,
      pipe(
        concat(separator, parser),
        map(([, v]) => v),
        many(),
      ),
    ),
    map(([first, tail]) => [first, ...tail]),
  );

export const sepBy = <T>(
  separator: Parser<unknown>,
): Operator<Parser<T>, Parser<readonly T[]>> =>
  compose(sepBy1(separator), orDefault<readonly T[]>([]));

export const ofValue = <T>(value: T): Parser<T> => _ => value;

export const compute = <T>(f: () => T): Parser<T> => _ => f();

export const throws = <T>(charStream: CharStreamLike): T =>
  throwParseError(charStream);

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
  f: (char: CharCode) => boolean,
): Parser<CharCode> => charStream => {
  if (charStream.move()) {
    const current = charStream.current;

    if (f(current)) {
      return current;
    }
  }

  return throwParseError(charStream);
};

export const char = (c: string): Parser<CharCode> => {
  const charCode = c.charCodeAt(0);
  return satisfy(x => x === charCode);
};

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

export const manySatisfy = (
  options: {
    min?: number;
    max?: number;
  } = {},
): Operator<
  Parser<CharCode>,
  Parser<string>
> => parse => charStream => {
  const { min = 0, max = Number.MAX_SAFE_INTEGER } = options;
  const first = charStream.index + 1;
  let length = 0;

  try {
    while (length < max) {
      parse(charStream);
      length++;
    }
  } catch (e) {
    if (isParseError(e)) {
      charStream.index--;
    } else {
      throw e;
    }
  }

  return length >= min
    ? charStream.src.substring(first, first + length)
    : throwParseError(charStream);
};

export const regexp = (
  input: string,
  options: { group?: number; flags?: string } = {},
): Parser<string> => {
  const { group = 0, flags = "" } = options;

  /** following snippet adapted from Parsimmon */
  for (let i = 0; i < flags.length; i++) {
    const c = flags.charAt(i);
    // Only allow regexp flags [imu] for now, since [g] and [y] specifically
    // mess up Parsimmon. If more non-stateful regexp flags are added in the
    // future, this will need to be revisited.
    if (c !== "i" && c !== "m" && c !== "u") {
      throw new Error('unsupported regexp flag "' + c + '": ' + regexp);
    }
  }

  const anchoredRegexp = RegExp("^(?:" + input + ")", flags);

  return charStream => {
    if (charStream.move()) {
      const index = charStream.index;
      const src = charStream.src;

      const match = anchoredRegexp.exec(src.slice(index));
      if (match != null && group <= match.length) {
        return match[group];
      }
    }
    return throwParseError(charStream);
  };
};
