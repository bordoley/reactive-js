import { HttpPreferencesLike, HttpContentEncoding } from "@reactive-js/http";
import { IncomingMessage } from "http";



/** @ignore */
export const createIncomingMessageHttpPreferencesLike = (
  msg: IncomingMessage
): HttpPreferencesLike | undefined => {
  const acceptedCharsets: readonly string[] = [];

  // FIXME: This parsing is completely not abnf compliant
  // FIXME: Special case Identity
  const acceptedEncodings = 
    String(msg.headers["accept-encoding"] || "")
      .split(",")
      .map(x => x.trim()) as HttpContentEncoding[];
  const acceptedLanguages: readonly string[] = [];
  const acceptedMediaRanges: readonly string[] = [];

  const isUndefined = 
    acceptedCharsets.length === 0 && 
    acceptedEncodings.length === 0 && 
    acceptedLanguages.length === 0 && 
    acceptedMediaRanges.length === 0;

  return isUndefined ? undefined : {
    acceptedCharsets,
    acceptedEncodings,
    acceptedLanguages,
    acceptedMediaRanges,
  };
}