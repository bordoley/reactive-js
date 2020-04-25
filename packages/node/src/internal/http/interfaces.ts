import {
  HttpRequest,
  HttpContentEncoding,
} from "@reactive-js/core/dist/js/http";
import { BufferFlowableLike } from "../../streams";

export type HttpClientRequest = HttpRequest<BufferFlowableLike> & {
  readonly acceptedEncodings?: readonly HttpContentEncoding[];
  readonly maxRedirects?: number;
};
