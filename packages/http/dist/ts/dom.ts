export {
  HttpWebRequest,
  WebRequestBody,
  WebResponseBodyLike,
} from "./internal/dom/interfaces.ts";

import { isSome } from "@reactive-js/core/dist/js/option";
import { fetchIsPolyfill } from "./internal/dom/capabilities.ts";
import { sendHttpRequestUsingFetch } from "./internal/dom/fetch.ts";
import { HttpWebRequest, WebResponseBodyLike } from "./internal/dom/interfaces.ts";
import { sendHttpRequestUsingXHR } from "./internal/dom/xhr.ts";
import { HttpClient } from "./http.ts";

export const sendHttpRequest: HttpClient<
  HttpWebRequest,
  WebResponseBodyLike
> = request =>
  // Only use fetch if it's the native implementation.
  fetchIsPolyfill || isSome(request.contentInfo)
    ? sendHttpRequestUsingXHR(request)
    : sendHttpRequestUsingFetch(request);
