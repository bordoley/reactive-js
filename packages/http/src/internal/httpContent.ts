import { isNone, none, Option } from "@reactive-js/option";
import { parseWith } from "@reactive-js/parser-combinators";
import { pipe } from "@reactive-js/pipe";
import { pToken, httpList } from "./httpGrammar";
import { getHeaderValue, HttpStandardHeader } from "./httpHeaders";
import {
  HttpContent,
  HttpHeaders,
  HttpContentEncoding,
  MediaType,
} from "./interfaces";
import {
  parseMediaType,
  mediaTypeToString,
  parseMediaTypeOrThrow,
  mediaTypeIsCompressible,
} from "./mediaType";

const parseTokenList = pipe(pToken, httpList, parseWith);

/** @ignore */
export const parseHttpContentFromHeaders = <T>(
  headers: HttpHeaders,
  body: T,
): Option<HttpContent<T>> => {
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
        body,
        contentEncodings,
        contentLength,
        contentType,
      };
};

/** @ignore */
export const writeHttpContentHeaders = <T>(
  content: HttpContent<T>,
  writeHeader: (header: string, value: string) => void,
) => {
  const { contentLength, contentType, contentEncodings } = content;
  if (contentLength > 0) {
    writeHeader(HttpStandardHeader.ContentLength, contentLength.toString(10));
  }

  writeHeader(HttpStandardHeader.ContentType, mediaTypeToString(contentType));

  if (contentEncodings.length > 0) {
    writeHeader(
      HttpStandardHeader.ContentEncoding,
      contentEncodings.join(", "),
    );
  }
};

export const createHttpContent = <T>({
  body,
  contentEncodings,
  contentLength,
  contentType,
}: {
  body: T;
  contentEncodings?: HttpContentEncoding[];
  contentLength?: number;
  contentType: MediaType | string;
}): HttpContent<T> => ({
  body,
  contentEncodings: contentEncodings ?? [],
  contentLength: contentLength ?? -1,
  contentType:
    typeof contentType === "string"
      ? parseMediaTypeOrThrow(contentType)
      : contentType,
});

/** @ignore */
export const contentIsCompressible = <T>(
  content: HttpContent<T>,
  db: {
    [key: string]: {
      compressible?: boolean;
    };
  },
): boolean =>
  content.contentEncodings.length === 0 && // Don't double encode
  mediaTypeIsCompressible(content.contentType, db);
