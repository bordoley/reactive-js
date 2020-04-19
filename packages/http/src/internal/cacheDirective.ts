import { CacheDirective, HttpHeaders } from "./interfaces";
import {
  CharStreamLike,
  optional,
  pEquals,
  parseWith,
  parseWithOrThrow,
} from "@reactive-js/parser-combinators";
import {
  pToken,
  pTokenOrQuotedString,
  toTokenOrQuotedString,
  httpList,
} from "./httpGrammar";
import { isSome } from "@reactive-js/option";
import { getHeaderValue, HttpStandardHeader } from "./httpHeaders";
import { pipe } from "@reactive-js/pipe";

export const mustRevalidate: CacheDirective = {
  directive: "must-revalidate",
  value: "",
};

export const noStore: CacheDirective = { directive: "no-store", value: "" };

export const noTransform: CacheDirective = {
  directive: "no-transform",
  value: "",
};

export const onlyIfCached: CacheDirective = {
  directive: "only-if-cached",
  value: "",
};

export const public_: CacheDirective = { directive: "public", value: "" };

export const proxyRevalidate: CacheDirective = {
  directive: "proxy-revalidate",
  value: "",
};

export const maxAge = (value: number): CacheDirective => ({
  directive: "max-age",
  value: value.toFixed(0),
});

export const maxStale = (value: number): CacheDirective => ({
  directive: "max-stale",
  value: value.toFixed(0),
});

export const minFresh = (value: number): CacheDirective => ({
  directive: "min-fresh",
  value: value.toFixed(0),
});

export const sharedMaxAge = (value: number): CacheDirective => ({
  directive: "s-maxage",
  value: value.toFixed(0),
});

export const noCache = (headers: readonly string[] = []) => ({
  directive: "no-cache",
  value: headers.join(","),
});

export const private_ = (headers: readonly string[] = []) => ({
  directive: "private",
  value: headers.join(","),
});

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

/** @ignore */
export const parseCacheControlFromHeaders = (
  headers: HttpHeaders,
): readonly CacheDirective[] => {
  const cacheControl = getHeaderValue(headers, HttpStandardHeader.CacheControl);

  return isSome(cacheControl)
    ? parseCacheDirectiveList(cacheControl) ?? []
    : [];
};

/** @ignore */
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
