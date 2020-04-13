import {
  concat,
  eof,
  pForwardSlash,
  map,
  ParserLike,
  parseWith,
  parseWithOrThrow,
} from "@reactive-js/parser-combinators";
import { pipe } from "@reactive-js/pipe";
import { pParams, pToken, toTokenOrQuotedString } from "./httpGrammar";
import { MediaType } from "./interfaces";

/** @ignore */
export const pMediaType: ParserLike<MediaType> = pipe(
  concat(pToken, pForwardSlash, pToken, pParams),
  map(([type, , subtype, params]) => ({
    type,
    subtype,
    params,
  })),
);

const pMediaTypeEof = pipe(pMediaType, eof);

export const parseMediaType = parseWith(pMediaTypeEof);
export const parseMediaTypeOrThrow = parseWithOrThrow(pMediaTypeEof);

export const mediaTypeToString = ({
  type,
  subtype,
  params,
}: MediaType): string => {
  const stringParams = Object.entries(params)
    .map(([k, v]) => `${k}=${toTokenOrQuotedString(v)}`)
    .join("; ");
  return `${type}/${subtype}${
    stringParams.length > 0 ? ";" + stringParams : ""
  }`;
};
