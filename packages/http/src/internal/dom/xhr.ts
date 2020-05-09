import {
  createObservable,
  createSubject,
} from "@reactive-js/core/lib/observable";
import { isSome } from "@reactive-js/core/lib/option";
import {
  HttpClient,
  HttpClientRequestStatusType,
  parseHeaders,
  parseHttpResponseFromHeaders,
  writeHttpRequestHeaders,
} from "../../http";
import { supportsArrayBuffer, supportsBlob } from "./capabilities";
import { HttpResponseBodyImpl } from "./httpResponseBody";
import { HttpWebRequest, WebResponseBodyLike } from "./interfaces";

export const sendHttpRequestUsingXHR: HttpClient<
  HttpWebRequest,
  WebResponseBodyLike
> = request =>
  createObservable(dispatcher => {
    const xhr = new XMLHttpRequest();
    const xhrSupportsResponseType = "responseType" in xhr;

    const bodyStream = createSubject(1);
    const body = new HttpResponseBodyImpl(bodyStream);
    body.add(dispatcher);

    dispatcher.add(() => xhr.abort()).add(body);

    xhr.onerror = () => {
      const cause = new Error("Network request failed");
      dispatcher.dispose({ cause });
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

        dispatcher.dispatch({
          type: HttpClientRequestStatusType.HeadersReceived,
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
            subtype.includes("json") ||
            subtype.includes("text") ||
            subtype.includes("xml");

          xhr.responseType = responseIsText
            ? "text"
            : contentLength > 0 && supportsArrayBuffer
            ? "arraybuffer"
            : supportsBlob
            ? "blob"
            : "";
        }
      } else if (xhr.readyState === 4) {
        bodyStream.dispatch(xhr.response);
      }
    };

    xhr.onloadstart = () => {
      dispatcher.dispatch({
        type: HttpClientRequestStatusType.Start,
      });
    };

    xhr.upload.onprogress = ev => {
      const { loaded: count } = ev;

      dispatcher.dispatch({
        type: HttpClientRequestStatusType.Progress,
        count,
      });
    };

    xhr.upload.onload = _ => {
      dispatcher.dispatch({
        type: HttpClientRequestStatusType.Completed,
      });
    };

    xhr.ontimeout = () => {
      // FIXME: Kind of rather have a state for this
      const cause = new Error("Network request failed");
      dispatcher.dispose({ cause });
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
