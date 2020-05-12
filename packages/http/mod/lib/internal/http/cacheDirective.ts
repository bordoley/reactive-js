import { pipe, SideEffect2 } from "../../../../../core/mod/lib/functions.ts";
import { isSome } from "../../../../../core/mod/lib/option.ts";
import {
  CharStreamLike,
  optional,
  pEquals,
  parseWith,
  parseWithOrThrow,
} from "../parserCombinators.ts";
import {
  pToken,
  pTokenOrQuotedString,
  toTokenOrQuotedString,
  httpList,
} from "./httpGrammar.ts";
import { getHeaderValue, HttpStandardHeader } from "./httpHeaders.ts";
import { CacheDirective, HttpHeaders } from "./interfaces.ts";

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
      cacheControl.map(cacheDirectiveToString).join(","),
    );
  }
};
