import { map, eof, parseWith, concat } from "@reactive-js/parser-combinators";
import { pipe } from "@reactive-js/pipe";
import { pToken, pParams, httpList } from "./httpGrammar";
import { HttpStandardHeader, getHeaderValue } from "./httpHeaders";
import {
  HttpPreferences,
  HttpHeaders,
  MediaType,
  MediaRange,
  HttpContentEncoding,
} from "./interfaces";
import { pMediaType } from "./mediaType";

const weightedParamComparator = (
  a: {
    readonly [key: string]: string;
  },
  b: {
    readonly [key: string]: string;
  },
) => {
  const qA = (Number.parseFloat(a["q"]) || 1) * 1000;
  const qB = (Number.parseFloat(b["q"]) || 1) * 1000;

  return qA - qB;
};

const mediaRangeCompare = (a: MediaType, b: MediaType): number =>
  weightedParamComparator(a.params, b.params);

const mediaRangeToMediaType = ({ type, subtype }: MediaType): MediaRange => ({
  type,
  subtype,
});

const parseAccept = pipe(
  pMediaType,
  httpList,
  map(mediaTypes => {
    // Mutate to avoid allocations. Kinda evil.
    (mediaTypes as MediaType[]).sort(mediaRangeCompare);
    return mediaTypes.map(mediaRangeToMediaType);
  }),
  eof,
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
  eof,
  parseWith,
);

/** @ignore */
export const parseHttpPreferencesFromHeaders = (
  headers: HttpHeaders,
): HttpPreferences | undefined => {
  const rawAcceptCharset = getHeaderValue(
    headers,
    HttpStandardHeader.AcceptCharset,
  );
  const acceptedCharsets =
    (rawAcceptCharset !== undefined && parseWeightedToken(rawAcceptCharset)) ||
    [];

  const rawAcceptEncodings = getHeaderValue(
    headers,
    HttpStandardHeader.AcceptEncoding,
  );
  const acceptedEncodings = ((rawAcceptEncodings !== undefined &&
    parseWeightedToken(rawAcceptEncodings)) ||
    []) as HttpContentEncoding[];

  // FIXME: This is overly lax. See: https://tools.ietf.org/html/draft-ietf-httpbis-semantics-07#section-8.4.5
  const rawAcceptLanguages = getHeaderValue(
    headers,
    HttpStandardHeader.AcceptLanguage,
  );
  const acceptedLanguages =
    (rawAcceptLanguages !== undefined &&
      parseWeightedToken(rawAcceptLanguages)) ||
    [];

  const rawAccept = getHeaderValue(headers, HttpStandardHeader.Accept);
  const acceptedMediaRanges =
    (rawAccept !== undefined && parseAccept(rawAccept)) || [];

  const isUndefined =
    acceptedCharsets.length === 0 &&
    acceptedEncodings.length === 0 &&
    acceptedLanguages.length === 0 &&
    acceptedMediaRanges.length === 0;

  return isUndefined
    ? undefined
    : {
        acceptedCharsets,
        acceptedEncodings,
        acceptedLanguages,
        acceptedMediaRanges,
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
