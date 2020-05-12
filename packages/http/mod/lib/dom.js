import { isSome } from "../../../core/mod/lib/option.js";
import { fetchIsPolyfill } from "./internal/dom/capabilities.js";
import { sendHttpRequestUsingFetch } from "./internal/dom/fetch.js";
import { sendHttpRequestUsingXHR } from "./internal/dom/xhr.js";
export const sendHttpRequest = request => fetchIsPolyfill || isSome(request.contentInfo)
    ? sendHttpRequestUsingXHR(request)
    : sendHttpRequestUsingFetch(request);
