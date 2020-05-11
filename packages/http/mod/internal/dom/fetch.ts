import { bind, pipe } from "../../../../core/lib/functions.ts";
import {
  dispatch,
  fromPromise,
  publish,
  fromValue,
  concat,
  map,
  using,
  switchMap,
  ObservableLike,
  createObservable,
} from "../../../../core/lib/observable.ts";
import { isSome } from "../../../../core/lib/option.ts";
import {
  httpRequestToUntypedHeaders,
  parseHttpResponseFromHeaders,
  HttpResponse,
  HttpClientRequestStatusType,
  HttpClient,
  HttpClientRequestStatus,
} from "../../http.ts";
import { supportsArrayBuffer, supportsBlob } from "./capabilities.ts";
import { HttpResponseBodyImpl } from "./httpResponseBody.ts";
import { HttpWebRequest, WebResponseBodyLike } from "./interfaces.ts";
import { dispose } from "../../../../core/lib/disposable.ts";

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
      subtype.includes("json") ||
      subtype.includes("text") ||
      subtype.includes("xml");

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

  const fetchResponse = createObservable(async dispatcher => {
    const abortController = new AbortController();
    dispatcher.add(() => abortController.abort());

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

      const response = parseHttpResponseFromHeaders(
        fetchResponse.status,
        responseHeaders,
        fetchResponse,
      );

      dispatch(dispatcher, response);
      dispose(dispatcher);
    } catch (cause) {
      dispose(dispatcher, { cause });
    }
  });

  const mapResponseBody = switchMap(
    (
      response: HttpResponse<Response>,
    ): ObservableLike<HttpResponse<WebResponseBodyLike>> =>
      using(
        scheduler =>
          pipe(
            bind(loadBodyContent, response),
            fromPromise,
            publish(scheduler, 1),
            body => new HttpResponseBodyImpl(body),
          ),
        body =>
          fromValue()({
            ...response,
            body,
          }),
      ),
  );

  return concat(
    fromValue<HttpClientRequestStatus<WebResponseBodyLike>>()({
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
