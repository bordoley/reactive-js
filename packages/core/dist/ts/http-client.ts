import {
  HttpResponse,
  HttpRequest,
  HttpContentEncoding,
  createRedirectHttpRequest,
  HttpStatusCode,
} from "./http.ts";
import {
  ObservableLike,
  ofValue,
  map,
  switchMap,
  concatMap,
} from "./observable.ts";
import { DisposableLike } from "./disposable.ts";
import { pipe, identity } from "./functions.ts";
import { isSome } from "./option.ts";

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

export const withDefaultBehaviors = <TReq, TResp extends DisposableLike>(
  encodeHttpRequest: (
    req: HttpClientRequest<TReq>,
  ) => HttpClientRequest<TReq> = identity,
) => (
  httpClient: HttpClient<HttpClientRequest<TReq>, TResp>,
): HttpClient<HttpClientRequest<TReq>, TResp> => {
  const sendRequest = (request: HttpClientRequest<TReq>): ObservableLike<HttpClientRequestStatus<TResp>> =>
    pipe(
      ofValue(request),
      map(encodeHttpRequest),
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
            response.body.dispose();
            return sendRequest(newRequest);
          }
          // Fallthrough
        }
        return ofValue(status);
      }),
    );

  return sendRequest;
};
