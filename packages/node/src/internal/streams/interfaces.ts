import { StreamLike, StreamSinkLike } from "@reactive-js/core/dist/js/async-enumerable";

export interface BufferStreamLike extends StreamLike<Buffer> {}

export interface BufferStreamSinkLike extends StreamSinkLike<Buffer> {}
