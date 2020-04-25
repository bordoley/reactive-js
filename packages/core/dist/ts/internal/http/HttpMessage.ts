import { HttpMessage } from "./interfaces.ts";
import { writeHttpCacheControlHeader } from "./cacheDirective.ts";
import { writeHttpContentInfoHeaders } from "./httpContentInfo.ts";
import { isSome } from "../../option.ts";
import { writeHttpPreferenceHeaders } from "./httpPreferences.ts";
import { writeHttpHeaders } from "./httpHeaders.ts";

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
