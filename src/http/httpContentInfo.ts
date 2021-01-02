import { SideEffect2, pipe } from "../functions";
import {
  HttpContentEncoding,
  HttpContentInfo,
  HttpHeaders,
  HttpStandardHeaders,
  MediaType,
} from "../http";
import { Option, isNone, none } from "../option";
import { join } from "../readonlyArray";
import { ReadonlyObjectMap } from "../readonlyObjectMap";
import { httpList, pToken } from "./httpGrammar";
import { getHeaderValue } from "./httpHeaders";

import {
  mediaTypeIsCompressible,
  mediaTypeToString,
  parseMediaType,
  parseMediaTypeOrThrow,
} from "./mediaType";
import { parseWith } from "./parserCombinators";

const parseTokenList = pipe(pToken, httpList, parseWith);

export const parseHttpContentInfoFromHeaders = (
  headers: HttpHeaders,
): Option<HttpContentInfo> => {
  const contentEncodingString =
    getHeaderValue(headers, HttpStandardHeaders.ContentEncoding) ?? "";
  const contentEncodings = parseTokenList(
    contentEncodingString,
  ) as readonly HttpContentEncoding[];

  const contentLengthHeader =
    getHeaderValue(headers, HttpStandardHeaders.ContentLength) ?? "-1";
  const contentLength = ~~contentLengthHeader;

  const contentType = parseMediaType(
    getHeaderValue(headers, HttpStandardHeaders.ContentType) ?? "",
  );

  return isNone(contentType)
    ? none
    : {
        contentEncodings,
        contentLength,
        contentType,
      };
};

export const writeHttpContentInfoHeaders = (
  content: HttpContentInfo,
  writeHeader: SideEffect2<string, string>,
) => {
  const { contentLength, contentType, contentEncodings } = content;
  if (contentLength > 0) {
    writeHeader(HttpStandardHeaders.ContentLength, contentLength.toString(10));
  }

  writeHeader(HttpStandardHeaders.ContentType, mediaTypeToString(contentType));

  if (contentEncodings.length > 0) {
    writeHeader(
      HttpStandardHeaders.ContentEncoding,
      pipe(contentEncodings, join(", ")),
    );
  }
};

export const createHttpContentInfo = ({
  contentEncodings,
  contentLength,
  contentType,
}: {
  contentEncodings?: readonly HttpContentEncoding[];
  contentLength?: number;
  contentType: MediaType | string;
}): HttpContentInfo => ({
  contentEncodings: contentEncodings ?? [],
  contentLength: contentLength ?? -1,
  contentType:
    typeof contentType === "string"
      ? parseMediaTypeOrThrow(contentType)
      : contentType,
});

export const contentIsCompressible = (
  content: HttpContentInfo,
  db: ReadonlyObjectMap<{
    compressible?: boolean;
  }>,
): boolean =>
  content.contentEncodings.length === 0 && // Don't double encode
  mediaTypeIsCompressible(content.contentType, db);
