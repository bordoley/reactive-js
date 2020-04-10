import { HttpRequestPreconditionsLike } from "./interfaces";
import { serializeHttpEntityTag } from "./httpEntityTag";
import { serializeHttpDateTime } from "./httpDateTime";
import { HttpStandardHeader } from "./httpHeaders";

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
      HttpStandardHeader.IfMatch,
      Array.isArray(ifMatch)
        ? ifMatch.map(serializeHttpEntityTag).join(",")
        : "*",
    );
  }

  if (ifNoneMatch !== undefined) {
    writeHeader(
      HttpStandardHeader.IfNoneMatch,
      Array.isArray(ifNoneMatch)
        ? ifNoneMatch.map(serializeHttpEntityTag).join(",")
        : "*",
    );
  }

  if (ifModifiedSince !== undefined) {
    writeHeader(
      HttpStandardHeader.IfModifiedSince,
      serializeHttpDateTime(ifModifiedSince),
    );
  }

  if (ifUnmodifiedSince !== undefined) {
    writeHeader(
      HttpStandardHeader.IfUnmodifiedSince,
      serializeHttpDateTime(ifUnmodifiedSince),
    );
  }

  if (ifRange !== undefined) {
    writeHeader(
      HttpStandardHeader.IfRange,
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
