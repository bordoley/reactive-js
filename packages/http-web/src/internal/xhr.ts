import { identity } from "@reactive-js/async-enumerable";
import {
  parseHeaders,
  parseHttpResponseFromHeaders,
  writeHttpRequestHeaders,
} from "@reactive-js/http";
import { createObservable } from "@reactive-js/observable";
import { supportsArrayBuffer, supportsBlob } from "./capabilities";
import { HttpResponseBodyImpl } from "./httpResponseBody";
import { HttpWebRequest, WebResponseBodyLike } from "./interfaces";
import { isSome } from "@reactive-js/option";
import {
  HttpClient,
  HttpClientRequestStatusType,
} from "@reactive-js/http-common";

/** @ignore */
export const sendHttpRequestUsingXHR: HttpClient<
  HttpWebRequest,
  WebResponseBodyLike
> = request =>
  createObservable(subscriber => {
    const xhr = new XMLHttpRequest();
    const xhrSupportsResponseType = "responseType" in xhr;

    const bodyEnumerator = identity().enumerateAsync(subscriber, 1);
    const body = new HttpResponseBodyImpl(bodyEnumerator);
    body.add(subscriber);

    subscriber.add(() => xhr.abort()).add(body);

    xhr.onerror = () => {
      const cause = new Error("Network request failed");
      subscriber.dispose({ cause });
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 2) {
        const headersRaw = xhr.getAllResponseHeaders() ?? "";
        const headers = parseHeaders(headersRaw);

        // FIXME: Maybe update the request with the actual url?
        // is this even necessary if the header is set?
        //const url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')

        const response = parseHttpResponseFromHeaders(
          xhr.status,
          headers,
          body,
        );

        subscriber.dispatch({
          type: HttpClientRequestStatusType.HeaderReceived,
          response,
        });

        const { contentInfo } = response;
        if (xhrSupportsResponseType && isSome(contentInfo)) {
          const {
            contentLength,
            contentType: { type, subtype, params },
          } = contentInfo;

          const hasCharset = isSome(params["charset"]);
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
        }
      } else if (xhr.readyState === 4) {
        bodyEnumerator.dispatch(xhr.response);
      }
    };

    xhr.onloadstart = () => {
      subscriber.dispatch({
        type: HttpClientRequestStatusType.Start,
      });
    };

    xhr.upload.onprogress = ev => {
      const { loaded: count } = ev;

      subscriber.dispatch({
        type: HttpClientRequestStatusType.Progress,
        count,
      });
    };

    xhr.upload.onload = _ => {
      subscriber.dispatch({
        type: HttpClientRequestStatusType.Completed,
      });
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
    xhr.send(request.body);
  });
