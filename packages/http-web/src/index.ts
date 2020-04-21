import { isSome } from "@reactive-js/option";
import { fetchIsPolyfill } from "./internal/capabilities";
import { sendHttpRequestUsingFetch } from "./internal/fetch";
import {
  HttpWebRequest,
  WebResponseBodyLike,
} from "./internal/interfaces";
import { sendHttpRequestUsingXHR } from "./internal/xhr";
import { HttpClient } from "@reactive-js/http-common";

export {
  WebResponseBodyLike
} from "./internal/interfaces";

export const sendHttpRequest: HttpClient<
  HttpWebRequest,
  WebResponseBodyLike
> = request =>
  // Only use fetch if it's the native implementation.
  fetchIsPolyfill || isSome(request.content)
    ? sendHttpRequestUsingXHR(request)
    : sendHttpRequestUsingFetch(request);
