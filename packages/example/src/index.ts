import fs from "fs";
import { createServer as createHttp1Server } from "http";
import { createSecureServer as createHttp2Server } from "http2";
import mime from "mime-types";
import {
  HttpMethod,
  createHttpRequest,
  createHttpResponse,
  disallowProtocolAndHostForwarding,
  HttpResponse,
  HttpStatusCode,
  HttpRequest,
} from "@reactive-js/http";
import {
  createHttpRequestListener,
  createHttpClient,
  decodeHttpRequest,
  encodeHttpResponse,
  encodeCharsetHttpResponse,
  encodeCharsetHttpRequest,
  withDefaultBehaviors,
} from "@reactive-js/http-node";
import {
  HttpRequestRouterHandler,
  createRouter,
} from "@reactive-js/http-router";
import {
  BufferStreamLike,
  scheduler as nodeScheduler,
  bindNodeCallback,
  encode,
  createBufferStreamFromReadable,
  createDisposableStream,
} from "@reactive-js/node";
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
} from "@reactive-js/observable";
import { pipe, Operator } from "@reactive-js/pipe";
import {
  toPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/scheduler";
import { isSome } from "@reactive-js/option";
import {
  generateStream,
  mapStream,
} from "@reactive-js/async-enumerable";
import { HttpClientRequestStatusType } from "@reactive-js/http-common";

const scheduler = pipe(
  nodeScheduler,
  toPriorityScheduler,
  toSchedulerWithPriority(1),
);

const routerHandlerPrintParams: HttpRequestRouterHandler<
  BufferStreamLike,
  BufferStreamLike
> = req => pipe(
  createHttpResponse({
    statusCode: HttpStatusCode.OK,
    body: JSON.stringify(req.params),
  }),
  encodeCharsetHttpResponse("application/json"),
  ofValue,
)

const routerHandlerEventStream: HttpRequestRouterHandler<
  BufferStreamLike,
  BufferStreamLike
> = _ => {
  const body = pipe(
    generateStream(
      acc => acc + 1,
      () => 0,
      1000,
    ),
    mapStream(
      data =>
        `id: ${data.toString()}\nevent: test\ndata: ${data.toString()}\n\n`,
    ),
    encode("utf-8"),
  );
  const response = createHttpResponse({
    statusCode: HttpStatusCode.OK,
    body,
    cacheControl: ["no-cache"],
    contentInfo:{
      contentType: 'text/event-stream; charset="utf-8"',
    },
  });

  return ofValue(response);
};

const routerHandlerFiles: HttpRequestRouterHandler<
  BufferStreamLike,
  BufferStreamLike
> = req => {
  const path = req.params["*"] || "";
  const contentType = mime.lookup(path) || "application/octet-stream";

  return pipe(
    bindNodeCallback(fs.stat, (r: fs.Stats) => r)(path),
    map(next =>
      next.isFile() && !next.isDirectory()
        ? createHttpResponse({
            statusCode: HttpStatusCode.OK,
            body: createBufferStreamFromReadable(() =>
              createDisposableStream(fs.createReadStream(path)),
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
          encodeCharsetHttpResponse("text/plain")
        )
    ),
  );
};

const routerHandlerThrow: HttpRequestRouterHandler<
  BufferStreamLike,
  BufferStreamLike
> = _ => throws(() => new Error("internal error"));

const notFound: Operator<
  HttpRequest<BufferStreamLike>,
  ObservableLike<HttpResponse<BufferStreamLike>>
> = req => pipe(
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
        const body = process.env.NODE_ENV === "production"
          ? ""
          : e instanceof Error && isSome(e.stack)
          ? e.stack
          : String(e);

        const statusCode = e instanceof URIError
          ? HttpStatusCode.BadRequest
          : HttpStatusCode.InternalServerError

        return pipe(
          createHttpResponse({
            statusCode,
            body
          }),
          encodeCharsetHttpResponse("text/plain"),
          ofValue
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

const file = "packages/example-react/dist/rollup/bundle.js";
pipe(
  file,
  bindNodeCallback(fs.stat, (r: fs.Stats) => r),
  map(stats => createHttpRequest({
    method: HttpMethod.POST,
    uri: "http://localhost:8080/index.html",
    body: createBufferStreamFromReadable(() =>
      createDisposableStream(fs.createReadStream(file)),
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
  })),
  switchMap(httpClient),
  concatMap(status =>
    status.type === HttpClientRequestStatusType.HeadersReceived
      ? using(
          scheduler => status.response.body.enumerateAsync(scheduler),
          _ => ofValue("done"),
        )
      : ofValue(JSON.stringify(status)),
  ),
  onNotify(console.log),
  onError(console.log),
  onDispose(_ => console.log("dispose")),
  subscribe(scheduler),
);
