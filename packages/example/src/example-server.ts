import fs from "fs";
import iconv from "iconv-lite";
import { createServer as createHttp1Server } from "http";
import { createSecureServer as createHttp2Server } from "http2";
import db from "mime-db";
import mime from "mime-types";
import {
  generate,
  map as mapFlowable,
  FlowableLike,
} from "@reactive-js/core/dist/js/flowable";
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
} from "@reactive-js/core/dist/js/http";
import {
  createHttpRequestListener,
  createHttpClient,
  createContentEncodingDecompressTransforms,
  createContentEncodingCompressTransforms,
} from "@reactive-js/node/dist/js/http";
import {
  encode,
  createFlowableFromReadable,
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
  using,
  concatMap,
  switchMap,
} from "@reactive-js/core/dist/js/observable";
import { isSome } from "@reactive-js/core/dist/js/option";
import {
  pipe,
  Operator,
  returns,
  increment,
  compose,
} from "@reactive-js/core/dist/js/functions";
import {
  toPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/core/dist/js/scheduler";

const scheduler = pipe(
  nodeScheduler,
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
    ofValue,
  );

const routerHandlerEventStream: HttpServer<
  HttpRoutedRequest<FlowableLike<Uint8Array>>,
  HttpResponse<FlowableLike<Uint8Array>>
> = _ => {
  const body = pipe(
    generate(increment, returns<number>(0), 1000),
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
> = returns(throws(() => new Error("internal error")));

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
    ofValue,
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
      ofValue(req),
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

const file = "packages/example/dist/rollup/bundle.js";
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
          pipe("done", ofValue, returns),
        )
      : ofValue(JSON.stringify(status)),
  ),
  onNotify(console.log),
  subscribe(scheduler),
).add(e => {
  console.log("dispose");
  console.log(e);
});
