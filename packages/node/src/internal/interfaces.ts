import { StreamLike, StreamSinkLike } from "@reactive-js/async-enumerable";

export interface BufferStreamLike extends StreamLike<Buffer> {}

export interface BufferStreamSinkLike extends StreamSinkLike<Buffer> {}
