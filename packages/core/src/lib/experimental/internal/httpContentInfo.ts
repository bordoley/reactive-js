import { pipe, SideEffect2 } from "../../functions";
import { isNone, none, Option } from "../../option";
import { join } from "../../readonlyArray";
import { parseWith } from "../parserCombinators";
import { pToken, httpList } from "./httpGrammar";
import { getHeaderValue, HttpStandardHeader, HttpHeaders } from "./httpHeaders";

import {
  MediaType,
  parseMediaType,
  mediaTypeToString,
  parseMediaTypeOrThrow,
  mediaTypeIsCompressible,
} from "./mediaType";

export const enum HttpContentEncoding {
  Brotli = "br",
  Compress = "compress",
  Deflate = "deflate",
  GZip = "gzip",
  Identity = "identity",
}

export type HttpContentInfo = {
  readonly contentEncodings: readonly HttpContentEncoding[];
  readonly contentLength: number;
  readonly contentType: MediaType;
};

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
  db: {
    [key: string]: {
      compressible?: boolean;
    };
  },
): boolean =>
  content.contentEncodings.length === 0 && // Don't double encode
  mediaTypeIsCompressible(content.contentType, db);
