import Negotiator from "negotiator";
import { HttpStandardHeader } from "./httpHeaders";
import {
  HttpPreferencesLike,
  HttpHeadersLike,
  HttpContentEncoding,
} from "./interfaces";

/** @ignore */
export const parseHttpPreferencesFromHeaders = (
  headers: HttpHeadersLike,
): HttpPreferencesLike | undefined => {
  const negotiator = new Negotiator({ headers });
  const acceptedCharsets = negotiator.charsets();
  const acceptedEncodings = negotiator.encodings() as readonly HttpContentEncoding[];
  const acceptedLanguages = negotiator.languages();
  const acceptedMediaTypes = negotiator.mediaTypes();

  const isUndefined =
    acceptedCharsets.length === 0 &&
    acceptedEncodings.length === 0 &&
    acceptedLanguages.length === 0 &&
    acceptedMediaTypes.length === 0;

  return isUndefined
    ? undefined
    : {
        acceptedCharsets,
        acceptedEncodings,
        acceptedLanguages,
        acceptedMediaTypes,
      };
};

/** @ignore */
export const writeHttpPreferenceHeaders = (
  preferences: HttpPreferencesLike,
  writeHeader: (header: string, value: string) => void,
) => {
  const {
    acceptedCharsets,
    acceptedEncodings,
    acceptedLanguages,
    acceptedMediaTypes,
  } = preferences;

  if (acceptedCharsets.length > 0) {
    writeHeader(HttpStandardHeader.AcceptCharset, acceptedCharsets.join(", "));
  }

  if (acceptedEncodings.length > 0) {
    writeHeader(HttpStandardHeader.AcceptEncoding, acceptedEncodings.join(","));
  }

  if (acceptedLanguages.length > 0) {
    writeHeader(
      HttpStandardHeader.AcceptLanguage,
      acceptedLanguages.join(", "),
    );
  }

  if (acceptedMediaTypes.length > 0) {
    writeHeader(HttpStandardHeader.Accept, acceptedMediaTypes.join(", "));
  }
};
