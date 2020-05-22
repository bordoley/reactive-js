import { pipe, SideEffect2 } from "@reactive-js/core/lib/functions";
import {
  concatWith,
  map,
  parseWith,
} from "@reactive-js/core/lib/experimental/parserCombinators";
import { isSome, Option, none } from "@reactive-js/core/lib/option";
import { map as mapReadonlyArray } from "@reactive-js/core/lib/readonlyArray";
import { HttpContentEncoding } from "./httpContentInfo";
import { pToken, pParams, httpList } from "./httpGrammar";
import { HttpStandardHeader, getHeaderValue, HttpHeaders } from "./httpHeaders";
import { MediaType, pMediaType, parseMediaTypeOrThrow } from "./mediaType";

// Strictly speaking MediaRanges may have parameters, but no one uses them.
export type MediaRange = {
  readonly type: string | "*";
  readonly subtype: string | "*";
};

// All values should be sorted by preference
export type HttpPreferences = {
  readonly acceptedCharsets: readonly string[];
  readonly acceptedEncodings: readonly HttpContentEncoding[];
  readonly acceptedLanguages: readonly string[];
  readonly acceptedMediaRanges: readonly MediaRange[];
  //readonly ranges: Option<Choice<ByteRangesSpecifier, OtherRangesSpecifier>>
  //acceptedRanges:Option<Choice<Set<RangeUnit>, AcceptsNone>>
};

const weightedParamComparator = (
  a: {
    readonly [key: string]: string;
  },
  b: {
    readonly [key: string]: string;
  },
) => {
  const qA = (Number.parseFloat(a["q"]) ?? 1) * 1000;
  const qB = (Number.parseFloat(b["q"]) ?? 1) * 1000;

  return qA - qB;
};

const mediaRangeCompare = (a: MediaType, b: MediaType): number =>
  weightedParamComparator(a.params, b.params);

const mediaTypeToMediaRange = ({ type, subtype }: MediaType): MediaRange => ({
  type,
  subtype,
});

const parseAccept = pipe(
  pMediaType,
  httpList,
  map(mediaTypes => {
    // Mutate to avoid allocations. Kinda evil.
    (mediaTypes as MediaType[]).sort(mediaRangeCompare);
    return pipe(mediaTypes, mapReadonlyArray(mediaTypeToMediaRange));
  }),
  parseWith,
);

const weightedTokenComparator = (
  [, a]: [
    string,
    {
      readonly [key: string]: string;
    },
  ],
  [, b]: [
    string,
    {
      readonly [key: string]: string;
    },
  ],
) => weightedParamComparator(a, b);

const weightedTokenToToken = ([token]: [string, unknown]) => token;

const parseWeightedToken = pipe(
  pToken,
  concatWith(pParams),
  httpList,
  map(values => {
    // Mutate to avoid allocations. Kinda evil.
    (values as any[]).sort(weightedTokenComparator);
    return pipe(values, mapReadonlyArray(weightedTokenToToken));
  }),
  parseWith,
);

const parseWeightedTokenHeader = (
  headers: HttpHeaders,
  header: HttpStandardHeader,
) => {
  const rawValue = getHeaderValue(headers, header);
  return isSome(rawValue) ? parseWeightedToken(rawValue) ?? [] : [];
};

export const parseHttpPreferencesFromHeaders = (
  headers: HttpHeaders,
): Option<HttpPreferences> => {
  const acceptedCharsets = parseWeightedTokenHeader(
    headers,
    HttpStandardHeader.AcceptCharset,
  );
  const acceptedEncodings = parseWeightedTokenHeader(
    headers,
    HttpStandardHeader.AcceptEncoding,
  ) as readonly HttpContentEncoding[];

  // FIXME: This is overly lax. See: https://tools.ietf.org/html/draft-ietf-httpbis-semantics-07#section-8.4.5
  const acceptedLanguages = parseWeightedTokenHeader(
    headers,
    HttpStandardHeader.AcceptLanguage,
  );

  const rawAccept = getHeaderValue(headers, HttpStandardHeader.Accept);
  const acceptedMediaRanges = isSome(rawAccept)
    ? parseAccept(rawAccept) ?? []
    : [];

  const isUndefined =
    acceptedCharsets.length === 0 &&
    acceptedEncodings.length === 0 &&
    acceptedLanguages.length === 0 &&
    acceptedMediaRanges.length === 0;

  return isUndefined
    ? none
    : {
        acceptedCharsets,
        acceptedEncodings,
        acceptedLanguages,
        acceptedMediaRanges,
      };
};

export const createHttpPreferences = ({
  acceptedCharsets = [],
  acceptedEncodings = [],
  acceptedLanguages = [],
  acceptedMediaRanges = [],
}: {
  acceptedCharsets?: readonly string[];
  acceptedEncodings?: readonly HttpContentEncoding[];
  acceptedLanguages?: readonly string[];
  acceptedMediaRanges?: readonly (string | MediaRange)[];
}): HttpPreferences => {
  if (
    [
      acceptedCharsets,
      acceptedEncodings,
      acceptedLanguages,
      acceptedMediaRanges,
    ].findIndex(x => x.length > 0) < 0
  ) {
    throw new Error();
  }

  return {
    acceptedCharsets,
    acceptedEncodings,
    acceptedLanguages,
    acceptedMediaRanges: pipe(
      acceptedMediaRanges,
      mapReadonlyArray(mr =>
        typeof mr === "string" ? parseMediaTypeOrThrow(mr) : mr,
      ),
    ),
  };
};

const writeWeightedTokenHeader = (
  header: HttpStandardHeader,
  values: readonly string[],
  writeHeader: SideEffect2<string, string>,
) => {
  const length = values.length;
  if (length > 0) {
    const increment = 1000 / length;

    let result = "";
    for (let i = 0; i < length; i++) {
      result += values[i];

      if (i > 0) {
        const q = (i * increment) / 1000;
        result += `; q=${q.toFixed(1)}`;
      }

      if (i < length - 1) {
        result += ", ";
      }
    }
    writeHeader(header, result);
  }
};

export const writeHttpPreferenceHeaders = (
  preferences: HttpPreferences,
  writeHeader: SideEffect2<string, string>,
) => {
  const {
    acceptedCharsets,
    acceptedEncodings,
    acceptedLanguages,
    acceptedMediaRanges,
  } = preferences;

  writeWeightedTokenHeader(
    HttpStandardHeader.AcceptCharset,
    acceptedCharsets,
    writeHeader,
  );
  writeWeightedTokenHeader(
    HttpStandardHeader.AcceptEncoding,
    acceptedEncodings,
    writeHeader,
  );
  writeWeightedTokenHeader(
    HttpStandardHeader.AcceptLanguage,
    acceptedLanguages,
    writeHeader,
  );

  const tokenizedMediaRanges = pipe(
    acceptedMediaRanges,
    mapReadonlyArray(({ type, subtype }) => `${type}/${subtype}`),
  );
  writeWeightedTokenHeader(
    HttpStandardHeader.Accept,
    tokenizedMediaRanges,
    writeHeader,
  );
};
