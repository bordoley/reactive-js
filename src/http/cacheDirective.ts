import { SideEffect2, pipe } from "../functions";
import { CacheDirective, HttpHeaders, HttpStandardHeaders } from "../http";
import { isSome } from "../option";
import { join, map } from "../readonlyArray";
import {
  httpList,
  pToken,
  pTokenOrQuotedString,
  toTokenOrQuotedString,
} from "./httpGrammar";
import { getHeaderValue } from "./httpHeaders";
import {
  CharStreamLike,
  optional,
  pEquals,
  parseWith,
  parseWithOrThrow,
} from "./parserCombinators";

const pOptionalEquals = optional(pEquals);

const pCacheDirective = (charStream: CharStreamLike): CacheDirective => {
  const directive = pToken(charStream);

  const hasValue = isSome(pOptionalEquals(charStream));

  const value = hasValue ? pTokenOrQuotedString(charStream) : "";

  return { directive, value };
};

export const parseCacheDirective = parseWith(pCacheDirective);

export const parseCacheDirectiveOrThrow = parseWithOrThrow(pCacheDirective);

export const cacheDirectiveToString = ({
  directive,
  value,
}: CacheDirective): string =>
  value.length > 0
    ? `${directive}=${toTokenOrQuotedString(value)}`
    : `${directive}`;

const parseCacheDirectiveList = pipe(pCacheDirective, httpList, parseWith);

export const parseCacheControlFromHeaders = (
  headers: HttpHeaders,
): readonly CacheDirective[] => {
  const cacheControl = getHeaderValue(headers, HttpStandardHeaders.CacheControl);

  return isSome(cacheControl)
    ? parseCacheDirectiveList(cacheControl) ?? []
    : [];
};

export const writeHttpCacheControlHeader = (
  cacheControl: readonly CacheDirective[],
  writeHeader: SideEffect2<string, string>,
) => {
  if (cacheControl.length > 0) {
    writeHeader(
      HttpStandardHeaders.CacheControl,
      pipe(cacheControl, map(cacheDirectiveToString), join(",")),
    );
  }
};
