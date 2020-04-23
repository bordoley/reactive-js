import { HttpMessage } from "./interfaces";
import { writeHttpCacheControlHeader } from "./cacheDirective";
import { writeHttpContentInfoHeaders } from "./httpContentInfo";
import { isSome } from "../../option";
import { writeHttpPreferenceHeaders } from "./httpPreferences";
import { writeHttpHeaders } from "./httpHeaders";

export const writeHttpMessageHeaders = <T>(
  { cacheControl, contentInfo, headers, preferences }: HttpMessage<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  writeHttpCacheControlHeader(cacheControl, writeHeader);

  if (isSome(contentInfo)) {
    writeHttpContentInfoHeaders(contentInfo, writeHeader);
  }

  if (isSome(preferences)) {
    writeHttpPreferenceHeaders(preferences, writeHeader);
  }

  writeHttpHeaders(headers, writeHeader);
};
