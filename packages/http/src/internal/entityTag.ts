import {
  satisfy,
  string,
  manySatisfy,
  pDquote,
  concat,
  map,
  optional,
  parseWith,
  eof,
} from "@reactive-js/parser-combinators";
import { EntityTag } from "./interfaces";
import { ASCII } from "./httpGrammar";
import { pipe } from "@reactive-js/pipe";

/** @ignore */
export const entityTagToString = ({ isWeak, tag }: EntityTag): string => {
  return isWeak ? `\\W"${tag}"` : `"${tag}"`;
};

const pETagc = satisfy(
  c => c >= 33 && c <= 256 /* VCHAR */ && c !== ASCII.DQOUTE,
);

/** @ignore */
export const pETag = pipe(
  concat(optional(string("W/")), pDquote, pipe(pETagc, manySatisfy()), pDquote),
  map(([w, , tag]) => ({
    isWeak: w !== undefined,
    tag,
  })),
);

/** @ignore */
export const parseETag = pipe(pETag, eof, parseWith);
