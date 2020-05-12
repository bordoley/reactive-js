export {
  HttpWebRequest,
  WebRequestBody,
  WebResponseBodyLike,
} from "./internal/dom/interfaces";

import { isSome } from "@reactive-js/core/lib/option";
import { HttpClient } from "./http";
import { fetchIsPolyfill } from "./internal/dom/capabilities";
import { sendHttpRequestUsingFetch } from "./internal/dom/fetch";
import { HttpWebRequest, WebResponseBodyLike } from "./internal/dom/interfaces";
import { sendHttpRequestUsingXHR } from "./internal/dom/xhr";

export const sendHttpRequest: HttpClient<
  HttpWebRequest,
  WebResponseBodyLike
> = request =>
  // Only use fetch if it's the native implementation.
  fetchIsPolyfill || isSome(request.contentInfo)
    ? sendHttpRequestUsingXHR(request)
    : sendHttpRequestUsingFetch(request);
