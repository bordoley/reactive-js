import { pipe } from "../../functions";
import { fromObject, map, join, keep, length } from "../../readonlyArray";
import {
  pForwardSlash,
  Parser,
  parseWith,
  parseWithOrThrow,
} from "../parserCombinators";
import { pParams, pToken, toTokenOrQuotedString } from "./httpGrammar";

export type MediaType = {
  readonly type: string;
  readonly subtype: string;
  readonly params: { readonly [key: string]: string };
};

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
}: MediaType): string =>
  pipe(
    params,
    fromObject(),
    map(([k, v]) => `${k}=${toTokenOrQuotedString(v)}`),
    join("; "),
    stringParams =>
      `${type}/${subtype}${stringParams.length > 0 ? ";" + stringParams : ""}`,
  );

const compressionBlacklist = [
  "text/event-stream", // Browser's don't seem to support compressed event streams
];

const textSubtypes = ["html", "json", "text", "xml"];

export const mediaTypeIsCompressible = (
  { type, subtype }: MediaType,
  db: {
    [key: string]: {
      compressible?: boolean;
    };
  },
) => {
  const mediaType = mediaTypeToString({ type, subtype, params: {} });
  const blackListed = compressionBlacklist.includes(mediaType);
  const compressible = db[mediaType]?.compressible ?? false;
  const typeIsText = type === "text";
  const subtypeIsText =
    pipe(
      textSubtypes,
      keep(x => subtype.endsWith(x)),
      length,
    ) > 0;

  return !blackListed && (compressible || typeIsText || subtypeIsText);
};
