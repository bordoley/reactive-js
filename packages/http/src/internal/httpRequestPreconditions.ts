import { HttpRequestPreconditionsLike } from "./interfaces";
import { serializeHttpEntityTag } from "./httpEntityTag";
import { serializeHttpDateTime } from "./httpDateTime";

/** @ignore */
export const writeHttpRequestPreconditionsHeaders = (
  {
    ifMatch,
    ifModifiedSince,
    ifNoneMatch,
    ifUnmodifiedSince,
    ifRange,
  }: HttpRequestPreconditionsLike,
  writeHeader: (header: string, value: string) => void,
) => {
  if (ifMatch !== undefined) {
    writeHeader(
      "If-Match",
      Array.isArray(ifMatch)
        ? ifMatch.map(serializeHttpEntityTag).join(",")
        : "*",
    );
  }

  if (ifNoneMatch !== undefined) {
    writeHeader(
      "If-None-Match",
      Array.isArray(ifNoneMatch)
        ? ifNoneMatch.map(serializeHttpEntityTag).join(",")
        : "*",
    );
  }

  if (ifModifiedSince !== undefined) {
    writeHeader("If-Modified-Since", serializeHttpDateTime(ifModifiedSince));
  }

  if (ifUnmodifiedSince !== undefined) {
    writeHeader(
      "If-Unmodified-Since",
      serializeHttpDateTime(ifUnmodifiedSince),
    );
  }

  if (ifRange !== undefined) {
    writeHeader(
      "If-Range",
      typeof ifRange === "number"
        ? serializeHttpDateTime(ifRange)
        : serializeHttpEntityTag(ifRange),
    );
  }
};

/** @ignore */
/*
export const parseHttpRequestPreconditionsFromHeaders = <T>(
  headers: HttpHeadersLike,
  body: T,
): HttpRequestPreconditionsLike | undefined => {

};*/
