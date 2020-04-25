import { HttpResponse, HttpRequest } from "./http";
import { ObservableLike } from "./observable";
import { DisposableLike } from "./disposable";

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

export type HttpClient<
  THttpRequest extends HttpRequest<unknown>,
  TResp extends DisposableLike
> = (req: THttpRequest) => ObservableLike<HttpClientRequestStatus<TResp>>;
