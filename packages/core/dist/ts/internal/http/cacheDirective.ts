import { CacheDirective, HttpHeaders } from "./interfaces.ts";
import {
  CharStreamLike,
  optional,
  pEquals,
  parseWith,
  parseWithOrThrow,
} from "../../parser-combinators.ts";
import {
  pToken,
  pTokenOrQuotedString,
  toTokenOrQuotedString,
  httpList,
} from "./httpGrammar.ts";
import { isSome } from "../../option.ts";
import { getHeaderValue, HttpStandardHeader } from "./httpHeaders.ts";
import { pipe } from "../../functions.ts";

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
  writeHeader: (header: string, value: string) => void,
) => {
  if (cacheControl.length > 0) {
    writeHeader(
      HttpStandardHeader.CacheControl,
      cacheControl.map(cacheDirectiveToString).join(","),
    );
  }
};
