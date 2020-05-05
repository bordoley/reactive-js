export {
  HttpWebRequest,
  WebRequestBody,
  WebResponseBodyLike,
} from "./internal/dom/interfaces";

import { isSome } from "@reactive-js/core/dist/js/option";
import { fetchIsPolyfill } from "./internal/dom/capabilities";
import { sendHttpRequestUsingFetch } from "./internal/dom/fetch";
import {
  HttpWebRequest,
  WebResponseBodyLike,
} from "./internal/dom/interfaces";
import { sendHttpRequestUsingXHR } from "./internal/dom/xhr";
import { HttpClient } from "./http";

export const sendHttpRequest: HttpClient<
  HttpWebRequest,
  WebResponseBodyLike
> = request =>
  // Only use fetch if it's the native implementation.
  fetchIsPolyfill || isSome(request.contentInfo)
    ? sendHttpRequestUsingXHR(request)
    : sendHttpRequestUsingFetch(request);
