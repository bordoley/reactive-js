import { pipe } from "@reactive-js/core/lib/functions";
import {
  satisfy,
  string,
  manySatisfy,
  pDquote,
  optional,
  parseWith,
  CharStreamLike,
  parseWithOrThrow,
} from "@reactive-js/core/lib/experimental/parserCombinators";
import { isSome, none, Option } from "@reactive-js/core/lib/option";
import { ASCII } from "./httpGrammar";
import { HttpHeaders, getHeaderValue, HttpStandardHeader } from "./httpHeaders";

export type EntityTag = {
  readonly isWeak: boolean;
  readonly tag: string;
};

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

export const parseETagFromHeaders = (
  headers: HttpHeaders,
): Option<EntityTag> => {
  const etagHeader = getHeaderValue(headers, HttpStandardHeader.ETag);
  return isSome(etagHeader) ? parseETagOrThrow(etagHeader) : none;
};
