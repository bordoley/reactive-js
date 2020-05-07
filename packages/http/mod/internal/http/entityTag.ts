import { isSome } from "../../../../core/lib/option.ts";
import {
  satisfy,
  string,
  manySatisfy,
  pDquote,
  optional,
  parseWith,
  CharStreamLike,
  parseWithOrThrow,
} from "../parserCombinators.ts";
import { pipe } from "../../../../core/lib/functions.ts";
import { ASCII } from "./httpGrammar.ts";
import { EntityTag } from "./interfaces.ts";

export const entityTagToString = ({ isWeak, tag }: EntityTag): string =>
  isWeak ? `\\W"${tag}"` : `"${tag}"`;

const pETagc = satisfy(
  c => c >= 33 && c <= 256 /* VCHAR */ && c !== ASCII.DQOUTE,
);
const parseIsWeak = optional(string("W/"));
const parseTag = manySatisfy()(pETagc);

export const pETag = (charStream: CharStreamLike): EntityTag => {
  const isWeak = pipe(charStream, parseIsWeak, isSome);
  pDquote(charStream);
  const tag = parseTag(charStream);
  pDquote(charStream);
  return { isWeak, tag };
};

export const parseETag = parseWith(pETag);

export const parseETagOrThrow = parseWithOrThrow(pETag);
