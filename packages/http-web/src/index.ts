import { ObservableLike } from "@reactive-js/observable";
import { fetchIsPolyfill } from "./internal/capabilities";
import { sendHttpRequestUsingFetch } from "./internal/fetch";
import { HttpWebRequest, HttpClientRequestStatus } from "./internal/interfaces";
import { sendHttpRequestUsingXHR } from "./internal/xhr";

export const sendHttpRequest = (
  request: HttpWebRequest,
): ObservableLike<HttpClientRequestStatus> =>
  // Only use fetch if it's the native implementation.
  fetchIsPolyfill || request.content !== undefined
    ? sendHttpRequestUsingXHR(request)
    : sendHttpRequestUsingFetch(request);
