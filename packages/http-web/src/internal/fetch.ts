import { identity } from "@reactive-js/async-enumerable";
import {
  createDisposable,
  createDisposableValue,
} from "@reactive-js/disposable";
import {
  httpRequestToUntypedHeaders,
  parseHttpResponseFromHeaders,
} from "@reactive-js/http";
import { ObservableLike, createObservable } from "@reactive-js/observable";
import { supportsArrayBuffer, supportsBlob } from "./capabilities";
import { HttpResponseBodyImpl } from "./httpResponseBody";
import {
  HttpWebRequest,
  HttpClientRequestStatus,
  HttpClientRequestStatusType,
} from "./interfaces";

/** @ignore */
export const sendHttpRequestUsingFetch = (
  request: HttpWebRequest,
): ObservableLike<HttpClientRequestStatus> => {
  const {
    cache,
    credentials,
    integrity,
    method,
    mode,
    redirect,
    referrerPolicy,
    uri,
  } = request;
  const url = uri.toString();
  const headers = httpRequestToUntypedHeaders(request);

  return createObservable(async subscriber => {
    const abortController = new AbortController();
    const abortControllerDisposable = createDisposable(() =>
      abortController.abort(),
    );
    const bodyEnumerator = identity()
      .enumerateAsync(subscriber, 1)
      .add(subscriber);
    const body = new HttpResponseBodyImpl(bodyEnumerator);

    subscriber.add(abortControllerDisposable).add(bodyEnumerator);

    try {
      subscriber.dispatch({
        type: HttpClientRequestStatusType.Begin,
        request,
      });

      const fetchResponse = await fetch(url, {
        cache,
        credentials,
        headers,
        integrity,
        method,
        mode,
        redirect,
        referrerPolicy,
        signal: abortController.signal,
      });

      const fetchResponseHeaders = fetchResponse.headers;
      const responseHeaders: { [key: string]: string } = {};
      fetchResponseHeaders.forEach((v, k) => {
        responseHeaders[k] = v;
      });

      const contentResponse = parseHttpResponseFromHeaders(
        fetchResponse.status,
        responseHeaders,
        body,
      );

      const response = createDisposableValue(contentResponse, _ => {}).add(
        subscriber,
      );

      subscriber.dispatch({
        type: HttpClientRequestStatusType.ResponseReady,
        request,
        response,
      });

      const content = contentResponse?.content;
      if (content !== undefined) {
        const {
          contentLength,
          contentType: { type, subtype, params },
        } = content;

        const hasCharset = params["charset"] !== undefined;
        const responseIsText =
          hasCharset ||
          type === "text" ||
          subtype.indexOf("json") >= 0 ||
          subtype.indexOf("text") >= 0 ||
          subtype.indexOf("xml") >= 0;

        const responsePromise = responseIsText
          ? fetchResponse.text.bind(fetchResponse)
          : contentLength > 0 && supportsArrayBuffer
          ? fetchResponse.arrayBuffer.bind(fetchResponse)
          : supportsBlob
          ? fetchResponse.blob.bind(fetchResponse)
          : () => Promise.reject(new Error("invalid type"));

        const response = await responsePromise();
        bodyEnumerator.dispatch(response);
        abortControllerDisposable.dispose();
      }

      subscriber.dispose();
    } catch (cause) {
      subscriber.dispose({ cause });
    }
  });
};
