import { identity } from "@reactive-js/async-enumerable";
import { createDisposableValue } from "@reactive-js/disposable";
import {
  parseHeaders,
  parseHttpResponseFromHeaders,
  writeHttpRequestHeaders,
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
export const sendHttpRequestUsingXHR = (
  request: HttpWebRequest,
): ObservableLike<HttpClientRequestStatus> =>
  createObservable(subscriber => {
    const xhr = new XMLHttpRequest();
    const xhrSupportsResponseType = "responseType" in xhr;
    const bodyEnumerator = identity()
      .enumerateAsync(subscriber, 1)
      .add(subscriber);
    const body = new HttpResponseBodyImpl(bodyEnumerator);

    subscriber.add(() => xhr.abort()).add(bodyEnumerator);

    xhr.onerror = () => {
      const cause = new Error("Network request failed");
      subscriber.dispose({ cause });
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 2) {
        const headersRaw = xhr.getAllResponseHeaders() || "";
        const headers = parseHeaders(headersRaw);

        // FIXME: Maybe update the request with the actual url?
        // is this even necessary if the header is set?
        //const url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')

        const contentResponse = parseHttpResponseFromHeaders(
          xhr.status,
          headers,
          body,
        );

        const response = createDisposableValue(contentResponse, _ => {}).add(
          subscriber,
        );
        subscriber.add(response);

        subscriber.dispatch({
          type: HttpClientRequestStatusType.ResponseReady,
          request,
          response,
        });

        const content = contentResponse?.content;
        if (xhrSupportsResponseType && content !== undefined) {
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

          xhr.responseType = responseIsText
            ? "text"
            : contentLength > 0 && supportsArrayBuffer
            ? "arraybuffer"
            : supportsBlob
            ? "blob"
            : "";
        } else {
          subscriber.dispose();
        }
      } else if (xhr.readyState === 4) {
        bodyEnumerator.dispatch(xhr.response);
        subscriber.dispose();
      }
    };

    xhr.onloadstart = () => {
      subscriber.dispatch({
        type: HttpClientRequestStatusType.Begin,
        request,
      });
    };

    xhr.onprogress = ev => {
      const { loaded: total } = ev;

      if (xhr.readyState === 1) {
        subscriber.dispatch({
          type: HttpClientRequestStatusType.Uploaded,
          request,
          total,
        });
      }
    };

    xhr.ontimeout = () => {
      // FIXME: Kind of rather have a state for this
      const cause = new Error("Network request failed");
      subscriber.dispose({ cause });
    };

    if (request.credentials === "include") {
      xhr.withCredentials = true;
    } else if (request.credentials === "omit") {
      xhr.withCredentials = false;
    }

    xhr.open(request.method, request.uri.toString(), true);
    writeHttpRequestHeaders(request, (k, v) => xhr.setRequestHeader(k, v));
    xhr.send(request?.content?.body);
  });
