import {
  satisfy,
  string,
  manySatisfy,
  pDquote,
  optional,
  parseWith,
  CharStreamLike,
} from "@reactive-js/parser-combinators";
import { EntityTag } from "./interfaces";
import { ASCII } from "./httpGrammar";

/** @ignore */
export const entityTagToString = ({ isWeak, tag }: EntityTag): string =>
  isWeak ? `\\W"${tag}"` : `"${tag}"`;

const pETagc = satisfy(
  c => c >= 33 && c <= 256 /* VCHAR */ && c !== ASCII.DQOUTE,
);
const parseIsWeak = optional(string("W/"));
const parseTag = manySatisfy()(pETagc);

/** @ignore */
export const pETag = (charStream: CharStreamLike): EntityTag => {
  const isWeak = parseIsWeak(charStream) !== undefined;
  pDquote(charStream);
  const tag = parseTag(charStream);
  pDquote(charStream);
  return { isWeak, tag };
};

/** @ignore */
export const parseETag = parseWith(pETag);
