import fs from "fs";
import iconv from "iconv-lite";
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
  ofValueStream,
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
> = req => {
  const buffer = iconv.encode(JSON.stringify(req.params), "utf-8");
  const body = ofValueStream(buffer);
  return ofValue(
    createHttpResponse({
      statusCode: 200,
      body,
      contentInfo:{
        contentLength: buffer.length, 
        contentType: 'text/plain; charset="utf-8"',
      },
    })
  );
};

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
              fs.createReadStream(path),
            ),
            contentInfo: {
              contentLength: next.size,
              contentType,
            },
          })
        : createHttpResponse({
            statusCode: 404,
            body: pipe(
              iconv.encode(JSON.stringify(req.params), "utf-8"),
              ofValueStream,
            ),
            contentInfo: {
              contentType: 'text/plain; charset="utf-8"',
            },
          }),
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
> = req => {
  const buffer = iconv.encode(req.uri.toString(), "utf-8");
  return pipe(
    createHttpResponse({
      statusCode: 404,
      body: ofValueStream(buffer),
      contentInfo: {
        contentLength: buffer.length,
        contentType: 'text/plain; charset="utf-8"',
      },
    }),
    ofValue,
  );
};

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
      // FIXME: Special case some exceptions like URILike parsing exceptions that are due to bad user input
      catchError((e: unknown) => {
        const message = process.env.NODE_ENV === "production"
          ? ""
          : e instanceof Error && isSome(e.stack)
          ? e.stack
          : String(e);
        const buffer = iconv.encode(message, "utf-8"); 
        const body = ofValueStream(buffer);

        return ofValue(
          createHttpResponse({
            statusCode: HttpStatusCode.InternalServerError,
            body,
            contentInfo: {
              contentLength: buffer.length,
              contentType: "text/plain",
            },
          }),
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

const chunk = iconv.encode("some text", "utf-8");
pipe(
  createHttpRequest({
    method: HttpMethod.POST,
    uri: "http://localhost:8080/index.html",
    body: ofValueStream(chunk),
    contentInfo: {
      contentLength: chunk.length,
      contentType: 'text/plain; charset="utf-8"',
    },
    headers: {
      "x-forwarded-host": "www.google.com",
      "x-forwarded-proto": "https",
    },
    preferences: {
      acceptedMediaRanges: ["application/json", "text/html"],
    },
  }),
  httpClient,
  onNotify(status => {
    console.log("status: " + status.type);
    if (status.type === HttpClientRequestStatusType.HeaderReceived) {
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
      fs.createReadStream(file),
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
    status.type === HttpClientRequestStatusType.HeaderReceived
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
