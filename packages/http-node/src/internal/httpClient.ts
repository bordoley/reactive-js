import {
  IncomingMessage,
  OutgoingHttpHeaders,
  request as httpRequest,
  Agent,
  ClientRequest,
} from "http";
import { request as httpsRequest } from "https";
import { URL } from "url";
import { ZlibOptions, BrotliOptions } from "zlib";
import {
  identity as identityEnumerable,
  lift,
  AsyncEnumerableLike,
  AsyncEnumerableOperator,
} from "@reactive-js/async-enumerable";
import {
  DisposableValueLike,
  createDisposableValue,
} from "@reactive-js/disposable";
import {
  HttpContentEncoding,
  HttpHeaders,
  HttpStatusCode,
  createRedirectHttpRequest,
  parseHttpResponseFromHeaders,
  writeHttpRequestHeaders,
  HttpContentRequest,
  HttpContentResponseLike,
  HttpContent,
} from "@reactive-js/http";
import {
  createWritableAsyncEnumerator,
  ReadableEvent,
  transform,
  ReadableEventType,
  ReadableMode,
  emptyReadableAsyncEnumerable,
  createReadableAsyncEnumerable,
} from "@reactive-js/node";
import {
  createObservable,
  ObservableLike,
  ofValue,
  SafeSubscriberLike,
  concatMap,
  onNotify,
  scan,
  ObservableOperator,
} from "@reactive-js/observable";
import { pipe, compose } from "@reactive-js/pipe";
import {
  supportedEncodings,
  createEncodingCompressTransform,
  getFirstSupportedEncoding,
} from "./httpContentEncoding";
import { contentIsCompressible } from "./httpContent";
import { decodeHttpContentResponse } from "./httpResponse";

export const enum HttpClientRequestStatusType {
  Begin = 1,
  Uploaded = 2,
  UploadComplete = 3,
  ResponseReady = 4,
}

export type HttpClientRequestStatusBegin = {
  readonly type: HttpClientRequestStatusType.Begin;
  readonly request: HttpContentRequest<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >;
}

export type HttpClientRequestStatusUploading = {
  readonly type: HttpClientRequestStatusType.Uploaded;
  readonly request: HttpContentRequest<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >;
  readonly total: number;
}

export type HttpClientRequestStatusUploadComplete = {
  readonly type: HttpClientRequestStatusType.UploadComplete;
  readonly request: HttpContentRequest<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >;
}

export type HttpClientRequestStatusResponseReady= {
  readonly type: HttpClientRequestStatusType.ResponseReady;
  readonly request: HttpContentRequest<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >;
  readonly response: DisposableValueLike<
    HttpContentResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
  >;
}

export type HttpClientRequestStatus =
  | HttpClientRequestStatusBegin
  | HttpClientRequestStatusUploading
  | HttpClientRequestStatusUploadComplete
  | HttpClientRequestStatusResponseReady;

const spyScanner = (
  [uploaded, total]: [number, number],
  ev: ReadableEvent,
): [number, number] =>
  ev.type === ReadableEventType.Data
    ? [ev.chunk.length, total + uploaded]
    : [-1, total + uploaded];

const createOnSubscribe = (
  request: HttpContentRequest<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >,
  send: () => ClientRequest,
  encodeContent: AsyncEnumerableOperator<
    ReadableMode,
    ReadableEvent,
    ReadableMode,
    ReadableEvent
  >,
  decodeHttpContentResponse: (
    resp: HttpContentResponseLike<
      AsyncEnumerableLike<ReadableMode, ReadableEvent>
    >,
  ) => HttpContentResponseLike<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >,
) => (subscriber: SafeSubscriberLike<HttpClientRequestStatus>) => {
  subscriber.dispatch({ type: HttpClientRequestStatusType.Begin, request });

  const req = send();

  const onError = (cause: any) => {
    // FIXME: Maybe we should dispatch a message instead of an error.
    subscriber.dispose({ cause });
  };
  req.on("error", onError);

  const onResponse = (msg: IncomingMessage) => {
    subscriber.add(() => msg.destroy());

    const response = pipe(
      parseHttpResponseFromHeaders(
        msg.statusCode || -1,
        msg.headers as HttpHeaders,
        createReadableAsyncEnumerable(() => msg),
      ),
      decodeHttpContentResponse,
    );

    const disposableResponse = createDisposableValue(response, _ => {
      msg.destroy();
    });

    subscriber.dispatch({
      type: HttpClientRequestStatusType.ResponseReady,
      request,
      response: disposableResponse,
    });
  };
  req.on("response", onResponse);

  const reqBodyEnumerator = createWritableAsyncEnumerator(req, subscriber);

  const doOnNotify = ([count, total]: [number, number]) => {
    const ev: HttpClientRequestStatus =
      count < 0
        ? { type: HttpClientRequestStatusType.UploadComplete, request }
        : { type: HttpClientRequestStatusType.Uploaded, request, total };
    subscriber.dispatch(ev);
  };

  const spyEnumerator = pipe(
    identityEnumerable<ReadableEvent>(),
    lift(
      compose(
        scan(spyScanner, (): [number, number] => [0, 0]),
        onNotify(doOnNotify),
      ),
    ),
  ).enumerateAsync(subscriber);

  const contentEnumerator = pipe(
    request.content?.body || emptyReadableAsyncEnumerable,
    lift(onNotify(ev => spyEnumerator.dispatch(ev))),
    encodeContent,
  ).enumerateAsync(subscriber);

  subscriber
    .add(reqBodyEnumerator)
    .add(spyEnumerator)
    .add(contentEnumerator)
    .add(_ => {
      req.abort();
      req.removeAllListeners();
      req.destroy();
    });

  const onContinue = () => {
    contentEnumerator.subscribe(reqBodyEnumerator);
    reqBodyEnumerator.subscribe(contentEnumerator);
  };
  if (request.expectContinue) {
    req.on("continue", onContinue);
  } else {
    onContinue();
  }

  // FIXME (ev: upgrade): Handle the upgrade header and either upgrade to https or http2 (once we have a client).

  // Intentionally ignored events:
  // * abort: The only way to abort is for the request to be disposed
  // * connect: Used for request proxying. We don't support the connect method.
  // * socket: Nothing really to do here.
  // * timeout: reactive-js has a timeout operator. use it instead.
  // * information: Not much to do, we already support continue via the continue event, and will support upgrade.
};

export type HttpClientOptions = BrotliOptions & ZlibOptions & {
  // Node options
  readonly agent?: Agent | boolean;
  readonly insecureHTTPParser?: boolean;
  readonly maxHeaderSize?: number;
  readonly shouldEncode?: (
    req: HttpContentRequest<unknown>,
  ) => boolean | undefined;
}

export type HttpClientRequestOptions = {
  // The encodings accepted by the server
  readonly acceptedEncodings?: readonly HttpContentEncoding[];
}

const identity = <T>(x: T): T => x;

const requestIsCompressible = (
  request: HttpContentRequest<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >,
): boolean => {
  const { content } = request;
  return content !== undefined ? contentIsCompressible(content) : false;
};

export type HttpClient = {
  (
    request: HttpContentRequest<
      AsyncEnumerableLike<ReadableMode, ReadableEvent>
    >,
    requestOptions?: HttpClientRequestOptions,
  ): ObservableLike<HttpClientRequestStatus>;
}

export const creatHttpClient = (
  clientOptions: HttpClientOptions = {},
): HttpClient => {
  const {
    agent,
    insecureHTTPParser,
    maxHeaderSize,
    shouldEncode: shouldEncodeOption,
    ...zlibOptions
  } = clientOptions;

  return (request, requestOptions = {}) => {
    const { acceptedEncodings = supportedEncodings } = requestOptions;
    const contentEncoding = getFirstSupportedEncoding(acceptedEncodings);

    const send = () => {
      const { content } = request;
      const newContent =
        content === undefined || contentEncoding === undefined
          ? content
          : {
              ...content,
              contentEncodings: [...content.contentEncodings, contentEncoding],
            };

      const requestWithAcceptEncodingsAndContentEncoding = {
        ...request,
        acceptedEncodings: supportedEncodings,
        content: newContent,
      };

      const { method, uri } = requestWithAcceptEncodingsAndContentEncoding;
      const headers: OutgoingHttpHeaders = {};
      writeHttpRequestHeaders(
        requestWithAcceptEncodingsAndContentEncoding,
        (header: string, value: string) => (headers[header] = value),
      );

      const nodeRequestUrl = uri instanceof URL ? uri : new URL(uri.toString());
      const nodeRequestOptions = {
        agent,
        headers,
        insecureHTTPParser,
        maxHeaderSize,
        method,
      };

      return uri.protocol === "https:"
        ? httpsRequest(nodeRequestUrl, nodeRequestOptions)
        : uri.protocol === "http:"
        ? httpRequest(nodeRequestUrl, nodeRequestOptions)
        : (() => {
            throw new Error();
          })();
    };

    const shouldEncodeOptionResult =
      shouldEncodeOption !== undefined
        ? shouldEncodeOption(request)
        : undefined;
    const shouldEncode =
      shouldEncodeOptionResult !== undefined
        ? shouldEncodeOptionResult
        : requestIsCompressible(request);

    const contentEncoder =
      contentEncoding !== undefined && shouldEncode
        ? transform(
            createEncodingCompressTransform(contentEncoding, zlibOptions),
          )
        : identity;

    const decodeHttpContentResponseWithOption = decodeHttpContentResponse(
      zlibOptions,
    );

    return createObservable(
      createOnSubscribe(
        request,
        send,
        contentEncoder,
        decodeHttpContentResponseWithOption,
      ),
    );
  };
};

const redirectCodes = [
  HttpStatusCode.MovedPermanently,
  HttpStatusCode.Found,
  HttpStatusCode.SeeOther,
  HttpStatusCode.TemporaryRedirect,
  HttpStatusCode.PermanentRedirect,
];

export const createDefaultHttpResponseHandler = (
  sendHttpRequest: HttpClient,
  maxRedirects = 10,
): ObservableOperator<HttpClientRequestStatus, HttpClientRequestStatus> => {
  const handleResponse = (
    status: HttpClientRequestStatus,
  ): ObservableLike<HttpClientRequestStatus> => {
    if (status.type === HttpClientRequestStatusType.ResponseReady) {
      const { request, response } = status;

      const { location, preferences, statusCode } = response.value;
      const acceptedEncodings = preferences?.acceptedEncodings || [];
      const shouldRedirect =
        redirectCodes.includes(statusCode) &&
        location !== undefined &&
        maxRedirects > 0;

      const [newRequest, newAcceptedEncodings] = shouldRedirect
        ? [
            createRedirectHttpRequest<
              HttpContent<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
              HttpContent<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
            >(response.value)(request),
          ]
        : statusCode === HttpStatusCode.ExpectationFailed
        ? [{ ...request, expectContinue: false }]
        : statusCode === HttpStatusCode.UnsupportedMediaType &&
          acceptedEncodings.length > 0
        ? [request, acceptedEncodings]
        : [request];

      if (request !== newRequest || newAcceptedEncodings !== undefined) {
        response.dispose();

        return pipe(
          sendHttpRequest(newRequest, {
            acceptedEncodings: newAcceptedEncodings,
          }),
          createDefaultHttpResponseHandler(sendHttpRequest, maxRedirects - 1),
        );
      }
      // Fallthrough
    }
    return ofValue(status);
  };

  return concatMap(handleResponse);
};
