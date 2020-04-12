import { AbstractDisposable } from "@reactive-js/disposable";
import { EnumeratorLike } from "@reactive-js/enumerable";
import { OperatorLike, pipe, compose } from "@reactive-js/pipe";

export type CharCode = number;

export interface CharStreamLike extends EnumeratorLike<void, CharCode> {
  index: number;
  readonly src: string;
}

export interface ParserLike<T> {
  (input: CharStreamLike): T;
}

class CharStreamImpl extends AbstractDisposable
  implements EnumeratorLike<void, CharCode> {
  private _index = -1;

  current = -1;
  hasCurrent = false;

  constructor(readonly src: string) {
    super();
  }

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
  constructor(public readonly index: number) {}
}

export const createCharStream = (input: string): CharStreamLike =>
  new CharStreamImpl(input);

export function concat<TA, TB>(
  a: ParserLike<TA>,
  b: ParserLike<TB>,
): ParserLike<[TA, TB]>;
export function concat<TA, TB, TC>(
  a: ParserLike<TA>,
  b: ParserLike<TB>,
  c: ParserLike<TC>,
): ParserLike<[TA, TB, TC]>;
export function concat<TA, TB, TC, TD>(
  a: ParserLike<TA>,
  b: ParserLike<TB>,
  c: ParserLike<TC>,
  d: ParserLike<TD>,
): ParserLike<[TA, TB, TC, TD]>;
export function concat<TA, TB, TC, TD, TE>(
  a: ParserLike<TA>,
  b: ParserLike<TB>,
  c: ParserLike<TC>,
  d: ParserLike<TD>,
  e: ParserLike<TE>,
): ParserLike<[TA, TB, TC, TD, TE]>;
export function concat<TA, TB, TC, TD, TE, TF>(
  a: ParserLike<TA>,
  b: ParserLike<TB>,
  c: ParserLike<TC>,
  d: ParserLike<TD>,
  e: ParserLike<TE>,
  f: ParserLike<TF>,
): ParserLike<[TA, TB, TC, TD, TE, TF]>;
export function concat<TA, TB, TC, TD, TE, TF, TG>(
  a: ParserLike<TA>,
  b: ParserLike<TB>,
  c: ParserLike<TC>,
  d: ParserLike<TD>,
  e: ParserLike<TE>,
  f: ParserLike<TF>,
  g: ParserLike<TG>,
): ParserLike<[TA, TB, TC, TD, TE, TF, TG]>;
export function concat<TA, TB, TC, TD, TE, TF, TG, TH>(
  a: ParserLike<TA>,
  b: ParserLike<TB>,
  c: ParserLike<TC>,
  d: ParserLike<TD>,
  e: ParserLike<TE>,
  f: ParserLike<TF>,
  g: ParserLike<TG>,
  h: ParserLike<TH>,
): ParserLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
export function concat<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: ParserLike<TA>,
  b: ParserLike<TB>,
  c: ParserLike<TC>,
  d: ParserLike<TD>,
  e: ParserLike<TE>,
  f: ParserLike<TF>,
  g: ParserLike<TG>,
  h: ParserLike<TH>,
  i: ParserLike<TI>,
): ParserLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

export function concat(
  ...parsers: ParserLike<unknown>[]
): ParserLike<unknown[]> {
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
  mapper: (result: TA) => ParserLike<TB>,
): OperatorLike<ParserLike<TA>, ParserLike<TB>> => parser => charStream => {
  const nextParser = pipe(charStream, parser, mapper);
  return nextParser(charStream);
};

export const map = <TA, TB>(
  mapper: (result: TA) => TB,
): OperatorLike<ParserLike<TA>, ParserLike<TB>> => parser => compose(parser, mapper);

export const mapTo = <TA, TB>(
  v: TB,
): OperatorLike<ParserLike<TA>, ParserLike<TB>> => {
  const mapper = (_: TA) => v;
  return map(mapper);
};

export const parseWith = <T>(
  parse: ParserLike<T>,
): OperatorLike<string, T | undefined> => input => {
  const charStream = createCharStream(input);
  try {
    return parse(charStream);
  } catch (e) {
    if (e instanceof ParserError) {
      return undefined;
    }
    throw e;
  } finally {
    charStream.dispose();
  }
};

export const or = <T>(
  otherParse: ParserLike<T>,
): OperatorLike<ParserLike<T>, ParserLike<T>> => parse => charStream => {
  const index = charStream.index;

  try {
    return parse(charStream);
  } catch (e) {
    if (e instanceof ParserError) {
      charStream.index = index;
      return otherParse(charStream);
    } else {
      throw e;
    }
  }
};

export const eof = (charStream: CharStreamLike): undefined => {
  if (charStream.move()) {
    throw new ParserError(charStream.index);
  }

  return undefined;
};

export const followedBy = (
  pnext: ParserLike<unknown>,
): ParserLike<unknown> => charsStream => {
  const index = charsStream.index;
  pnext(charsStream);
  charsStream.index = index;
  return undefined;
};

export const notFollowedBy = (
  pnext: ParserLike<unknown>,
): ParserLike<unknown> => charsStream => {
  const index = charsStream.index;
  try {
    pnext(charsStream);
    throw new ParserError(index + 1);
  } catch (e) {
    if (e instanceof ParserError) {
      charsStream.index = index;
      return undefined;
    } else {
      throw e;
    }
  }
};

export const manyMinMax = <T>(
  min: number,
  max: number,
): OperatorLike<
  ParserLike<T>,
  ParserLike<readonly T[]>
> => parse => charStream => {
  const retval: T[] = [];

  let index = -1;
  while (retval.length < max) {
    index = charStream.index;

    try {
      const next = parse(charStream);
      retval.push(next);
    } catch (e) {
      if (e instanceof ParserError) {
        charStream.index = index;
        break;
      } else {
        throw e;
      }
    }
  }

  if (retval.length < min) {
    throw new ParserError(index);
  }

  return retval;
};

export const many = <T>(): OperatorLike<
  ParserLike<T>,
  ParserLike<readonly T[]>
> => manyMinMax(0, Number.MAX_SAFE_INTEGER);

export const many1 = <T>(): OperatorLike<
  ParserLike<T>,
  ParserLike<readonly T[]>
> => manyMinMax(1, Number.MAX_SAFE_INTEGER);

export const optional = <T>(
  parse: ParserLike<T>,
): ParserLike<T | undefined> => charStream => {
  const index = charStream.index;
  try {
    return parse(charStream);
  } catch (e) {
    if (e instanceof ParserError) {
      charStream.index = index;
      return undefined;
    } else {
      throw e;
    }
  }
};

export const orDefault = <T>(
  default_: T,
): OperatorLike<ParserLike<T | undefined>, ParserLike<T>> =>
  compose(
    optional,
    map(result => result || default_),
  );

export const sepBy1 = <T>(
  separator: ParserLike<unknown>,
): OperatorLike<ParserLike<T>, ParserLike<readonly T[]>> => parser =>
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
  separator: ParserLike<unknown>,
): OperatorLike<ParserLike<T>, ParserLike<readonly T[]>> =>
  compose(sepBy1(separator), orDefault<readonly T[]>([]));

export const ofValue = <T>(value: T): ParserLike<T> => _ => value;

export const compute = <T>(f: () => T): ParserLike<T> => _ => f();

export const throws: ParserLike<unknown> = charStream => {
  throw new ParserError(charStream.index + 1);
};

export const string = (str: string): ParserLike<string> => charStream => {
  charStream.move();
  const index = charStream.index;

  const match = charStream.src.startsWith(str, index);
  if (match) {
    charStream.index = index + str.length - 1;
    return str;
  } else {
    throw new ParserError(index);
  }
};

export const satisfy = (
  f: (char: CharCode) => boolean,
): ParserLike<CharCode> => charStream => {
  if (charStream.move()) {
    const current = charStream.current;

    if (f(current)) {
      return current;
    }
  }

  throw new ParserError(charStream.index);
};

export const char = (c: string): ParserLike<CharCode> => {
  const charCode = c.charCodeAt(0);
  return satisfy(x => x === charCode);
};

export const semicolon = char(";");

export const comma = char(",");

export const space = char(" ");

export const colon = char(":");

export const period = char(".");

export const equals = char("=");

export const forwardSlash = char("/");

export const dash = char("-");

export const openParen = char("(");

export const closeParen = char(")");

export const quote = char('"');

export const asterisk = char("*");

export const manyMinMaxSatisfy = (
  min: number,
  max: number,
): OperatorLike<
  ParserLike<CharCode>,
  ParserLike<string>
> => parse => charStream => {
  const first = charStream.index + 1;
  let length = 0;

  try {
    while (length < max) {
      parse(charStream);
      length++;
    }
  } catch (e) {
    if (e instanceof ParserError) {
      charStream.index--;
    } else {
      throw e;
    }
  }

  if (length >= min) {
    return charStream.src.substring(first, first + length);
  } else {
    throw new ParserError(charStream.index);
  }
};

export const manySatisfy = manyMinMaxSatisfy(0, Number.MAX_SAFE_INTEGER);

export const many1Satisfy = manyMinMaxSatisfy(1, Number.MAX_SAFE_INTEGER);

export const regexp = (regexp: RegExp, group = 0): ParserLike<string> => {
  /** following snipped adapted from Parsimmon */
  const flags = regexp.flags;
  for (let i = 0; i < flags.length; i++) {
    const c = flags.charAt(i);
    // Only allow regexp flags [imu] for now, since [g] and [y] specifically
    // mess up Parsimmon. If more non-stateful regexp flags are added in the
    // future, this will need to be revisited.
    if (c !== "i" && c !== "m" && c !== "u") {
      throw new Error('unsupported regexp flag "' + c + '": ' + regexp);
    }
  }

  const anchoredRegexp = RegExp("^(?:" + regexp.source + ")", flags);

  return charStream => {
    if (charStream.move()) {
      const index = charStream.index;
      const src = charStream.src;

      const match = anchoredRegexp.exec(src.slice(index));
      if (match != null && group <= match.length) {
        return match[group];
      }
    }
    throw new ParserError(charStream.index);
  };
};
