import { SideEffect2, pipe } from "../functions";
import {
  HttpContentEncoding,
  HttpContentInfo,
  HttpHeaders,
  HttpStandardHeader,
  MediaType,
} from "../http";
import { Option, isNone, none } from "../option";
import { parseWith } from "../parserCombinators";
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

const parseTokenList = pipe(pToken, httpList, parseWith);

export const parseHttpContentInfoFromHeaders = (
  headers: HttpHeaders,
): Option<HttpContentInfo> => {
  const contentEncodingString =
    getHeaderValue(headers, HttpStandardHeader.ContentEncoding) ?? "";
  const contentEncodings = parseTokenList(
    contentEncodingString,
  ) as readonly HttpContentEncoding[];

  const contentLengthHeader =
    getHeaderValue(headers, HttpStandardHeader.ContentLength) ?? "-1";
  const contentLength = ~~contentLengthHeader;

  const contentType = parseMediaType(
    getHeaderValue(headers, HttpStandardHeader.ContentType) ?? "",
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
    writeHeader(HttpStandardHeader.ContentLength, contentLength.toString(10));
  }

  writeHeader(HttpStandardHeader.ContentType, mediaTypeToString(contentType));

  if (contentEncodings.length > 0) {
    writeHeader(
      HttpStandardHeader.ContentEncoding,
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
