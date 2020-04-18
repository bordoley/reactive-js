import { IncomingMessage, request as httpRequest, Agent } from "http";
import { request as httpsRequest, RequestOptions } from "https";
import { URL } from "url";
import { ZlibOptions, BrotliOptions } from "zlib";
import {
  identity as identityEnumerable,
  lift,
  StreamEvent,
  StreamEventType,
  StreamOperator,
  emptyStream,
} from "@reactive-js/async-enumerable";
import {
  DisposableValueLike,
  createDisposableValue,
  DisposableLike,
  AbstractDisposable,
} from "@reactive-js/disposable";
import {
  HttpContentEncoding,
  HttpHeaders,
  HttpStatusCode,
  createRedirectHttpRequest,
  parseHttpResponseFromHeaders,
  HttpContentRequest,
  HttpContentResponse,
  HttpContent,
  httpRequestToUntypedHeaders,
} from "@reactive-js/http";
import {
  createBufferStreamSinkAsyncEnumeratorFromWritable,
  transform,
  createBufferStreamFromReadable,
  BufferStreamLike,
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
import { isSome, none, Option } from "@reactive-js/option";
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
  readonly request: HttpContentRequest<BufferStreamLike>;
};

export type HttpClientRequestStatusUploading = {
  readonly type: HttpClientRequestStatusType.Uploaded;
  readonly request: HttpContentRequest<BufferStreamLike>;
  readonly total: number;
};

export type HttpClientRequestStatusUploadComplete = {
  readonly type: HttpClientRequestStatusType.UploadComplete;
  readonly request: HttpContentRequest<BufferStreamLike>;
};

export type HttpClientRequestStatusResponseReady = {
  readonly type: HttpClientRequestStatusType.ResponseReady;
  readonly request: HttpContentRequest<BufferStreamLike>;
  readonly response: DisposableValueLike<
    HttpContentResponse<BufferStreamLike>
  >;
};

export type HttpClientRequestStatus =
  | HttpClientRequestStatusBegin
  | HttpClientRequestStatusUploading
  | HttpClientRequestStatusUploadComplete
  | HttpClientRequestStatusResponseReady;

const spyScanner = (
  [uploaded, total]: [number, number],
  ev: StreamEvent<Buffer>,
): [number, number] =>
  ev.type === StreamEventType.Next
    ? [ev.chunk.length, total + uploaded]
    : [-1, total + uploaded];

const send = (
  request: HttpContentRequest<BufferStreamLike>,
  requestOptions: RequestOptions & { contentEncoding?: HttpContentEncoding },
) => {
  const { contentEncoding, ...nodeOptions } = requestOptions;
  const { content } = request;
  const newContent =
    isSome(content) && isSome(contentEncoding)
      ? {
          ...content,
          contentEncodings: [...content.contentEncodings, contentEncoding],
        }
      : content;

  const requestWithAcceptEncodingsAndContentEncoding = {
    ...request,
    acceptedEncodings: supportedEncodings,
    content: newContent,
  };

  const { method, uri } = requestWithAcceptEncodingsAndContentEncoding;
  const headers = httpRequestToUntypedHeaders(
    requestWithAcceptEncodingsAndContentEncoding,
  );
  const nodeRequestUrl = uri instanceof URL ? uri : new URL(uri.toString());
  const nodeRequestOptions = {
    ...nodeOptions,
    headers,
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

const createOnSubscribe = (
  request: HttpContentRequest<BufferStreamLike>,
  requestOptions: RequestOptions & { contentEncoding?: HttpContentEncoding },
  encodeContent: StreamOperator<Buffer, Buffer>,
  decodeHttpContentResponse: (
    resp: HttpContentResponse<BufferStreamLike>,
  ) => HttpContentResponse<BufferStreamLike>,
) => (subscriber: SafeSubscriberLike<HttpClientRequestStatus>) => {
  subscriber.dispatch({ type: HttpClientRequestStatusType.Begin, request });

  const req = send(request, requestOptions);

  const onError = (cause: any) => {
    // FIXME: Maybe we should dispatch a message instead of an error.
    subscriber.dispose({ cause });
  };
  req.on("error", onError);

  const onResponse = (msg: IncomingMessage) => {
    subscriber.add(() => msg.destroy());

    const response = pipe(
      parseHttpResponseFromHeaders(
        msg.statusCode ?? -1,
        msg.headers as HttpHeaders,
        createBufferStreamFromReadable(() => msg),
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

  const reqBodyEnumerator = createBufferStreamSinkAsyncEnumeratorFromWritable(req, subscriber);

  const doOnNotify = ([count, total]: [number, number]) => {
    const ev: HttpClientRequestStatus =
      count < 0
        ? { type: HttpClientRequestStatusType.UploadComplete, request }
        : { type: HttpClientRequestStatusType.Uploaded, request, total };
    subscriber.dispatch(ev);
  };

  const spyEnumerator = pipe(
    identityEnumerable<StreamEvent<Buffer>>(),
    lift(
      compose(
        scan(spyScanner, (): [number, number] => [0, 0]),
        onNotify(doOnNotify),
      ),
    ),
  ).enumerateAsync(subscriber);

  const contentEnumerator = pipe(
    request.content?.body ?? emptyStream(),
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

export type HttpClientOptions = BrotliOptions &
  ZlibOptions & {
    // Node options
    readonly agent?: Agent | boolean;
    readonly insecureHTTPParser?: boolean;
    readonly maxHeaderSize?: number;
    readonly shouldEncode?: (
      req: HttpContentRequest<unknown>,
    ) => Option<boolean>;
  };

export type HttpClientRequestOptions = {
  // The encodings accepted by the server
  readonly acceptedEncodings?: readonly HttpContentEncoding[];
};

const identity = <T>(x: T): T => x;

const requestIsCompressible = (
  request: HttpContentRequest<BufferStreamLike>,
): boolean => {
  const { content } = request;
  return isSome(content) ? contentIsCompressible(content) : false;
};

export interface HttpClientLike extends DisposableLike {
  send(
    request: HttpContentRequest<BufferStreamLike>,
    requestOptions?: HttpClientRequestOptions,
  ): ObservableLike<HttpClientRequestStatus>;
}

class HttpClientImpl extends AbstractDisposable implements HttpClientLike {
  constructor(private readonly clientOptions: HttpClientOptions) {
    super();
  }

  send(
    request: HttpContentRequest<BufferStreamLike>,
    options: HttpClientRequestOptions = {},
  ): ObservableLike<HttpClientRequestStatus> {
    const {
      agent,
      insecureHTTPParser,
      maxHeaderSize,
      shouldEncode: shouldEncodeOption,
      ...zlibOptions
    } = this.clientOptions;

    const { acceptedEncodings = supportedEncodings } = options;
    const contentEncoding = getFirstSupportedEncoding(acceptedEncodings);

    const shouldEncodeOptionResult = isSome(shouldEncodeOption)
      ? shouldEncodeOption(request)
      : none;
    const shouldEncode = isSome(shouldEncodeOptionResult)
      ? shouldEncodeOptionResult
      : requestIsCompressible(request);

    const contentEncoder =
      isSome(contentEncoding) && shouldEncode
        ? transform(
            createEncodingCompressTransform(contentEncoding, zlibOptions),
          )
        : identity;

    const decodeHttpContentResponseWithOption = decodeHttpContentResponse(
      zlibOptions,
    );

    const requestOptions = {
      agent,
      contentEncoding,
      insecureHTTPParser,
      maxHeaderSize,
    };

    return createObservable(
      createOnSubscribe(
        request,
        requestOptions,
        contentEncoder,
        decodeHttpContentResponseWithOption,
      ),
    );
  }
}

export const creatHttpClient = (
  clientOptions: HttpClientOptions = {},
): HttpClientLike => new HttpClientImpl(clientOptions);

const redirectCodes = [
  HttpStatusCode.MovedPermanently,
  HttpStatusCode.Found,
  HttpStatusCode.SeeOther,
  HttpStatusCode.TemporaryRedirect,
  HttpStatusCode.PermanentRedirect,
];

export const createDefaultHttpResponseHandler = (
  httpClient: HttpClientLike,
  maxRedirects = 10,
): ObservableOperator<HttpClientRequestStatus, HttpClientRequestStatus> => {
  const handleResponse = (
    status: HttpClientRequestStatus,
  ): ObservableLike<HttpClientRequestStatus> => {
    if (status.type === HttpClientRequestStatusType.ResponseReady) {
      const { request, response } = status;

      const { location, preferences, statusCode } = response.value;
      const acceptedEncodings = preferences?.acceptedEncodings ?? [];
      const shouldRedirect =
        redirectCodes.includes(statusCode) &&
        isSome(location) &&
        maxRedirects > 0;

      const [newRequest, newAcceptedEncodings] = shouldRedirect
        ? [
            createRedirectHttpRequest<
              HttpContent<BufferStreamLike>,
              HttpContent<BufferStreamLike>
            >(response.value)(request),
          ]
        : statusCode === HttpStatusCode.ExpectationFailed
        ? [{ ...request, expectContinue: false }]
        : statusCode === HttpStatusCode.UnsupportedMediaType &&
          acceptedEncodings.length > 0
        ? [request, acceptedEncodings]
        : [request];

      if (request !== newRequest || isSome(newAcceptedEncodings)) {
        response.dispose();

        return pipe(
          httpClient.send(newRequest, {
            acceptedEncodings: newAcceptedEncodings,
          }),
          createDefaultHttpResponseHandler(httpClient, maxRedirects - 1),
        );
      }
      // Fallthrough
    }
    return ofValue(status);
  };

  return concatMap(handleResponse);
};
