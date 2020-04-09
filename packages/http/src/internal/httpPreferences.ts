import { HttpPreferencesLike } from "./interfaces";

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
