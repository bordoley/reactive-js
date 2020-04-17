import { ObservableLike } from "@reactive-js/observable";
import { isSome } from "@reactive-js/option";
import { fetchIsPolyfill } from "./internal/capabilities";
import { sendHttpRequestUsingFetch } from "./internal/fetch";
import { HttpWebRequest, HttpClientRequestStatus } from "./internal/interfaces";
import { sendHttpRequestUsingXHR } from "./internal/xhr";

export const sendHttpRequest = (
  request: HttpWebRequest,
): ObservableLike<HttpClientRequestStatus> =>
  // Only use fetch if it's the native implementation.
  fetchIsPolyfill || isSome(request.content)
    ? sendHttpRequestUsingXHR(request)
    : sendHttpRequestUsingFetch(request);
