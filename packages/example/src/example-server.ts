import fs from "fs";
import { createServer as createHttp1Server } from "http";
import { createSecureServer as createHttp2Server } from "http2";
import {
  dispose,
  addDisposableOrTeardown,
} from "@reactive-js/core/lib/disposable";
import {
  encodeUtf8,
  fromObservable,
  map as mapFlowable,
  IOStreamableLike,
} from "@reactive-js/core/lib/io";
import {
  pipe,
  Function1,
  returns,
  increment,
  compose,
  defer,
  bind,
} from "@reactive-js/core/lib/functions";
import {
  createReadableIOStream,
  createDisposableNodeStream,
  bindNodeCallback,
} from "@reactive-js/core/lib/node";
import {
  map,
  subscribe,
  fromValue,
  generate,
  ObservableLike,
  onNotify,
  catchError,
  throws,
  await_,
  using,
  concatMap,
  switchMap,
} from "@reactive-js/core/lib/observable";
import { isSome } from "@reactive-js/core/lib/option";
import {
  createHostScheduler,
  toPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/core/lib/scheduler";
import { stream } from "@reactive-js/core/lib/streamable";
import {
  HttpMethod,
  createHttpRequest,
  createHttpResponse,
  decodeHttpRequestContent,
  disallowProtocolAndHostForwarding,
  HttpResponse,
  HttpStatusCode,
  HttpRequest,
  HttpServer,
  createRoutingHttpServer,
  encodeHttpResponseWithUtf8,
  encodeHttpRequestWithUtf8,
  HttpRoutedRequest,
  HttpClientRequestStatusType,
  withDefaultBehaviors,
  toIOStreamableHttpResponse,
  toIOStreamableHttpRequest,
  encodeHttpClientRequestContent,
  encodeHttpResponseContent,
  HttpStandardHeader,
} from "@reactive-js/http/lib/http";
import {
  createHttpRequestListener,
  createHttpClient,
  createContentEncodingDecompressTransforms,
  createContentEncodingCompressTransforms,
} from "@reactive-js/http/lib/node";
import { HttpExtensionHeader } from "@reactive-js/http/src/lib/http";
import db from "mime-db";
import mime from "mime-types";

const scheduler = pipe(
  createHostScheduler(),
  toPriorityScheduler,
  toSchedulerWithPriority(1),
);

const routerHandlerPrintParams: HttpServer<
  HttpRoutedRequest<IOStreamableLike<Uint8Array>>,
  HttpResponse<IOStreamableLike<Uint8Array>>
> = req =>
  pipe(
    createHttpResponse({
      statusCode: HttpStatusCode.OK,
      contentInfo: {
        contentType: "application/json",
      },
      body: JSON.stringify(req.params),
    }),
    encodeHttpResponseWithUtf8,
    toIOStreamableHttpResponse,
    fromValue(),
  );

const routerHandlerEventStream: HttpServer<
  HttpRoutedRequest<IOStreamableLike<Uint8Array>>,
  HttpResponse<IOStreamableLike<Uint8Array>>
> = bind(
  fromValue(),
  createHttpResponse({
    statusCode: HttpStatusCode.OK,
    body: pipe(
      generate(increment, returns<number>(0), { delay: 1000 }),
      fromObservable(),
      mapFlowable(
        data =>
          `id: ${data.toString()}\nevent: test\ndata: ${data.toString()}\n\n`,
      ),
      encodeUtf8,
    ),
    cacheControl: ["no-cache"],
    contentInfo: {
      contentType: 'text/event-stream; charset="utf-8"',
    },
  }),
);

const routerHandlerFiles: HttpServer<
  HttpRoutedRequest<IOStreamableLike<Uint8Array>>,
  HttpResponse<IOStreamableLike<Uint8Array>>
> = req => {
  const path = req.params["*"] || "";
  const contentType = mime.lookup(path) || "application/octet-stream";

  return pipe(
    bindNodeCallback(fs.stat, (r: fs.Stats) => r)(path),
    map(next =>
      next.isFile() && !next.isDirectory()
        ? createHttpResponse({
            statusCode: HttpStatusCode.OK,
            body: createReadableIOStream(
              defer(path, fs.createReadStream, createDisposableNodeStream),
            ),
            contentInfo: {
              contentLength: next.size,
              contentType,
            },
          })
        : pipe(
            createHttpResponse({
              statusCode: HttpStatusCode.NotFound,
              contentInfo: {
                contentType: "text/plain",
              },
              body: JSON.stringify(req.params),
            }),
            encodeHttpResponseWithUtf8,
            toIOStreamableHttpResponse,
          ),
    ),
  );
};

const routerHandlerThrow: HttpServer<
  HttpRoutedRequest<IOStreamableLike<Uint8Array>>,
  HttpResponse<IOStreamableLike<Uint8Array>>
> = returns(throws()(() => new Error("internal error")));

const notFound: Function1<
  HttpRequest<IOStreamableLike<Uint8Array>>,
  ObservableLike<HttpResponse<IOStreamableLike<Uint8Array>>>
> = req =>
  pipe(
    createHttpResponse({
      statusCode: HttpStatusCode.NotFound,
      contentInfo: {
        contentType: "text/plain",
      },
      body: req.uri.toString(),
    }),
    encodeHttpResponseWithUtf8,
    toIOStreamableHttpResponse,
    fromValue(),
  );

const router = createRoutingHttpServer(
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
      req,
      fromValue(),
      map(
        compose(
          disallowProtocolAndHostForwarding(),
          decodeHttpRequestContent(createContentEncodingDecompressTransforms()),
        ),
      ),
      await_(router),
      map(
        encodeHttpResponseContent(
          createContentEncodingCompressTransforms(),
          db,
        )(req),
      ),
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
            contentInfo: {
              contentType: "text/plain",
            },
            body,
          }),
          encodeHttpResponseWithUtf8,
          toIOStreamableHttpResponse,
          fromValue(),
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

const httpClient = pipe(
  createHttpClient(),
  withDefaultBehaviors(
    encodeHttpClientRequestContent(
      createContentEncodingCompressTransforms(),
      db,
    ),
  ),
);

pipe(
  createHttpRequest({
    method: HttpMethod.POST,
    uri: "http://localhost:8080/index.html",
    body: "some text",
    headers: {
      [HttpStandardHeader.ContentType.toLowerCase()]: "text/plain",
      [HttpExtensionHeader.XForwardedHost.toLowerCase()]: "www.google.com",
      [HttpExtensionHeader.XForwardedProto.toLowerCase()]: "https",
      [HttpStandardHeader.Accept.toLowerCase()]: "application/json, text/html",
    },
  }),
  encodeHttpRequestWithUtf8,
  toIOStreamableHttpRequest,
  httpClient,
  onNotify(status => {
    console.log("status: " + status.type);
    if (status.type === HttpClientRequestStatusType.HeadersReceived) {
      const { response } = status;
      dispose(response.body);
    }
  }),
  subscribe(scheduler),
  addDisposableOrTeardown(e => {
    console.log("dispose value case");
    console.log(e);
  }),
);

const file = "packages/example/build/bundle.js";
pipe(
  file,
  bindNodeCallback(fs.stat, (r: fs.Stats) => r),
  map(stats =>
    createHttpRequest({
      method: HttpMethod.POST,
      uri: "http://localhost:8080/index.html",
      body: createReadableIOStream(
        defer(file, fs.createReadStream, createDisposableNodeStream),
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
          scheduler => stream(status.response.body, scheduler),
          pipe("done", fromValue(), returns),
        )
      : fromValue()(JSON.stringify(status)),
  ),
  onNotify(console.log),
  subscribe(scheduler),
  addDisposableOrTeardown(e => {
    console.log("dispose");
    console.log(e);
  }),
);
