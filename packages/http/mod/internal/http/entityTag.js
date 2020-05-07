import { isSome } from "../../../../core/lib/option.js";
import { satisfy, string, manySatisfy, pDquote, optional, parseWith, parseWithOrThrow, } from "../parserCombinators.js";
import { pipe } from "../../../../core/lib/functions.js";
export const entityTagToString = ({ isWeak, tag }) => isWeak ? `\\W"${tag}"` : `"${tag}"`;
const pETagc = satisfy(c => c >= 33 && c <= 256 && c !== 34);
const parseIsWeak = optional(string("W/"));
const parseTag = manySatisfy()(pETagc);
export const pETag = (charStream) => {
    const isWeak = pipe(charStream, parseIsWeak, isSome);
    pDquote(charStream);
    const tag = parseTag(charStream);
    pDquote(charStream);
    return { isWeak, tag };
};
export const parseETag = parseWith(pETag);
export const parseETagOrThrow = parseWithOrThrow(pETag);
