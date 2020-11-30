import { pipe } from "../functions";
import { EntityTag, HttpHeaders, HttpStandardHeader } from "../http";
import { Option, isSome, none } from "../option";
import { ASCII } from "./httpGrammar";
import { getHeaderValue } from "./httpHeaders";
import {
  CharStreamLike,
  manySatisfy,
  optional,
  pDquote,
  parseWith,
  parseWithOrThrow,
  satisfy,
  string,
} from "./parserCombinators";

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
