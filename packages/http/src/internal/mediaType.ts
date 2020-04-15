import {
  pForwardSlash,
  Parser,
  parseWith,
  parseWithOrThrow,
} from "@reactive-js/parser-combinators";
import { pParams, pToken, toTokenOrQuotedString } from "./httpGrammar";
import { MediaType } from "./interfaces";

/** @ignore */
export const pMediaType: Parser<MediaType> = charStream => {
  const type = pToken(charStream);
  pForwardSlash(charStream);
  const subtype = pToken(charStream);
  const params = pParams(charStream);

  return {
    type,
    subtype,
    params,
  };
};

export const parseMediaType = parseWith(pMediaType);
export const parseMediaTypeOrThrow = parseWithOrThrow(pMediaType);

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
