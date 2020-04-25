import fs from "fs";
import { createServer as createHttp1Server } from "http";
import { createSecureServer as createHttp2Server } from "http2";
import mime from "mime-types";
import {
  generate,
  map as mapFlowable,
} from "@reactive-js/core/dist/js/flowable";
import {
  HttpMethod,
  createHttpRequest,
  createHttpResponse,
  disallowProtocolAndHostForwarding,
  HttpResponse,
  HttpStatusCode,
  HttpRequest,
} from "@reactive-js/core/dist/js/http";
import { HttpClientRequestStatusType } from "@reactive-js/core/dist/js/http-client";
import { HttpServer } from "@reactive-js/core/dist/js/http-server";
import {
  createHttpRequestListener,
  createHttpClient,
  decodeHttpRequest,
  encodeHttpResponse,
  encodeCharsetHttpResponse,
  encodeCharsetHttpRequest,
  withDefaultBehaviors,
} from "@reactive-js/node/dist/js/http";
import {
  createRouter,
  HttpRoutedRequest,
} from "@reactive-js/core/dist/js/http-server";
import {
  BufferFlowableLike,
  encode,
  createBufferFlowableFromReadable,
  createDisposableNodeStream,
} from "@reactive-js/node/dist/js/streams";
import { scheduler as nodeScheduler } from "@reactive-js/node/dist/js/scheduler";
import { bindNodeCallback } from "@reactive-js/node/dist/js/utils";
import {
  map,
  subscribe,
  ofValue,
  ObservableLike,
  onNotify,
  catchError,
  throws,
  await_,
  onError,
  onDispose,
  using,
  concatMap,
  switchMap,
} from "@reactive-js/core/dist/js/observable";
import { isSome } from "@reactive-js/core/dist/js/option";
import { pipe, Operator } from "@reactive-js/core/dist/js/pipe";
import {
  toPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/core/dist/js/scheduler";

const scheduler = pipe(
  nodeScheduler,
  toPriorityScheduler,
  toSchedulerWithPriority(1),
);

const routerHandlerPrintParams: HttpServer<
  HttpRoutedRequest<BufferFlowableLike>,
  HttpResponse<BufferFlowableLike>
> = req =>
  pipe(
    createHttpResponse({
      statusCode: HttpStatusCode.OK,
      body: JSON.stringify(req.params),
    }),
    encodeCharsetHttpResponse("application/json"),
    ofValue,
  );

const routerHandlerEventStream: HttpServer<
  HttpRoutedRequest<BufferFlowableLike>,
  HttpResponse<BufferFlowableLike>
> = _ => {
  const body = pipe(
    generate(
      acc => acc + 1,
      () => 0,
      1000,
    ),
    mapFlowable(
      data =>
        `id: ${data.toString()}\nevent: test\ndata: ${data.toString()}\n\n`,
    ),
    encode("utf-8"),
  );
  const response = createHttpResponse({
    statusCode: HttpStatusCode.OK,
    body,
    cacheControl: ["no-cache"],
    contentInfo: {
      contentType: 'text/event-stream; charset="utf-8"',
    },
  });

  return ofValue(response);
};

const routerHandlerFiles: HttpServer<
  HttpRoutedRequest<BufferFlowableLike>,
  HttpResponse<BufferFlowableLike>
> = req => {
  const path = req.params["*"] || "";
  const contentType = mime.lookup(path) || "application/octet-stream";

  return pipe(
    bindNodeCallback(fs.stat, (r: fs.Stats) => r)(path),
    map(next =>
      next.isFile() && !next.isDirectory()
        ? createHttpResponse({
            statusCode: HttpStatusCode.OK,
            body: createBufferFlowableFromReadable(() =>
              createDisposableNodeStream(fs.createReadStream(path)),
            ),
            contentInfo: {
              contentLength: next.size,
              contentType,
            },
          })
        : pipe(
            createHttpResponse({
              statusCode: HttpStatusCode.NotFound,
              body: JSON.stringify(req.params),
            }),
            encodeCharsetHttpResponse("text/plain"),
          ),
    ),
  );
};

const routerHandlerThrow: HttpServer<
  HttpRoutedRequest<BufferFlowableLike>,
  HttpResponse<BufferFlowableLike>
> = _ => throws(() => new Error("internal error"));

const notFound: Operator<
  HttpRequest<BufferFlowableLike>,
  ObservableLike<HttpResponse<BufferFlowableLike>>
> = req =>
  pipe(
    createHttpResponse({
      statusCode: HttpStatusCode.NotFound,
      body: req.uri.toString(),
    }),
    encodeCharsetHttpResponse("text/plain"),
    ofValue,
  );

const router = createRouter(
  {
    "/events": routerHandlerEventStream,
    "/files/*": routerHandlerFiles,
    "/users/:username/friends/:friendName": routerHandlerPrintParams,
    "/users/:username/friends/:friendName/*": routerHandlerPrintParams,
    "/throws": routerHandlerThrow,
  },
  notFound,
);

const listener = createHttpRequestListener(
  req =>
    pipe(
      ofValue(req),
      map(disallowProtocolAndHostForwarding()),
      map(decodeHttpRequest()),
      await_(router),
      map(encodeHttpResponse(req)),
      catchError((e: unknown) => {
        const body =
          process.env.NODE_ENV === "production"
            ? ""
            : e instanceof Error && isSome(e.stack)
            ? e.stack
            : String(e);

        const statusCode =
          e instanceof URIError
            ? HttpStatusCode.BadRequest
            : HttpStatusCode.InternalServerError;

        return pipe(
          createHttpResponse({
            statusCode,
            body,
          }),
          encodeCharsetHttpResponse("text/plain"),
          ofValue,
        );
      }),
    ),
  scheduler,
);

createHttp1Server({}, listener).listen(8080);

// For instructions on generating local certs see:
// https://letsencrypt.org/docs/certificates-for-localhost/
createHttp2Server(
  {
    //allowHTTP1: true,
    key: fs.readFileSync("localhost.key"),
    cert: fs.readFileSync("localhost.crt"),
  },
  listener,
).listen(8081);

const httpClient = pipe(createHttpClient(), withDefaultBehaviors());

pipe(
  createHttpRequest({
    method: HttpMethod.POST,
    uri: "http://localhost:8080/index.html",
    body: "some text",
    headers: {
      "x-forwarded-host": "www.google.com",
      "x-forwarded-proto": "https",
    },
    preferences: {
      acceptedMediaRanges: ["application/json", "text/html"],
    },
  }),
  encodeCharsetHttpRequest("text/plain"),
  httpClient,
  onNotify(status => {
    console.log("status: " + status.type);
    if (status.type === HttpClientRequestStatusType.HeadersReceived) {
      const { response } = status;
      response.body.dispose();
    }
  }),
  onDispose(_ => console.log("dispose value case")),
  onError(console.log),
  subscribe(scheduler),
);

const file = "packages/example/dist/rollup/bundle.js";
pipe(
  file,
  bindNodeCallback(fs.stat, (r: fs.Stats) => r),
  map(stats =>
    createHttpRequest({
      method: HttpMethod.POST,
      uri: "http://localhost:8080/index.html",
      body: createBufferFlowableFromReadable(() =>
        createDisposableNodeStream(fs.createReadStream(file)),
      ),
      contentInfo: {
        contentLength: stats.size,
        contentType: "application/octet-stream",
      },
      headers: {
        "x-forwarded-host": "www.google.com",
        "x-forwarded-proto": "https",
      },
      preferences: {
        acceptedMediaRanges: ["application/json", "text/html"],
      },
    }),
  ),
  switchMap(httpClient),
  concatMap(status =>
    status.type === HttpClientRequestStatusType.HeadersReceived
      ? using(
          scheduler => status.response.body.stream(scheduler),
          _ => ofValue("done"),
        )
      : ofValue(JSON.stringify(status)),
  ),
  onNotify(console.log),
  onError(console.log),
  onDispose(_ => console.log("dispose")),
  subscribe(scheduler),
);
