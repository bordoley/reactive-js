import { BrotliOptions, ZlibOptions } from "zlib";
import { HttpContentRequest } from "@reactive-js/http";
import { BufferStreamLike } from "@reactive-js/node";
import { isSome } from "@reactive-js/option";
import { Operator } from "@reactive-js/pipe";
import { decodeHttpContent } from "./httpContent";

export const decodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): Operator<
  HttpContentRequest<BufferStreamLike>,
  HttpContentRequest<BufferStreamLike>
> => request => {
  const { content } = request;
  return isSome(content) && content.contentEncodings.length > 0
    ? {
        ...request,
        content: decodeHttpContent(content, options),
      }
    : request;
};
