import {
  HttpServerRequest,
  HttpContentResponse,
  HttpContentRequest,
  HttpContentEncoding,
} from "@reactive-js/http";
import { ObservableLike } from "@reactive-js/observable";
import { DisposableLike } from "@reactive-js/disposable";

export type HttpServer<TReq, TResp> = (
  req: HttpServerRequest<TReq>,
) => ObservableLike<HttpContentResponse<TResp>>;

export const enum HttpClientRequestStatusType {
  Start = 1,
  Progress = 2,
  Completed = 3,
  HeaderReceived = 4,
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

export type HttpClientRequestStatusHeaderReceived<
  TResp extends DisposableLike
> = {
  readonly type: HttpClientRequestStatusType.HeaderReceived;
  readonly response: HttpContentResponse<TResp>;
};

export type HttpClientRequestStatus<TResp extends DisposableLike> =
  | HttpClientRequestStatusStart
  | HttpClientRequestStatusProgress
  | HttpClientRequestStatusComplete
  | HttpClientRequestStatusHeaderReceived<TResp>;

export type HttpClient<
  THttpRequest extends HttpContentRequest<unknown>,
  TResp extends DisposableLike
> = (req: THttpRequest) => ObservableLike<HttpClientRequestStatus<TResp>>;
