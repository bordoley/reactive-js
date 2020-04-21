import { HttpRequest, HttpContentEncoding } from "@reactive-js/http";
import { BufferStreamLike } from "@reactive-js/node";

export type HttpClientRequest = HttpRequest<BufferStreamLike> & {
  readonly acceptedEncodings?: readonly HttpContentEncoding[];
  readonly maxRedirects?: number;
};
