export { HttpWebRequest, WebRequestBody, WebResponseBodyLike } from "./internal/http/interfaces";

import { isSome } from "@reactive-js/core/dist/js/option";
import { fetchIsPolyfill } from "./internal/http/capabilities";
import { sendHttpRequestUsingFetch } from "./internal/http/fetch";
import { HttpWebRequest, WebResponseBodyLike } from "./internal/http/interfaces";
import { sendHttpRequestUsingXHR } from "./internal/http/xhr";
import { HttpClient } from "@reactive-js/core/dist/js/http-client";

export const sendHttpRequest: HttpClient<
  HttpWebRequest,
  WebResponseBodyLike
> = request =>
  // Only use fetch if it's the native implementation.
  fetchIsPolyfill || isSome(request.contentInfo)
    ? sendHttpRequestUsingXHR(request)
    : sendHttpRequestUsingFetch(request);
