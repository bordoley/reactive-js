import fs from "fs";
import { createServer as createHttp1Server } from "http";
import { createSecureServer as createHttp2Server } from "http2";
import {
  encodeUtf8,
  fromObservable,
  map as mapFlowable,
  FlowableLike,
} from "@reactive-js/core/lib/flowable";
import {
  pipe,
  Operator,
  returns,
  increment,
  compose,
} from "@reactive-js/core/lib/functions";
import {
  createFlowableFromReadable,
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
  encodeHttpResponseWithCharset,
  encodeHttpRequestWithCharset,
  HttpRoutedRequest,
  HttpClientRequestStatusType,
  withDefaultBehaviors,
  toFlowableHttpResponse,
  toFlowableHttpRequest,
  encodeHttpClientRequestContent,
  encodeHttpResponseContent,
} from "@reactive-js/http/lib/http";
import {
  createHttpRequestListener,
  createHttpClient,
  createContentEncodingDecompressTransforms,
  createContentEncodingCompressTransforms,
} from "@reactive-js/http/lib/node";
import iconv from "iconv-lite";
import db from "mime-db";
import mime from "mime-types";

const scheduler = pipe(
  createHostScheduler(),
  toPriorityScheduler,
  toSchedulerWithPriority(1),
);

const encodeHttpRequestWithIConv = encodeHttpRequestWithCharset(iconv.encode);
const encodeHttpResponseWithIConv = encodeHttpResponseWithCharset(iconv.encode);

const routerHandlerPrintParams: HttpServer<
  HttpRoutedRequest<FlowableLike<Uint8Array>>,
  HttpResponse<FlowableLike<Uint8Array>>
> = req =>
  pipe(
    createHttpResponse({
      statusCode: HttpStatusCode.OK,
      body: JSON.stringify(req.params),
    }),
    encodeHttpResponseWithIConv("application/json"),
    toFlowableHttpResponse,
    fromValue(),
  );

const routerHandlerEventStream: HttpServer<
  HttpRoutedRequest<FlowableLike<Uint8Array>>,
  HttpResponse<FlowableLike<Uint8Array>>
> = _ => {
  const body = pipe(
    fromObservable(generate(increment, returns<number>(0), { delay: 1000 })),
    mapFlowable(
      data =>
        `id: ${data.toString()}\nevent: test\ndata: ${data.toString()}\n\n`,
    ),
    encodeUtf8,
  );
  const response = createHttpResponse({
    statusCode: HttpStatusCode.OK,
    body,
    cacheControl: ["no-cache"],
    contentInfo: {
      contentType: 'text/event-stream; charset="utf-8"',
    },
  });

  return fromValue()(response);
};

const routerHandlerFiles: HttpServer<
  HttpRoutedRequest<FlowableLike<Uint8Array>>,
  HttpResponse<FlowableLike<Uint8Array>>
> = req => {
  const path = req.params["*"] || "";
  const contentType = mime.lookup(path) || "application/octet-stream";

  return pipe(
    bindNodeCallback(fs.stat, (r: fs.Stats) => r)(path),
    map(next =>
      next.isFile() && !next.isDirectory()
        ? createHttpResponse({
            statusCode: HttpStatusCode.OK,
            body: createFlowableFromReadable(() =>
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
            encodeHttpResponseWithIConv("text/plain"),
            toFlowableHttpResponse,
          ),
    ),
  );
};

const routerHandlerThrow: HttpServer<
  HttpRoutedRequest<FlowableLike<Uint8Array>>,
  HttpResponse<FlowableLike<Uint8Array>>
> = returns(throws()(() => new Error("internal error")));

const notFound: Operator<
  HttpRequest<FlowableLike<Uint8Array>>,
  ObservableLike<HttpResponse<FlowableLike<Uint8Array>>>
> = req =>
  pipe(
    createHttpResponse({
      statusCode: HttpStatusCode.NotFound,
      body: req.uri.toString(),
    }),
    encodeHttpResponseWithIConv("text/plain"),
    toFlowableHttpResponse,
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
            body,
          }),
          encodeHttpResponseWithIConv("text/plain"),
          toFlowableHttpResponse,
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
      "x-forwarded-host": "www.google.com",
      "x-forwarded-proto": "https",
    },
    preferences: {
      acceptedMediaRanges: ["application/json", "text/html"],
    },
  }),
  encodeHttpRequestWithIConv("text/plain"),
  toFlowableHttpRequest,
  httpClient,
  onNotify(status => {
    console.log("status: " + status.type);
    if (status.type === HttpClientRequestStatusType.HeadersReceived) {
      const { response } = status;
      response.body.dispose();
    }
  }),
  subscribe(scheduler),
).add(e => {
  console.log("dispose value case");
  console.log(e);
});

const file = "packages/example/build/bundle.js";
pipe(
  file,
  bindNodeCallback(fs.stat, (r: fs.Stats) => r),
  map(stats =>
    createHttpRequest({
      method: HttpMethod.POST,
      uri: "http://localhost:8080/index.html",
      body: createFlowableFromReadable(() =>
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
          pipe("done", fromValue(), returns),
        )
      : fromValue()(JSON.stringify(status)),
  ),
  onNotify(console.log),
  subscribe(scheduler),
).add(e => {
  console.log("dispose");
  console.log(e);
});
