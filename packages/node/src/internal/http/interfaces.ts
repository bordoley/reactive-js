import { HttpRequest, HttpContentEncoding } from "@reactive-js/core/dist/js/http";
import { BufferStreamLike } from "../../streams";

export type HttpClientRequest = HttpRequest<BufferStreamLike> & {
  readonly acceptedEncodings?: readonly HttpContentEncoding[];
  readonly maxRedirects?: number;
};
