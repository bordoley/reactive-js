import Negotiator from "negotiator";
import {
  HttpPreferencesLike,
  HttpHeadersLike,
  HttpContentEncoding,
} from "./interfaces";

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
    writeHeader("Accept-Charset", acceptedCharsets.join(", "));
  }

  if (acceptedEncodings.length > 0) {
    writeHeader("Accept-Encoding", acceptedEncodings.join(","));
  }

  if (acceptedLanguages.length > 0) {
    writeHeader("Accept-Language", acceptedLanguages.join(", "));
  }

  if (acceptedMediaTypes.length > 0) {
    writeHeader("Accept", acceptedMediaTypes.join(", "));
  }
};

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
