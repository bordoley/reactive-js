import {
  HttpPreferencesLike,
  HttpContentEncoding,
  HttpHeadersLike,
} from "@reactive-js/http";
import Negotiator from "negotiator";

/** @ignore */
export const createHttpPreferencesFromHeaders = (
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
