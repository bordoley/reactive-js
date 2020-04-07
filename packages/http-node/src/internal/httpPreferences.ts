import { HttpPreferencesLike, HttpContentEncoding } from "@reactive-js/http";
import { IncomingMessage } from "http";

import Negotiator from "negotiator";

/** @ignore */
export const createIncomingMessageHttpPreferencesLike = (
  msg: IncomingMessage,
): HttpPreferencesLike | undefined => {
  const negotiator = new Negotiator(msg);
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
