import { isSome, Option, none } from "../../option.ts";
import { concat, map, parseWith } from "../../parser-combinators.ts";
import { pipe } from "../../pipe.ts";
import { pToken, pParams, httpList } from "./httpGrammar.ts";
import { HttpStandardHeader, getHeaderValue } from "./httpHeaders.ts";
import {
  HttpPreferences,
  HttpHeaders,
  MediaType,
  MediaRange,
  HttpContentEncoding,
} from "./interfaces.ts";
import { pMediaType, parseMediaTypeOrThrow } from "./mediaType.ts";

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
    return mediaTypes.map(mediaTypeToMediaRange);
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
  concat(pToken, pParams),
  httpList,
  map(values => {
    // Mutate to avoid allocations. Kinda evil.
    (values as any[]).sort(weightedTokenComparator);
    return values.map(weightedTokenToToken);
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

/** @ignore */
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

/** @ignore */
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
    acceptedMediaRanges: acceptedMediaRanges.map(mr =>
      typeof mr === "string" ? parseMediaTypeOrThrow(mr) : mr,
    ),
  };
};

const writeWeightedTokenHeader = (
  header: HttpStandardHeader,
  values: readonly string[],
  writeHeader: (header: string, value: string) => void,
) => {
  const length = values.length;
  if (length > 0) {
    const incr = 1000 / length;

    let result = "";
    for (let i = 0; i < length; i++) {
      result += values[i];

      if (i > 0) {
        const q = (i * incr) / 1000;
        result += `; q=${q.toFixed(1)}`;
      }

      if (i < length - 1) {
        result += ", ";
      }
    }
    writeHeader(header, result);
  }
};

/** @ignore */
export const writeHttpPreferenceHeaders = (
  preferences: HttpPreferences,
  writeHeader: (header: string, value: string) => void,
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

  const tokenizedMediaRanges = acceptedMediaRanges.map(
    ({ type, subtype }) => `${type}/${subtype}`,
  );
  writeWeightedTokenHeader(
    HttpStandardHeader.Accept,
    tokenizedMediaRanges,
    writeHeader,
  );
};
