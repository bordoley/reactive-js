import { isNone, none, Option } from "@reactive-js/option";
import { parseWith } from "@reactive-js/parser-combinators";
import { pipe } from "@reactive-js/pipe";
import { pToken, httpList } from "./httpGrammar";
import { getHeaderValue, HttpStandardHeader } from "./httpHeaders";
import { HttpContent, HttpHeaders, HttpContentEncoding } from "./interfaces";
import { parseMediaType, mediaTypeToString } from "./mediaType";

const parseTokenList = pipe(pToken, httpList, parseWith);

/** @ignore */
export const parseHttpContentFromHeaders = <T>(
  headers: HttpHeaders,
  body: T,
): Option<HttpContent<T>> => {
  const contentEncodingString =
    getHeaderValue(headers, HttpStandardHeader.ContentEncoding) || "";
  const contentEncodings = parseTokenList(
    contentEncodingString,
  ) as readonly HttpContentEncoding[];

  const contentLengthHeader =
    getHeaderValue(headers, HttpStandardHeader.ContentLength) || "-1";
  const contentLength = ~~contentLengthHeader;

  const contentType = parseMediaType(
    getHeaderValue(headers, HttpStandardHeader.ContentType) || "",
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
