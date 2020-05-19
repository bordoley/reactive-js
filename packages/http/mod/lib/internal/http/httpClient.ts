import { dispose, DisposableLike } from "../../../../../core/mod/lib/disposable.ts";
import { pipe, Function1 } from "../../../../../core/mod/lib/functions.ts";
import {
  ObservableLike,
  fromValue,
  map,
  switchMap,
  concatMap,
} from "../../../../../core/mod/lib/observable.ts";
import { isSome, isNone, none } from "../../../../../core/mod/lib/option.ts";
import { createRedirectHttpRequest } from "./httpRequest.ts";
import {
  HttpContentEncoding,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from "./interfaces.ts";
import { IOSourceOperator, IOSourceLike } from "../../../../../core/mod/lib/io.ts";
import { contentIsCompressible } from "./httpContentInfo.ts";

export const enum HttpClientRequestStatusType {
  Start = 1,
  Progress = 2,
  Completed = 3,
  HeadersReceived = 4,
}

export type HttpClientRequestStatusStart = {
  readonly type: HttpClientRequestStatusType.Start;
};

export type HttpClientRequestStatusProgress = {
  readonly type: HttpClientRequestStatusType.Progress;
  readonly count: number;
};

export type HttpClientRequestStatusComplete = {
  readonly type: HttpClientRequestStatusType.Completed;
};

export type HttpClientRequestStatusHeadersReceived<
  TResp extends DisposableLike
> = {
  readonly type: HttpClientRequestStatusType.HeadersReceived;
  readonly response: HttpResponse<TResp>;
};

export type HttpClientRequestStatus<TResp extends DisposableLike> =
  | HttpClientRequestStatusStart
  | HttpClientRequestStatusProgress
  | HttpClientRequestStatusComplete
  | HttpClientRequestStatusHeadersReceived<TResp>;

export type HttpClientRequest<T> = HttpRequest<T> & {
  readonly acceptedEncodings?: readonly HttpContentEncoding[];
  readonly maxRedirects?: number;
};

export type HttpClient<
  THttpRequest extends HttpClientRequest<unknown>,
  TResp extends DisposableLike
> = (req: THttpRequest) => ObservableLike<HttpClientRequestStatus<TResp>>;

const redirectCodes = [
  HttpStatusCode.MovedPermanently,
  HttpStatusCode.Found,
  HttpStatusCode.SeeOther,
  HttpStatusCode.TemporaryRedirect,
  HttpStatusCode.PermanentRedirect,
];

const encodeHttpClientRequestContent = (
  encoderProvider: {
    [key: string]: IOSourceOperator<Uint8Array, Uint8Array>;
  },
  db: {
    [key: string]: {
      compressible?: boolean;
    };
  } = {},
): Function1<
  HttpClientRequest<IOSourceLike<Uint8Array>>,
  HttpClientRequest<IOSourceLike<Uint8Array>>
> => {
  const supportedEncodings = Object.keys(encoderProvider);

  const httpRequestIsCompressible = <T>({
    contentInfo,
  }: HttpRequest<T>): boolean =>
    isSome(contentInfo) && contentIsCompressible(contentInfo, db);

  return request => {
    const { body, contentInfo } = request;

    if (isNone(contentInfo)) {
      return request;
    }

    const contentEncoding = (request?.acceptedEncodings ?? []).find(encoding =>
      supportedEncodings.includes(encoding),
    );

    if (isNone(contentEncoding)) {
      return request;
    }

    const encode =
      isSome(contentEncoding) && httpRequestIsCompressible(request)
        ? encoderProvider[contentEncoding]
        : none;

    if (isNone(encode)) {
      return request;
    }

    return {
      ...request,
      body: encode(body),
      contentInfo: {
        contentType: contentInfo.contentType,
        contentEncodings: [contentEncoding],
        contentLength: -1,
      },
    };
  };
};


export const withDefaultBehaviors = <TResp extends DisposableLike>(
  encoderProvider: {
    [key: string]: IOSourceOperator<Uint8Array, Uint8Array>;
  },
  db: {
    [key: string]: {
      compressible?: boolean;
    };
  } = {},
): Function1<
  HttpClient<HttpClientRequest<IOSourceLike<Uint8Array>>, TResp>,
  HttpClient<HttpClientRequest<IOSourceLike<Uint8Array>>, TResp>
> => httpClient => {
  const sendRequest = (
    request: HttpClientRequest<IOSourceLike<Uint8Array>>,
  ): ObservableLike<HttpClientRequestStatus<TResp>> =>
    pipe(
      request,
      fromValue(),
      map(encodeHttpClientRequestContent(encoderProvider, db)),
      switchMap(httpClient),
      concatMap(status => {
        if (status.type === HttpClientRequestStatusType.HeadersReceived) {
          const { response } = status;
          const { location, preferences, statusCode } = response;
          const acceptedEncodings = preferences?.acceptedEncodings ?? [];
          const shouldRedirect =
            redirectCodes.includes(statusCode) &&
            isSome(location) &&
            (request?.maxRedirects ?? 10) > 0;

          const newRequest = shouldRedirect
            ? createRedirectHttpRequest(request, response)
            : statusCode === HttpStatusCode.ExpectationFailed
            ? { ...request, expectContinue: false }
            : statusCode === HttpStatusCode.UnsupportedMediaType &&
              acceptedEncodings.length > 0
            ? { ...request, acceptedEncodings }
            : request;

          if (request !== newRequest) {
            dispose(response.body);
            return sendRequest(newRequest);
          }
          // Fallthrough
        }
        return fromValue()(status);
      }),
    );

  return sendRequest;
};
