import { BrotliOptions, ZlibOptions } from "zlib";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import { HttpContentRequestLike } from "@reactive-js/http";
import { ReadableMode, ReadableEvent } from "@reactive-js/node";
import { OperatorLike } from "@reactive-js/pipe";
import { decodeHttpContent } from "./httpContent";

export const decodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): OperatorLike<
  HttpContentRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  HttpContentRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
> => request => {
  const { content } = request;
  return content !== undefined && content.contentEncodings.length > 0
    ? {
        ...request,
        content: decodeHttpContent(content, options),
      }
    : request;
};
