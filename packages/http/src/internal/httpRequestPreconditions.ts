import { HttpRequestPreconditionsLike } from "./interfaces";
import { entityTagToString } from "./entityTag";
import { httpDateTimeToString } from "./httpDateTime";
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
      Array.isArray(ifMatch) ? ifMatch.map(entityTagToString).join(",") : "*",
    );
  }

  if (ifNoneMatch !== undefined) {
    writeHeader(
      HttpStandardHeader.IfNoneMatch,
      Array.isArray(ifNoneMatch)
        ? ifNoneMatch.map(entityTagToString).join(",")
        : "*",
    );
  }

  if (ifModifiedSince !== undefined) {
    writeHeader(
      HttpStandardHeader.IfModifiedSince,
      httpDateTimeToString(ifModifiedSince),
    );
  }

  if (ifUnmodifiedSince !== undefined) {
    writeHeader(
      HttpStandardHeader.IfUnmodifiedSince,
      httpDateTimeToString(ifUnmodifiedSince),
    );
  }

  if (ifRange !== undefined) {
    writeHeader(
      HttpStandardHeader.IfRange,
      typeof ifRange === "number"
        ? httpDateTimeToString(ifRange)
        : entityTagToString(ifRange),
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
