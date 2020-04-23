import {
  httpRequestToUntypedHeaders,
  parseHttpResponseFromHeaders,
  HttpResponse,
} from "@reactive-js/core/dist/js/http";
import {
  createObservable,
  fromPromise,
  publish,
} from "@reactive-js/core/dist/js/observable";
import { supportsArrayBuffer, supportsBlob } from "./capabilities";
import { HttpResponseBodyImpl } from "./httpResponseBody";
import { HttpWebRequest, WebResponseBodyLike } from "./interfaces";
import { isSome, none } from "@reactive-js/core/dist/js/option";
import {
  HttpClientRequestStatusType,
  HttpClient,
} from "@reactive-js/core/dist/js/http-client";
import { pipe } from "@reactive-js/core/dist/js/pipe";

/** @ignore */
export const sendHttpRequestUsingFetch: HttpClient<
  HttpWebRequest,
  WebResponseBodyLike
> = request => {
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
    subscriber.add(() => abortController.abort());

    subscriber.dispatch({
      type: HttpClientRequestStatusType.Start,
    });

    try {
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

      const responseHeaders: { [key: string]: string } = {};
      fetchResponse.headers.forEach((v, k) => {
        responseHeaders[k] = v;
      });

      const responseNoBody = parseHttpResponseFromHeaders(
        fetchResponse.status,
        responseHeaders,
        none,
      );

      const loadBodyContent = async (): Promise<unknown> => {
        const { contentInfo } = responseNoBody;
        if (isSome(contentInfo)) {
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

          if (responseIsText) {
            return fetchResponse.text();
          } else if (contentLength > 0 && supportsArrayBuffer) {
            return fetchResponse.arrayBuffer();
          } else if (supportsBlob) {
            return fetchResponse.blob();
          }
          // Fallthrough
        }
        return await "";
      };

      const bodyObservable = pipe(
        fromPromise(loadBodyContent),
        publish(subscriber, 1),
      );

      const body: WebResponseBodyLike = new HttpResponseBodyImpl(
        bodyObservable,
      );
      subscriber.add(body);
      body.add(subscriber);

      const response: HttpResponse<WebResponseBodyLike> = {
        ...responseNoBody,
        body,
      };

      subscriber.dispatch({
        type: HttpClientRequestStatusType.HeadersReceived,
        response,
      });
    } catch (cause) {
      subscriber.dispose({ cause });
    }
  });
};
