import { pipe, SideEffect2 } from "@reactive-js/core/lib/functions";
import {
  CharStreamLike,
  optional,
  pEquals,
  parseWith,
  parseWithOrThrow,
} from "@reactive-js/core/lib/internal/parserCombinators";
import { isSome } from "@reactive-js/core/lib/option";
import { map, join } from "@reactive-js/core/lib/readonlyArray";
import {
  pToken,
  pTokenOrQuotedString,
  toTokenOrQuotedString,
  httpList,
} from "./httpGrammar";
import { getHeaderValue, HttpStandardHeader } from "./httpHeaders";
import { CacheDirective, HttpHeaders } from "./interfaces";

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
  const cacheControl = getHeaderValue(headers, HttpStandardHeader.CacheControl);

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
      HttpStandardHeader.CacheControl,
      pipe(cacheControl, map(cacheDirectiveToString), join(",")),
    );
  }
};
