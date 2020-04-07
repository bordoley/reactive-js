import { RequestListener, ServerResponse } from "http";
import {
  HttpRequestLike,
  HttpResponseLike,
  HttpStatusCode,
  createHttpResponse,
} from "@reactive-js/http";
import {
  createWritableAsyncEnumerator,
  emptyReadableAsyncEnumerable,
} from "@reactive-js/node";
import {
  ObservableLike,
  await_,
  catchError,
  createObservable,
  onNotify,
  ofValue,
  subscribe,
  using,
} from "@reactive-js/observable";
import { compose, pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  HttpContentBodyLike,
  createStringContentBody,
} from "./httpContentBody";
import { writeResponseHeaders } from "./httpHeaders";
import { createIncomingMessageRequest } from "./httpRequest";

const writeResponseMessage = (resp: ServerResponse) => (
  response: HttpResponseLike<HttpContentBodyLike>,
) => {
  resp.statusCode = response.statusCode;

  writeResponseHeaders(response, (header, value) =>
    resp.setHeader(header, value),
  );
};

const writeResponseContentBody = (resp: ServerResponse) => ({
  content,
}: HttpResponseLike<HttpContentBodyLike>) =>
  createObservable(subscriber => {
    const contentReadableEnumerator = (
      content || emptyReadableAsyncEnumerable
    ).enumerateAsync(subscriber);
    const responseWritableEnumerator = createWritableAsyncEnumerator(
      resp,
      subscriber,
    );

    subscriber.add(contentReadableEnumerator).add(responseWritableEnumerator);
    responseWritableEnumerator.add(subscriber);

    contentReadableEnumerator.subscribe(responseWritableEnumerator);
    responseWritableEnumerator.subscribe(contentReadableEnumerator);
  });

// FIXME: Don't include content in prod mode
// FIXME: Special case some exceptions like URI parsing exceptions that are due to bad user input
const defaultOnError = (
  e: unknown,
): ObservableLike<HttpResponseLike<HttpContentBodyLike>> =>
  ofValue(
    createHttpResponse(HttpStatusCode.InternalServerError, {
      content: createStringContentBody(
        e instanceof Error ? e.stack || "" : String(e),
        "text/plain",
      ),
    }),
  );

export interface HttpRequestListenerOptions {
  readonly onError?: (
    e: unknown,
  ) => ObservableLike<HttpResponseLike<HttpContentBodyLike>>;
  readonly protocol?: "http:" | "https:" | undefined;
}

export const createRequestListener = (
  handler: (
    req: HttpRequestLike<HttpContentBodyLike>,
  ) => ObservableLike<HttpResponseLike<HttpContentBodyLike>>,
  scheduler: SchedulerLike,
  options: HttpRequestListenerOptions = {},
): RequestListener => {
  const { onError = defaultOnError } = options;

  return (req, resp) => pipe(
    using(
      () => createIncomingMessageRequest(req),
      compose(
        ofValue,
        await_(handler),
        catchError(onError),
        onNotify(writeResponseMessage(resp)),
        await_(writeResponseContentBody(resp)),
      ),
    ),
    subscribe(scheduler),
  );
};
