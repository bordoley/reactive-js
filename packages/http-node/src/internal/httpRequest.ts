import { BrotliOptions, ZlibOptions } from "zlib";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import { HttpContentRequest } from "@reactive-js/http";
import { ReadableMode, ReadableEvent } from "@reactive-js/node";
import { isSome } from "@reactive-js/option";
import { Operator } from "@reactive-js/pipe";
import { decodeHttpContent } from "./httpContent";

export const decodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): Operator<
  HttpContentRequest<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  HttpContentRequest<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
> => request => {
  const { content } = request;
  return isSome(content) && content.contentEncodings.length > 0
    ? {
        ...request,
        content: decodeHttpContent(content, options),
      }
    : request;
};
