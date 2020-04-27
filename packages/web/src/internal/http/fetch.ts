import {
  httpRequestToUntypedHeaders,
  parseHttpResponseFromHeaders,
  HttpResponse,
} from "@reactive-js/core/dist/js/http";
import {
  fromPromise,
  publish,
  ofValue,
  concat,
  map,
  using,
  switchMap,
  ObservableLike,
} from "@reactive-js/core/dist/js/observable";
import { supportsArrayBuffer, supportsBlob } from "./capabilities";
import { HttpResponseBodyImpl } from "./httpResponseBody";
import { HttpWebRequest, WebResponseBodyLike } from "./interfaces";
import { isSome } from "@reactive-js/core/dist/js/option";
import {
  HttpClientRequestStatusType,
  HttpClient,
  HttpClientRequestStatus,
} from "@reactive-js/core/dist/js/http-client";
import { pipe } from "@reactive-js/core/dist/js/pipe";

const loadBodyContent = async (
  response: HttpResponse<Response>,
): Promise<unknown> => {
  const { body, contentInfo } = response;
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
      return body.text();
    } else if (contentLength > 0 && supportsArrayBuffer) {
      return body.arrayBuffer();
    } else if (supportsBlob) {
      return body.blob();
    }
    // Fallthrough
  }
  return await "";
};

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

  const fetchResponse = fromPromise(async subscription => {
    const abortController = new AbortController();
    subscription.add(() => abortController.abort());

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

    return parseHttpResponseFromHeaders(
      fetchResponse.status,
      responseHeaders,
      fetchResponse,
    );
  });

  const mapResponseBody = switchMap(
    (
      response: HttpResponse<Response>,
    ): ObservableLike<HttpResponse<WebResponseBodyLike>> =>
      using(
        scheduler =>
          pipe(
            fromPromise(() => loadBodyContent(response)),
            publish(scheduler, 1),
            body => new HttpResponseBodyImpl(body),
          ),
        body =>
          ofValue({
            ...response,
            body,
          }),
      ),
  );

  return concat(
    ofValue<HttpClientRequestStatus<WebResponseBodyLike>>({
      type: HttpClientRequestStatusType.Start,
    }),
    pipe(
      fetchResponse,
      mapResponseBody,
      map(response => ({
        type: HttpClientRequestStatusType.HeadersReceived,
        response,
      })),
    ),
  );
};
