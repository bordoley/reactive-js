import {
  AsyncEnumerableLike,
  AsyncEnumeratorLike,
} from "@reactive-js/async-enumerable";
import { OutgoingHttpHeaders, IncomingMessage } from "http";
import { URL } from "url";
import {
  ReadableMode,
  ReadableEvent,
  createReadableAsyncEnumerator,
} from "./readable";
import { DisposableLike } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";

/** @ignore */
export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

/** @ignore */
export interface HttpContentBodyLike
  extends AsyncEnumerableLike<ReadableMode, ReadableEvent> {
  readonly contentLength: number;
  readonly contentType: string;
  readonly contentEncoding: string;
}

/** @ignore */
export interface HttpRequestLike<T> {
  content?: T;

  // FIXME: Limit the allowed set of headers
  headers?: OutgoingHttpHeaders;
  method: HttpMethod;
  url: string | URL;
}

/** @ignore */
export interface HttpResponseLike<T> {
  readonly location?: string;
  readonly statusCode: number;
  readonly content?: T;
}

/** @ignore */
export class HttpIncomingMessageContentBody implements HttpContentBodyLike {
  constructor(
    private readonly response: DisposableLike,
    private readonly msg: IncomingMessage,
  ) {}

  get contentEncoding(): string {
    return this.msg.headers["content-encoding"] || "";
  }

  get contentLength(): number {
    try {
      return Number.parseInt(this.msg.headers["content-length"] || "0");
    } catch (_) {
      return 0;
    }
  }

  get contentType(): string {
    return this.msg.headers["content-type"] || "";
  }

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<ReadableMode, ReadableEvent> {
    const enumerator = createReadableAsyncEnumerator(
      this.msg,
      scheduler,
      replayCount,
    );
    this.response.add(enumerator);
    return enumerator;
  }
}
